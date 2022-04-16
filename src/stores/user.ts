import { defineStore } from 'pinia';
import axios, { setToken } from '../utils/axiosService';
import jwt_decode from 'jwt-decode';
import router from '../router';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    player: null,
  }),
  actions: {
    async loginUser(userData: { username: string; password: string }) {
      const res = await axios.post(
        'https://vankiloitajalohkuja.herokuapp.com/api/auth/login',
        userData,
      );
      setToken(res.data.token);
      const decoded: { player: { id: string; username: string } } = jwt_decode(
        res.data.token,
      );
      this.setCurrentUser(decoded.player);
      router.push('/home');
    },
    setCurrentUser(player: any) {
      this.player = player;
    },
  },
});

// @ts-check
// import { defineStore } from 'pinia'

// export const useUserStore = defineStore({
//   id: 'user',
//   state: () => ({
//     name: 'Eduardo',
//     /** @type {boolean} */
//     isAdmin: true,
//   }),
//   actions: {
//     /**
//      * Attempt to login a user
//      * @param {string} user
//      * @param {string} password
//      */
//     async login(user, password) {
//       const userData = await apiLogin(user, password)

//       this.patch({
//         name: user,
//         ...userData,
//       })
//     },
//     logout() {
//       this.patch({
//         name: '',
//         isAdmin: false,
//       })

//       // we could do other stuff like redirecting the user
//     },
//   },
// })

// /**
//  * Simulate a login
//  * @param {string} a
//  * @param {string} p
//  */
// function apiLogin(a, p) {
//   if (a === 'ed' && p === 'ed') return Promise.resolve({ isAdmin: true })
//   if (p === 'ed') return Promise.resolve({ isAdmin: false })
//   return Promise.reject(new Error('invalid credentials'))
// }
