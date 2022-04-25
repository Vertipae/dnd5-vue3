import { defineStore } from 'pinia';
import axios, { setToken } from '../utils/axiosService';

export interface Character {
  alignment: string;
  characterClass: string;
  date: string;
  level: number;
  name: string;
  player: string;
  race: string;
  spells: string[];
  _id?: string;
  _v?: string;
}

export const useCharacterStore = defineStore({
  id: 'character',
  state: (): { characters: Character[] } => ({
    characters: [],
  }),
  actions: {
    async getCharacters() {
      try {
        const res = await axios.get(
          'https://vankiloitajalohkuja.herokuapp.com/api/characters',
        );
        this.characters = res.data;
        console.log(res.data, 'res.data characters');
      } catch (err) {
        console.log(err);
      }
    },
  },
});
