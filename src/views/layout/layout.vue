<template>
    <div>   
        <!-- 头部 -->
        <div class="top">
            <!-- 头部标题 -->
            <div class="top_left">
                <top-title></top-title>
            </div>
            <!-- 导航 -->
            <div class="top_right">
               <top-nav></top-nav>
            </div>
            <div class="msg">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        Admin<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >退出登陆</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <!-- 问号 -->
                <i class="el-icon-question"></i>

            </div>
        </div>
        <!-- 标签页 -->
        <tab-wrap></tab-wrap>
        
        <!-- 底部 -->
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import topNav from '../../components/nav/topNav'
    import topTitle from '../../components/nav/topTitle'
    import tabWrap from '../../components/tab/tabWrap'
    // @import '../../styles/commom.scss'
    export default {
        components:{
            'top-nav':topNav,
            'top-title':topTitle,
            'tab-wrap':tabWrap,
        }
    }
</script>

<style scoped lang="scss">
    @import '../../styles/common.scss';
    .top{
        height: 90px;
        padding: 24px 24px 14px 28px;
        box-sizing: border-box;
        background-color: #005F8F;
        overflow: hidden;
        position: relative;
        .top_left{
            float: left;
            margin-right: 120px;
        }
        .top_right{
            float: left;
        }
    }
    .msg{
        float: right;
        vertical-align: bottom;
        position: absolute;
        bottom: 14px;
        right: 24px;
        .el-dropdown{
            color: $color;
            font-size: 16px;
            margin-right: 23px;
        }
        [class*=" el-icon-"], [class^=el-icon-]{
            color: $color;
        }
    }
</style>