<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">DnD5</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link active"
                >Home
                <span class="visually-hidden">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/createcharacter" class="nav-link"
                >Create Character</router-link
              >

              <!-- <a class="nav-link" href="#">Create Character</a> -->
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Dungeon Master</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Create Avatar</a>
            </li>
            <!-- <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >Dropdown</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Separated link</a>
              </div>
            </li> -->
          </ul>
          <form class="d-flex">
            <button class="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
            <input
              class="form-control me-sm-2"
              type="text"
              placeholder="Search"
            />

            <button
              class="btn btn-secondary my-2 my-sm-0"
              type="submit"
              @click="logout"
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useUserStore } from '@/stores/user';

export default defineComponent({
  name: 'TheNavbar',
  setup() {
    const userStore = useUserStore();

    return {
      logout: userStore.logoutUser,
    };
  },
});
</script>
<style lang=""></style>
