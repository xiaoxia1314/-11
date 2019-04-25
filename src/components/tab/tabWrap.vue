<template>
    <div class="tabWrap" v-if="nowTab && $route.path!=='/home'">
        <el-tabs v-model="nowTab" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
                v-for="item in addTagNav"
                :key="item.name"
                :label="item.name"
                :name="item.path"
            >
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import {mapState} from 'vuex'
  export default {
    data() {
      return {
          nowTab:sessionStorage.getItem('nowNavTab')
      }
    },
    computed:{
        ...mapState('tab',['addTagNav'])
    },
    mounted() {
    },
    methods: {
        removeTab(targetName){
            if(targetName){
                for(let [index, v] of this.addTagNav.entries()){
                    if(v.path === targetName){
                        this.addTagNav.splice(index,1);
                        let tabNav = JSON.parse(sessionStorage.getItem('addTagNav'));
                        tabNav.splice(index,1);
                        sessionStorage.setItem('addTagNav',JSON.stringify(tabNav))
                        let nextTab = this.addTagNav[index + 1] || this.addTagNav[index -1];
                        if(this.addTagNav.length === 1){
                            this.nowTab = this.addTagNav[0].path;
                            this.$router.push(this.addTagNav[0].path);
                        }else if(this.addTagNav.length > 1){
                            if(nextTab){
                                if(nextTab.path === this.nowTab){
                                    return;
                                }else{
                                    this.nowTab = nextTab.path;
                                    this.$router.push(nextTab.path)
                                }
                            }
                        }else{
                            this.$router.push('/')
                        }
                    }
                }
            }
        }
    },
    watch:{
        nowTab(val) {
            if(this.$route.path === val){
                
            }else{
                this.$router.push(val)
            }
        },
        // 通过监听路由来改变tab的选中状态
        '$route.path': function (to,from) {
            if (this.addTagNav) {
                for(const item of this.addTagNav){
                    if(item.path == to){
                        this.nowTab = item.path
                        sessionStorage.setItem('nowNavTab',JSON.stringify(item.path))
                    }
                }
            }
        }
    }

  }
</script>


<style scoped>
    .tabWrap{
        position: fixed;
        top: 90px;
        width: 100%;
        padding: 12px 24px;
        background: #f0faff;
        z-index: 10;
        box-sizing: border-box;
    }
</style>