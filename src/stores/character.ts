import { defineStore } from 'pinia';
import axios, { setToken } from '../utils/axiosService';
import router from '../router';

export const useCharacterStore = defineStore({
  id: 'character',
  state: () => ({
    characters: [],
  }),
  actions: {
    async getCharacters() {
      try {
        const res = await axios.get(
          'https://vankiloitajalohkuja.herokuapp.com/api/characters',
        );
        this.characters = res.data;
        console.log(res.data, 'res.data');
      } catch (err) {
        console.log(err);
      }
    },
  },
});

// export const useUserStore = defineStore({
//   id: 'user',
//   state: () => ({
//     player: null,
//   }),
//   actions: {
//     async loginUser(userData: { username: string; password: string }) {
//       const res = await axios.post(
//         'https://vankiloitajalohkuja.herokuapp.com/api/auth/login',
//         userData,
//       );
//       setToken(res.data.token);
//       const decoded: { player: { id: string; username: string } } = jwt_decode(
//         res.data.token,
//       );
//       this.setCurrentUser(decoded.player);
//       router.push('/home');
//     },
//     setCurrentUser(player: any) {
//       this.player = player;
//     },
//   },
// });
