/*
 * @Descripttion: ''
 * @version: ''
 * @Author: 周涛
 * @Date: 2021-07-15 00:07:07
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-13 16:55:22
 */
import Vue from 'vue'
import { Card, Button, Row, Col, Tag, Switch, Form, FormItem, Message, MessageBox, Input, Icon, Dropdown, DropdownMenu, DropdownItem, Popover, Tabs, TabPane, Container, Header, Main, Aside, Menu, Submenu, MenuItem, MenuItemGroup, Radio, RadioGroup, RadioButton, Scrollbar, Breadcrumb, BreadcrumbItem, Avatar, Table, TableColumn, DatePicker, Select, Option, Pagination, Loading } from 'element-ui'
import '@/assets/stylues/element-variables.scss'

Vue.component(Card.name, Card)
Vue.component(Button.name, Button)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.component(Tag.name, Tag)
Vue.component(Switch.name, Switch)
Vue.component(Form.name, Form)
Vue.component(FormItem.name, FormItem)
Vue.component(Input.name, Input)
Vue.component(Icon.name, Icon)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)
Vue.component(Popover.name, Popover)
Vue.component(Tabs.name, Tabs)
Vue.component(TabPane.name, TabPane)
Vue.component(Container.name, Container)
Vue.component(Header.name, Header)
Vue.component(Main.name, Main)
Vue.component(Aside.name, Aside)
Vue.component(Menu.name, Menu)
Vue.component(Submenu.name, Submenu)
Vue.component(MenuItem.name, MenuItem)
Vue.component(MenuItemGroup.name, MenuItemGroup)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(RadioButton.name, RadioButton)
Vue.component(Scrollbar.name, Scrollbar)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Avatar.name, Avatar)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Pagination.name, Pagination)
Vue.use(Loading.directive);

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$loading = Loading.service

Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
