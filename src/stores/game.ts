import { defineStore } from 'pinia';
import axios, { setToken } from '../utils/axiosService';

export const useGameStore = defineStore({
  id: 'game',
  state: (): { games: any[] } => ({
    games: [],
  }),
  actions: {
    async getGames() {
      try {
        const res = await axios.get(
          'https://vankiloitajalohkuja.herokuapp.com/api/games',
        );
        this.games = res.data;
        console.log(res.data, 'res.data games');
      } catch (err) {
        console.log(err);
      }
    },
  },
});
