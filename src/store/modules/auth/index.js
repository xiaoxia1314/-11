// import Auth from '../../../utils/auth'
 
// const state = {
//     token:''
// }

// const mutations = {
//     setToken: (state, data) => {
//         if (data) {
//             Auth.setToken(data)
//             Auth.setLoginStatus()
//         } else {
//             Auth.removeToken()
//             Auth.removeLoginStatus()
//         }
//         state.token = data
//     }
// }

// const actions = {
//     // 登录
//     login ({ commit }, data) {
//         return new Promise((resolve) => {
//             commit('setToken', data.token)
//             commit('user/setName', data.name, {
//                 root: true
//             })
//             resolve(true)
//         })
//     },
//     // 登出
//     logout ({ commit }) {
//         console.log('登出')
//         return new Promise((resolve) => {
//             commit('setToken', '')
//             commit('user/setName', '', {
//                 root: true
//             })
//             Auth.removeToken()
//             // commit('tagNav/removeTagNav', '', {
//             //     root: true
//             // })
//             resolve()
//         })
//     }
// }

// export default {
//     state,
//     mutations,
//     actions,
// }
