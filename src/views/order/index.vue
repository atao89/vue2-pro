<!--
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-23 17:36:05
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-13 16:56:10
-->
<template>
  <div class="order">
    <filter-pane :filter-data="filterData" @filterMsg="filterMsg" />
    <table-pane
      :data-source="dataSource"
      @changeSize="changeSize"
      @changeNum="changeNum"
    />
  </div>
</template>

<script>
// import { dynamicShareList } from "@/api/user";
import { timeFormat, randomDate } from "@/utils/tools";
import axios from "axios";
export default {
  name: "DynamicShare",
  data() {
    return {
      // 搜索栏配置
      filterData: {
        timeSelect: {
          width: 230,
        },
        elinput: [
          {
            name: "脸影号",
            width: 230,
            key: "userId",
          },
          {
            name: "动态ID",
            width: 230,
            key: "dynamicId",
          },
          {
            name: "分享ID",
            width: 230,
            key: "shareId",
          },
        ],
        elselect: [
          {
            name: "部门",
            key: "department",
            width: 230,
            option: [
              {
                key: 1,
                value: "技术部",
              },
              {
                key: 2,
                value: "市场部",
              },
            ],
          },
        ],
      },
      // 表格配置
      dataSource: {
        tool: [
          {
            name: "新增版本",
            key: 1,
            // permission: 2010701,
            handleClick: this.handleAdd,
            bgColor: "", //自定义按钮背景色
          },
          {
            name: "修改版本",
            key: 2,
            // permission: 2010701,
            type: "success",
            handleClick: this.handleEdit,
            bgColor: "", //自定义按钮背景色
          },
          {
            name: "查看详情",
            key: 3,
            // permission: 2010701,
            type: "info",
            handleClick: this.handleView,
            bgColor: "", //自定义按钮背景色
          },
        ],
        data: [], // 表格数据
        cols: [
          {
            label: "头像",
            prop: "headImg",
            isImagePopover: true,
            width: 70,
          },
          {
            label: "动态id",
            prop: "dynamicId",
            width: 100,
          },
          {
            label: "分享id",
            prop: "id",
            width: 100,
          },
          {
            label: "分享人脸影号",
            prop: "userId",
          },
          {
            label: "分享人昵称",
            prop: "nickName",
          },
          {
            label: "分享的时间",
            prop: "shareTime",
            isCodeTableFormatter: function (val) {
              return timeFormat(val.shareTime);
            },
          },
          {
            label: "过期时间",
            prop: "expireTime",
            isCodeTableFormatter: function (val) {
              return timeFormat(val.expireTime);
            },
          },
          {
            label: "分享渠道",
            prop: "shareChannel",
            isCodeTableFormatter: function (val) {
              if (val.shareChannel === 1) {
                return "IOS";
              } else {
                return "Android";
              }
            },
          },
          {
            label: "分享平台",
            prop: "shareToWhere",
            isCodeTableFormatter: function (val) {
              if (val.shareToWhere === 1) {
                return "朋友圈";
              } else if (val.shareToWhere === 2) {
                return "微信好友";
              } else if (val.shareToWhere === 3) {
                return "qq空间";
              } else if (val.shareToWhere === 4) {
                return "qq好友";
              } else if (val.shareToWhere === 5) {
                return "新浪微博";
              } else if (val.shareToWhere === 6) {
                return "脸影好友";
              }
            },
          },
        ], // 表格的列数据
        handleSelectionChange: () => {},
        isSelection: false, // 表格有多选时设置
        isOperation: true, // 表格有操作列时设置
        isIndex: true, // 列表序号
        loading: true, // loading
        border: false, // 表格边框
        size: "mini",
        pageData: {
          total: 0, // 总条数
          pageSize: 10, // 每页数量
          pageNum: 1, // 页码
        },
        operation: {
          // 表格有操作列时设置
          label: "操作", // 列名
          width: "100", // 根据实际情况给宽度
          data: [
            // 功能数组
            {
              label: "推荐", // 功能
              type: "icon", //为icon则是图标
              // icon: "iconfont recommend-btn icon-iconkuozhan_tuijianpre", // inconfont图标
              icon: "visits", // svg图标
              // permission: "3010105", // 后期这个操作的权限，用来控制权限
              handleRow: this.handleRow,
            },
            {
              label: "删除", // 操作名称
              type: "danger", //为element btn属性则是按钮
              // permission: "2010702", // 后期这个操作的权限，用来控制权限
              handleRow: this.handleRow,
            },
          ],
        },
      },
      dialogAdd: false,
      msg: {},
      // 生成当月的开始日期
      startShareTime: this.$moment().startOf("month").toDate(),
      // 截止日期
      endShareTime: new Date(),
      startExpireTime: this.$moment().startOf("month").toDate(),
      endExpireTime: new Date("2025-12-12"),
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      const data = {
        // pageSize: this.dataSource.pageData.pageSize,
        // pageNum: this.dataSource.pageData.pageNum,
        page: this.dataSource.pageData.pageNum,
        limit: this.dataSource.pageData.pageSize,
      };
      if (this.msg.userId) {
        var reg = /^\d{9,10}$/;
        if (!reg.test(this.msg.userId)) {
          this.$message({
            type: "error",
            message: "请输入正确的脸影号",
          });
          return;
        }
        data.userId = this.msg.userId;
      }
      if (this.msg.beginDate) {
        data.beginDate = this.msg.beginDate;
        data.endDate = this.msg.endDate;
      }
      if (this.msg.dynamicId) {
        data.dynamicId = this.msg.dynamicId;
      }
      if (this.msg.shareId) {
        data.shareId = this.msg.shareId;
      }
      // this.dataSource.loading = true;
      //   dynamicShareList(data).then((res) => {
      //     this.dataSource.loading = false;
      //     if (res.succeed) {
      //       if (res.data.total > 0) {
      //         this.dataSource.pageData.total = res.data.total;
      //         this.dataSource.data = res.data.data;
      //       } else {
      //         this.dataSource.data = [];
      //         this.dataSource.pageData.total = 0;
      //       }
      //     }
      //   });

      // params参数必写 , 如果没有参数传{}也可以  api total: 2924 - 29231
      this.dataSource.loading = true;
      axios
        .get("https://cnodejs.org/api/v1/topics", { params: data })
        .then((res) => {
          this.dataSource.data = [];
          this.dataSource.pageData.total = 0;
          if (res.data.success) {
            setTimeout(() => {
              this.dataSource.loading = false;
            }, 300);
            let data = res.data.data;
            let len = res.data.data.length;
            data.forEach((item, index) => {
              this.dataSource.data.push({
                headImg: "https://picsum.photos/200/200?random=" + (index + 1),
                dynamicId:
                  "dynamicId" +
                  ((this.dataSource.pageData.pageNum - 1) * 10 + (index + 1)),
                id:
                  "id" +
                  ((this.dataSource.pageData.pageNum - 1) * 10 + (index + 1)),
                userId:
                  "userId" +
                  ((this.dataSource.pageData.pageNum - 1) * 10 + (index + 1)),
                nickName:
                  "nickName" +
                  ((this.dataSource.pageData.pageNum - 1) * 10 + (index + 1)),
                // shareTime: new Date().getTime(), // 获取当前时间戳1
                shareTime: this.$moment(
                  randomDate(this.startShareTime, this.endShareTime)
                ).format("YYYY-MM-DD HH:mm:ss"),
                // expireTime: new Date().getTime(),  // 获取当前时间戳2
                expireTime: this.$moment(
                  randomDate(this.startExpireTime, this.endExpireTime)
                ).format("YYYY-MM-DD HH:mm:ss"),
                shareChannel: index + 1,
                shareToWhere: index + 1 <= 6 ? index + 1 : 6,
              });
            });
            this.dataSource.pageData.total = 29231;
          }
        });
    },
    filterMsg(msg) {
      this.msg = msg;
      console.log(msg);
      this.getList();
    },
    changeSize(size) {
      this.dataSource.pageData.pageSize = size;
      this.getList();
    },
    changeNum(pageNum) {
      this.dataSource.pageData.pageNum = pageNum;
      this.getList();
    },

    // 表格上方按钮操作
    handleAdd(name, e) {
      console.log("1--------", name, e);
    },
    handleEdit(name, e) {
      console.log("2--------", name, e);
    },
    handleView(name, e) {
      console.log("3--------", name, e);
    },

    // 表格操作列上的按钮
    handleRow(index, row, label) {
      console.log("++++++++", index, row, label);
    },
  },
};
</script>

<style  scoped lang='scss'>
</style>
