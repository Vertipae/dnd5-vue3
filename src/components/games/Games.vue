<template>
  <div class="container">
    <div
      v-for="game in games"
      class="card border-primary mb-3"
      style="max-width: 20rem"
    >
      <div class="card-header">Games</div>
      <div class="card-body">
        <h4 class="card-title">{{ game.name }}</h4>
        <span v-if="game.characters.length > 0">
          <span class="yourChar">Your character in this game: </span></span
        >

        <p class="card-text" v-for="yourChar in game.characters">
          {{ yourChar.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from 'pinia';
import { ref, onMounted, defineComponent } from 'vue';
import { useGameStore } from '../../stores/game';

export default defineComponent({
  name: 'Games',
  setup() {
    const gameStore = useGameStore();
    const { games } = storeToRefs(gameStore);

    onMounted(() => {
      // console.log('game', gameStore.getGames());

      gameStore.getGames();
      console.log(games, 'games');
    });
    return { games };
  },
});
</script>
<style>
.container {
  padding: 1.5em;
  display: inline-grid;
  grid-template-columns: auto auto auto;
}
.yourChar {
  color: #c3a2ff;
}
.card-text {
  margin: 0;
}
</style>
