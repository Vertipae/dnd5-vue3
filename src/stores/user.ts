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

    logoutUser() {
      setToken(null);
      this.setCurrentUser(null);
      router.push('/');
    },
  },
});
