<template>
    <div class="top_nav">
        <!-- <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal"  @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="/home">首页</el-menu-item>
            <el-menu-item index="/officeSystem">办公系统</el-menu-item>
            <el-menu-item index="/handleSystem">办案系统</el-menu-item>
            <el-submenu index="4">
                <template slot="title" mode="horizontal">视频录像</template>
                <el-menu-item index="/videoFootage/videoDemand">录像点播</el-menu-item>
                <el-menu-item index="/videoFootage/videoPlayback">录像回放</el-menu-item>
                <el-menu-item index="4-3">检索服务</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">基础管理</template>
                <el-menu-item index="5-1">添加设备</el-menu-item>
                <el-menu-item index="5-2">设备管理</el-menu-item>
                <el-menu-item index="5-3">组织管理</el-menu-item>
            </el-submenu>
            <el-menu-item index="6">报警管理</el-menu-item>
            <el-submenu index="7">
                <template slot="title">系统管理</template>
                <el-menu-item index="7-1">用户管理</el-menu-item>
                <el-menu-item index="7-2">角色管理</el-menu-item>
                <el-menu-item index="7-3">办公办案自定义</el-menu-item>
                <el-menu-item index="7-4">业务组管理</el-menu-item>
            </el-submenu>
            <el-submenu index="8">
                <template slot="title">运维管理</template>
                <el-menu-item index="8-1">设备统计</el-menu-item>
                <el-menu-item index="8-2">视频质量检测</el-menu-item>
                <el-menu-item index="8-3">统计数据</el-menu-item>
                <el-menu-item index="8-4">资源控件</el-menu-item>
                <el-menu-item index="8-5">日志管理</el-menu-item>
            </el-submenu>
        </el-menu> -->

        <!-- 动态路由 -->
        <!-- <el-menu  :default-active="'/home'"  class="el-menu-demo" unique-opened  mode="horizontal"  @select="handleSelect" background-color="#545c64" text-color="#E0F5FF" active-text-color="#49BCF5" router> 
            <template v-for="navMenu in navMenus">
                <el-menu-item v-if="!navMenu.childs" :key="navMenu.id" :data="navMenu" :index="navMenu.path">
                    {{navMenu.name}}
                </el-menu-item>
                <el-submenu v-if="navMenu.childs" :key="navMenu.id" :index="navMenu.id" popper-append-to-body>
                    <template slot="title">{{navMenu.name}}</template>
                    <el-menu-item v-for="item in navMenu.childs" :key="item.id" :data="item" :index="item.path">
                    {{item.name}}
                </el-menu-item>
                </el-submenu>
            </template>
        </el-menu> -->
         <ul>
            <template v-for="(item,index) of navMenus">
                <li v-if="!item.childs"
                :key="index"
                :class="cpNavindex==index?'cp_li':''"
                @click="show(item,index)">{{item.name}}</li>
                <li v-else :key="index"
                    :class="cpNavindex==index?'cp_li':''"
                    @click.self="show(item,index)"
                    tabindex="-1"
                    @focus="item.flag = true"
                    @blur="item.flag=false">
                    {{item.name}}
                    <ul :class="item.flag?'show_ul':''">
                        <li v-for="(subItem,subIndex) of item.childs"
                            :key="subIndex"
                            :class="cpSubId == subItem.id?'cp_sub':''"
                            @click.stop="select(subItem)">{{subItem.name}}</li>
                    </ul>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
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
               childs:null,
            },
            {
               id:'2',
               name:'办公系统',
               path:'/officeSystem',
               childs:null,
            },
            {
               id:'3',
               name:'办案系统',
               path:'/handleSystem',
               childs:null,
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
               childs:null,
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
    methods: {
       handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      show(val,index){
        this.cpNavindex = index
        if(val.childs){
            console.log(this.navMenus[index])
            if(this.cpSubId != val.childs[0].id){
                this.cpSubId = val.childs[0].id
                this.goPath(val.childs[0].path)
            }
        }else{
            this.goPath(val.path)
        }
      },
      select(obj){
            this.cpSubId = obj.id
            this.goPath(obj.path) 
      },
      goPath(path){
          this.$router.push({
              path:path
          })
      },
    //   给对象添加开关
        setData(){
            this.navMenus.forEach(item=>{
                if(item.childs){
                   item = Object.assign({},item,{flag:false})
                }
            })
        }
    },
    mounted() {
        this.setData()
    },
};
</script>

<style scoped lang="scss">
    .top_nav{
        overflow: hidden;
        height: 100px;
        >ul{
            height: 50px;
            background: #000;
            line-height: 50px;
            >li{
                float: left;
                width: 70px;
                text-align: center;
                position: relative;
                padding-bottom: 3px;
               ul{
                    position: absolute;
                    top: 20px;
                    left: 0;
                    z-index: -20;
                    opacity: 0;
                    transition: all .4s;
                    background-color: #f00;
                    color: #000;
                    width: 300px;
                    li{
                        float: left;
                        width: 60px;
                    }
                    .cp_sub{
                        color:yellow;
                    }
                }
                .show_ul{
                    opacity: 1;
                    z-index: 20;
                    top:50px;
                }
            }
            .cp_li{
                padding-bottom: 0 !important;
                border-bottom: 3px solid yellow;
            }
        }
    }
</style>