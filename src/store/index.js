// import { createStore } from "vuex";
// import axios from "axios";

// export default createStore({
//   state: {
//     isLogin: false,
//     userId: "",
//     filmsInfo: []
//   },
//   mutations: {
//     auth(state, user) {
//       state.isLogin = true;
//       state.userId = user;
//     },
//     setFilmsInfo(state, data) {
//       state.filmsInfo = data;
//     },
//   },
//   actions: {
//     fetch(context, user) {
//       context.commit("auth", user);
//     },
//     async filmsGet({ commit }) {
//       const response = await axios.get('http://localhost:9091/films');
//       commit('setFilmsInfo', response.data); // 调用 setFilmsInfo 更新 state 中的数据
//       return response;
//     },
//   },
//   modules: {},
// });

import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    isLogin: false,
    userId: "",
    filmsInfo: {
      // status: 0,
      // data: {
      //   films: [],
      // },
      // msg: "",
    },
  },
  mutations: {
    auth(state, user) {
      state.isLogin = true;
      state.userId = user;
    },
    films(state, films) {
      state.filmsInfo = films;
    },
  },
  actions: {
    fetch(context, user) {
      context.commit("auth", user);
    },
    async filmsGet(context) {
      const base = 'http://192.168.0.210:9091/films';
      await axios
        .get(base)
        .then(function (response) {
          console.log(response);
          if (response.status == 200) {
            context.commit("films", response.data);
          } else {
            console.log(`データ取得異常`);
          }
        })
        .catch(function (error) {
          console.log(error);
          console.log(`データ取得異常`);
        });
    },
  },
  modules: {},
});
