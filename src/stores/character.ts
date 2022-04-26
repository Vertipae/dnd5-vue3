import { defineStore } from 'pinia';
import axios, { setToken } from '../utils/axiosService';
import router from '../router';

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
  state: (): { characters: Character[]; classes: any; character: any } => ({
    characters: [],
    classes: [],
    character: {},
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
    async getClass() {
      try {
        const res = await axios.get(
          'https://vankiloitajalohkuja.herokuapp.com/api/classes',
        );
        this.classes = res.data;
        console.log(res.data, 'classes');
      } catch (err) {
        console.log(err);
      }
    },

    async addCharacter(characterData: any) {
      try {
        const res = await axios.post(
          'https://vankiloitajalohkuja.herokuapp.com/api/characters',
          characterData,
        );
        this.character = res.data;
        router.push('/home');

        // console.log(characterData, 'characterData');
        // console.log(this.character, 'this.character');
        // console.log(res.data, 'addCharacter');
      } catch (err) {
        console.log(err);
      }
    },
    // https://vankiloitajalohkuja.herokuapp.com/api/classes/barbarian/spells
  },
});
