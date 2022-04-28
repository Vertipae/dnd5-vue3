<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <h1>Edit your character {{ characterRef.name }}</h1>
      <div class="form-group has-success">
        <label class="form-label mt-4" for="inputValid"
          >Character Name <span class="asterisk">*</span></label
        >
        <!-- :value="character.name" -->
        <input
          type="text"
          class="form-control"
          name="name"
          id="inputValid"
          v-model="name"
        />
        <div class="valid-feedback">Success! You've done it.</div>
      </div>

      <div class="form-group has-success">
        <label class="form-label mt-4" for="inputValid"
          >Level <span class="asterisk">*</span></label
        >
        <!-- :value="character.level" -->
        <input
          type="text"
          class="form-control"
          name="level"
          id="inputValid"
          v-model="level"
        />
        <div class="valid-feedback">Success! You've done it.</div>
      </div>

      <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4"
          >Race Select <span class="asterisk">*</span></label
        >
        <!-- :value="character.race" -->
        <select class="form-select" id="exampleSelect1" v-model="race">
          <option value="Aasimar">Aasimar</option>
          <option value="Dragonborn">Dragonborn</option>
          <option value="Dwarf">Dwarf</option>
          <option value="Elf">Elf</option>
          <option value="Gnome">Gnome</option>
          <option value="Half-Elf">Half-Elf</option>
          <option value="Half-Orc">Half-Orc</option>
          <option value="Halfling">Halfling</option>
          <option value="Human">Human</option>
          <option value="Tiefling">Tiefling</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4"
          >Class Select <span class="asterisk">*</span></label
        >
        <!-- :value="character.characterClass" -->
        <select
          class="form-select"
          id="exampleSelect1"
          v-model="characterClass"
        >
          <option v-for="charClass in classes.results" :key="charClass.name">
            {{ charClass.name }}
          </option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4"
          >Alignment Select</label
        >
        <!-- :value="character.alignment" -->
        <select class="form-select" id="exampleSelect1" v-model="alignment">
          <option value="Lawful good">Lawful good</option>
          <option value="Lawful neutral">Lawful neutral</option>
          <option value="Lawful evil">Lawful evil</option>
          <option value="Neutral good">Neutral good</option>
          <option value="Neutral">Neutral</option>
          <option value="Neutral evil">Neutral evil</option>
          <option value="Chaotic good">Chaotic good</option>
          <option value="Chaotic neutral">Chaotic neutral</option>
          <option value="Chaotic evil">Chaotic evil</option>
        </select>
      </div>

      <button type="submit" class="btn btn-outline-secondary">Submit</button>
      <button @click="cancel" class="btn btn-outline-dark">Cancel</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';
import { useCharacterStore } from '@/stores/character';
import { storeToRefs } from 'pinia';
import router from '../router';
import { useRoute } from 'vue-router';

export default defineComponent({
  name: '',
  setup() {
    const route = useRoute();
    const characterStore = useCharacterStore();
    const { classes } = storeToRefs(characterStore);
    const cancel = () => {
      router.push('/home');
    };

    const character = characterStore.getCharacterById(
      route.params.id.toString(),
    );

    const name = ref(character.name);
    const race = ref(character.race);
    const characterClass = ref(character.characterClass);
    const level = ref(character.level);
    const alignment = ref(character.alignment);
    const characterRef = ref(character);
    const onSubmit = () => {
      console.log('click submit');

      const characterData = {
        name: name.value,
        race: race.value,
        characterClass: characterClass.value,
        level: level.value,
        alignment: alignment.value,
        // spells
      };
      characterStore.updateCharacter(characterData, route.params.id.toString());
    };

    onMounted(() => {
      characterStore.getClass();
    });

    return {
      cancel,
      classes,
      character,
      getCharacterById: characterStore.getCharacterById,
      onSubmit,
      name,
      race,
      characterClass,
      level,
      alignment,
      characterRef,
    };
  },
});
</script>
<style scoped></style>
