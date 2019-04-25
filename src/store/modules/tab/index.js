// import router from '@/router/router'
// import router from 'vue-router'
import router from '../../../router'

const state = {
    // 当前打开的tab
    nowTab: '',
    // 已经打开的页面
    openedPageList: [],
    addTagNav:JSON.parse(sessionStorage.getItem('addTagNav'))
}

const mutations = {
    setAddTagNavData(state, data){
        state.addTagNav = JSON.parse(sessionStorage.getItem('addTagNav'))
    },
    addTagNav(state, data){
        // 判断已经打开的页面是否已经有当前的tab
        const checkChildMenu={
            name:data.name,
            path:data.path,

        }
        if(state.openedPageList.length === 0){
            state.nowTab = checkChildMenu.path;
            state.openedPageList.push(checkChildMenu)
        }else{
            // 添加openedList
            if(state.openedPageList.some(val => val.path === checkChildMenu.path)) return
            state.nowTab = checkChildMenu.path;
            state.openedPageList.push(checkChildMenu);
        }
    },
    // 更新tab标签
    updateTab ( state , data){
        state.nowTab = data
    },
    // 移除tab标签
    removeTagNav( state , targetName){
        if(targetName){
            for(let [index ,v] of state.openedPageList.entries()){
                if(v.path === targetName){
                    state.openedPageList.splice(index,1);
                    let nextTab = state.openedPageList[index+1] || state.openedPageList[index - 1];
                    if(state.openedPageList.length === 1){
                        state.nowTab =state.openedPageList[0].push
                        router.push(state.openedPageList[0].path)
                    }else if(state.openedPageList.length > 1){
                        if(nextTab){
                            if(nextTab.path === state.nowTab){
                                return
                            }else{
                                state.nowTab = nextTab.path;
                                router.push(nextTab.path)
                            }
                        }else{
                            router.push('/')
                        }
                    }
                }else{
                    router.push('/')
                }
            }
        }
    }
}

const actions ={
    setAddTagNavFn({state,commit}){
        commit('setAddTagNavData')
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}