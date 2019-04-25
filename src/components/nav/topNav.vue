<template>
    <div class="top_nav">
         <ul>
            <template v-for="(item,index) of navMenus">
                <li v-if="!item.childs || !item.childs.length"
                :key="index"
                :class="thisPath(item)?'cp_li':''"
                @click="show(item,index)">{{item.name}}</li>
                <li v-else :key="index"
                    :class="thisPath(item)?'cp_li':''"
                    tabindex="-1"
                    @focus="show(item,index)"
                    @blur="openCpSubUl=''">
                    {{item.name}}
                    <ul :class="thisPath(item,index)?'show_ul':''">
                        <li v-for="(subItem,subIndex) of item.childs"
                            :key="subIndex"
                            :class="thisPath(subItem)?'cp_sub':''"
                            @click="select(subItem)">{{subItem.name}}</li>
                    </ul>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
      return {
        activeIndex: '/home',
        activeIndex2: '/home',
        navMenus:[
           {
               id:'1',
               name:'首页',
               path:'/home',
               childs:[],
            },
            {
               id:'2',
               name:'办公系统',
               path:'/officeSystem',
               childs:[],
            },
            {
               id:'3',
               name:'办案系统',
               path:'/handleSystem',
               childs:[],
            },
            {
               id:'4',
               name:'视频录像',
               path:'/videoFootage',
               childs:[
                   {
                        id:'5',
                        name:'录像点播',
                        path:'/videoFootage/videoDemand',
                   },
                   {
                        id:'6',
                        name:'录像回放',
                        path:'/videoFootage/videoPlayback',
                   },
                   {
                        id:'7',
                        name:'检索服务',
                        path:'/videoFootage/retrievalService',
                   }
               ]
           },
           {
               id:'8',
               name:'基础管理',
               path:'/basicManagement',
               childs:[
                   {
                        id:'9',
                        name:'添加设备',
                        path:'/basicManagement/addDevice',
                   },
                   {
                        id:'10',
                        name:'设备管理',
                        path:'/basicManagement/deviceManagement',
                   },
                   {
                        id:'11',
                        name:'组织管理',
                        path:'/basicManagement/organizationManagement',
                   },
               ]
            },
            {
               id:'12',
               name:'报警管理',
               path:'/alarmManagement',
               childs:[],
            },
            {
               id:'13',
               name:'系统管理',
               path:'/SystemManagement',
               childs:[
                   {
                        id:'14',
                        name:'用户管理',
                        path:'/SystemManagement/userManagement',
                   },
                   {
                        id:'15',
                        name:'角色管理',
                        path:'/SystemManagement/roleManagement',
                   },
                   {
                        id:'16',
                        name:'办公办案自定义',
                        path:'/SystemManagement/officeCustom',
                   },
                   {
                        id:'17',
                        name:'业务组管理',
                        path:'/SystemManagement/businessGroupManagement',
                   },
               ]
            },
            {
               id:'18',
               name:'运维管理',
               path:'/operationManagement',
               childs:[
                   {
                        id:'19',
                        name:'设备统计',
                        path:'/operationManagement/deviceStatistics',
                   },
                   {
                        id:'20',
                        name:'视频质量检测',
                        path:'/operationManagement/videoQualityDetection',
                   },
                   {
                        id:'21',
                        name:'统计数据',
                        path:'/operationManagement/statisticalData',
                   },
                   {
                        id:'22',
                        name:'资源监控',
                        path:'/operationManagement/resourceMonitor',
                   },
                   {
                        id:'23',
                        name:'日志管理',
                        path:'/operationManagement/logManagement',
                   },
               ]
            },
        ],
        cpNavindex:0,
        cpSubId:'',
        openCpSubUl:''
      };
    },
    computed:{
        thisPath(){
            return (val)=>{
                return this.$route.path == val.path ||this.$route.path.indexOf(val.path) >-1? true:false
            }
        }
    },
    methods: {
        ...mapActions('tab',['setAddTagNavFn']),
        // 导航存储
        getNav(val){
            // 导航的存储
            let addTagNav=[]
            // 存储导航栏
            if(!sessionStorage.getItem('addTagNav')){
                addTagNav.push(val);
                sessionStorage.setItem('nowNavTab',val.path)
                sessionStorage.setItem('addTagNav',JSON.stringify(addTagNav))
            }else{
                addTagNav = JSON.parse(sessionStorage.getItem('addTagNav'))
                if(addTagNav.some(checkVal => checkVal.id === val.id)){
                    return
                }
                addTagNav.push(val);
                sessionStorage.setItem('nowNavTab',val.path)
                sessionStorage.setItem('addTagNav',JSON.stringify(addTagNav))
            }
            this.setAddTagNavFn()
        },
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      show(val,index){
        if(index === 0 || index === 1 || index === 2){
            sessionStorage.removeItem('addTagNav')
            this.setAddTagNavFn()
        }
        this.path = val.path
        this.cpNavindex = index
        console.log(val);
        
        if(val.childs.length){
            console.log('111111');
            
            this.openCpSubUl = val.id
        }else{
            console.log(2222222222);
            
            this.goPath(val)
        }
      },
      select(obj){
            this.cpSubId = obj.id
            this.goPath(obj) 
            this.getNav(obj)
      },
      goPath(val){
          this.$router.push({
              path:val.path
          })
      },
       getIndex(val){
        this.navMenus.forEach((item,index)=>{
             if(item.path == val){
                this.path = item.path
                this.cpNavindex = index
                this.cpSubId = null
             }
             if(item.childs){
                item.childs.forEach((sub,i)=>{
                    if(sub.path == val){
                        this.path = sub.path
                        this.cpNavindex = index
                        this.cpSubId = sub.id
                    }
                })
             }
         })
      }
    },
    watch:{
        // cpNavindex(val){
        //     if(this.navMenus[val].childs){
        //         if(this.navMenus[val].childs[0].id != this.cpSubId){
        //             this.cpSubId = this.navMenus[val].childs[0].id
        //             this.goPath(this.navMenus[val].childs[0].path)
        //             this.getNav(this.navMenus[val].childs[0])
        //         }
        //     }
        // },
        cpNavindex(val,oldVal){
            if(this.navMenus[val].childs.length){
                if(this.navMenus[val].childs[0].id != this.cpSubId && this.navMenus[val].path === this.path){
                    // if(this.navMenus[val].childs[0].disabled){
                        this.cpSubId = this.navMenus[val].childs[0].id
                        this.goPath(this.navMenus[val].childs[0])
                        this.getNav(this.navMenus[val].childs[0])
                    // }else{
                    //     let firstDate =  this.navMenus[val].childs.find((v,index) =>{
                    //         if(v.disabled){
                    //             return v
                    //         }
                    //     })
                    //     this.cpSubId = firstDate.id
                    //     this.goPath(firstDate)
                    //     this.getNav(firstDate)
                    // }
                }
            }else{
                this.cpSubId = null
            }
        },
        $route(to,from){            
            if(to.path != from.path){                
                this.getIndex(to.path)
            }
        }
    }
};
</script>

<style scoped lang="scss">
    @import '../../styles/common.scss';
    .top_nav{
        // overflow: hidden;
        height: 80px;
        >ul{
            @include clearfix();
            font-size: 16px;
            color: $color;
            >li{
                height: 28px;
                float: left;
                // width: 70px;
                margin: 0px 10px;
                text-align: center;
                position: relative;
                padding-bottom: 3px;
                outline: none;
               ul{
                    position: absolute;
                    top: 20px;
                    left: -200px;
                    z-index: -20;
                    opacity: 0;
                    transition: all .4s;
                    // background-color: #f00;
                    color: $color;
                    width: 452px;
                
                    li{
                        float: left;
                        margin: 0px 10px
                    }
                    .cp_sub{
                        color:$activeColor;
                        padding-bottom: 6px;
                        border-bottom: 1px solid $activeColor;
                    }
                }
                .show_ul{
                    opacity: 1;
                    z-index: 20;
                    top:38px;
                }
            }
            .cp_li{
                padding-bottom: 0 !important;
                border-bottom: 1px solid $activeColor;
                color: $activeColor
            }
        }
    }
</style>