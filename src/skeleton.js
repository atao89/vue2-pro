/*
 * @Descripttion: 
 * @version: 
 * @Author: 周涛
 * @Date: 2021-08-30 18:03:01
 * @LastEditors: 周涛
 * @LastEditTime: 2021-09-02 17:32:31
 */
import Vue from 'vue';
import Skeleton1 from './components/skeleton/Skeleton1.vue';
import Skeleton2 from './components/skeleton/Skeleton2.vue';

export default new Vue({
    components: {
        Skeleton1,
        Skeleton2,
    },
    template: `
         <div style='height: 100%;'>
             <skeleton1 id="skeleton1" style="display:none"/>
             <skeleton2 id="skeleton2" style="display:none"/>
         </div>
      `
})

// export default new Vue({
//   components: {
//     Skeleton,
//   },
//   render: h => h(Skeleton),
// });
