// import Cookies from 'js-cookie'

// const state = {
//     // 用户名
//     name:''
// }

// const mutations = {
//     setName: (state, data) => {
//         if (data) {
//             Cookies.set('userName', encodeURIComponent(data), {
//                 expires: 365
//             })
//         } else {
//             Cookies.remove('userName')
//         }
//         state.name = data
//     },
// }

// const actions = {
//     getUserInfo({ commit }, data){
//         return new Promise((resolve) => {
//             // 用户姓名
//             commit('setName',data.name);
//         })
//     }
// }

// export default {
//     namespaced: true,
//     state,
//     mutations,
//     actions
// }
