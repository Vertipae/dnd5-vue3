<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import TheNavbar from '@/components/TheNavbar.vue';
import { ref, onMounted, defineComponent } from 'vue';
import { useCharacterStore } from '@/stores/character';

import { storeToRefs } from 'pinia';
import { useUserStore } from './stores/user';

import TheWelcome from './components/TheWelcome.vue';
import { setToken } from './utils/axiosService';
import jwt_decode from 'jwt-decode';
import router from './router';

const userStore = useUserStore();

const { player } = storeToRefs(userStore);
const characterStore = useCharacterStore();

onMounted(() => {
  characterStore.getClass();
  characterStore.getCharacters();
  console.log(localStorage, 'localStorage');

  if (localStorage.accessToken) {
    setToken(localStorage.accessToken);

    const decoded: any = jwt_decode(localStorage.accessToken);
    userStore.setCurrentUser(decoded.player);

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      userStore.logoutUser();
      router.push('/');
    }
  } else {
    // TODO: Fix this later
    router.push('/');
  }
});
</script>

<!-- Pohja -->
<!-- <template></template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: '',
  setup() {},
});
</script>
<style scoped></style> -->

<template>
  <!-- <header> -->
  <!-- <div class="wrapper"> -->
  <template v-if="player">
    <TheNavbar />
  </template>
  <template v-else>
    <TheWelcome />
  </template>

  <!-- <HelloWorld msg="You did it!" /> -->

  <!-- <nav>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
  <!-- </div> -->
  <!-- </header> -->

  <RouterView />
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}

/* #app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
