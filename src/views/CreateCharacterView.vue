<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <h1>Create a new character</h1>
      <div class="form-group has-success">
        <label class="form-label mt-4" for="inputValid"
          >Character Name <span class="asterisk">*</span></label
        >
        <input
          type="text"
          class="form-control"
          v-bind:class="{ 'is-valid': nameValid }"
          name="name"
          @blur="isValid"
          v-model="name"
          id="inputValid"
        />
        <div class="valid-feedback">Success! You've done it.</div>
      </div>

      <div class="form-group has-success">
        <label class="form-label mt-4" for="inputValid"
          >Level <span class="asterisk">*</span></label
        >
        <input
          type="text"
          class="form-control"
          name="level"
          v-bind:class="{ 'is-valid': levelValid }"
          @blur="isValid"
          v-model="level"
          id="inputValid"
        />
        <div class="valid-feedback">Success! You've done it.</div>
      </div>

      <!-- <div class="form-group has-danger">
    <label class="form-label mt-4" for="inputInvalid">Invalid input</label>
    <input
      type="text"
      value="wrong value"
      class="form-control is-invalid"
      id="inputInvalid"
    />
    <div class="invalid-feedback">Please fill out this field.</div>
  </div> -->

      <div class="form-group">
        <label for="exampleSelect1" class="form-label mt-4"
          >Race Select <span class="asterisk">*</span></label
        >
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
import { useCharacterStore } from '@/stores/character';
import { storeToRefs } from 'pinia';
import { ref, onMounted, defineComponent } from 'vue';
import router from '../router';

export default defineComponent({
  name: 'CreateCharacter',
  setup() {
    const nameValid = ref(false);
    const levelValid = ref(false);

    const name = ref('');
    const race = ref('');
    const characterClass = ref('');
    const level = ref('');
    const alignment = ref('');

    const characterStore = useCharacterStore();
    const { classes } = storeToRefs(characterStore);

    const isValid = (e: any) => {
      if (e.target.value.length > 0) {
        if (e.target.name === 'name') nameValid.value = true;
        else levelValid.value = true;
      } else {
        if (e.target.name === 'name') nameValid.value = false;
        else levelValid.value = false;
      }
    };

    onMounted(() => {
      characterStore.getClass();
    });

    const onSubmit = () => {
      console.log('click submit');
      // addCharacter
      const characterData = {
        name: name.value,
        race: race.value,
        characterClass: characterClass.value,
        level: level.value,
        alignment: alignment.value,
        // spells
      };
      characterStore.addCharacter(characterData);
      console.log(characterData, 'characterData');
    };

    const cancel = () => {
      router.push('/home');
    };

    return {
      isValid,
      nameValid,
      levelValid,
      classes,
      onSubmit,
      name,
      race,
      characterClass,
      level,
      alignment,
      cancel,
    };
  },
});
</script>
<style scoped>
.asterisk {
  color: #ea39b8;
}

.container {
  margin-top: 2.5em;
}

input,
select {
  max-width: 700px;
}

button {
  margin-top: 0.7em;
}
</style>
