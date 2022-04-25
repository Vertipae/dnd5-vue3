<template>
  <div class="container">
    <div
      v-for="character in characters"
      class="card border-secondary mb-3"
      style="max-width: 20rem"
    >
      <div class="card-header">
        Race: {{ character.race }} Class: {{ character.characterClass }}
      </div>
      <div class="card-body">
        <h4 class="card-title">{{ character.name }}</h4>
        <span v-if="character.spells.length > 0">
          <span class="spells">Spells:</span>
          <p v-for="spell in character.spells" class="card-text">
            {{ spell }}
          </p>
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { ref, onMounted, defineComponent } from 'vue';
import { useCharacterStore } from '../../stores/character';

export default defineComponent({
  name: 'Characters',
  setup() {
    const characterStore = useCharacterStore();
    const { characters } = storeToRefs(characterStore);

    onMounted(() => {
      // console.log('char', characterStore.getCharacters());
      console.log(characters, 'characters');
      characterStore.getCharacters();
    });
    return { characters };
  },
});
</script>
<style scoped>
.container {
  padding: 1.5em;
  display: inline-grid;
  grid-template-columns: auto auto auto;
}

.spells {
  color: #f16acb;
}
.card-text {
  margin: 0;
}
</style>
