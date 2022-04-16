<template>
  <div class="login">
    <form @submit.prevent="onSubmit">
      <fieldset>
        <legend>Login</legend>
        <div class="form-group row">
          <!-- <label for="staticEmail" class="col-sm-2 col-form-label"
            >Username</label
          >
          <div class="col-sm-10">
            <input
              type="text"
              readonly=""
              class="form-control-plaintext"
              id="staticEmail"
              value="email@example.com"
            />
          </div> -->
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1" class="form-label mt-4"
            >Username</label
          >
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter username"
          />
          <!-- <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          > -->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1" class="form-label mt-4"
            >Password</label
          >
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useUserStore } from '../stores/user';

export default defineComponent({
  name: 'Login',
  setup() {
    const userStore = useUserStore();

    // const password = ref('asd');

    const onSubmit = () => {
      console.log('click');

      const userData = {
        username: 'testii5',
        password: '123456',
      };
      userStore.loginUser(userData);
      //   console.log(userData, 'userData');
    };
    return {
      onSubmit,
    };
  },
});

// Options API

// const userStore = useUserStore();

// interface dataState {
//   password: string;
// }
// export default defineComponent({
//   data(): dataState {
//     return {
//       password: 'asd',
//     };
//   },
//   methods: {
//     onSubmit() {
//       console.log('click');

//       const userData = {
//         username: 'testii5',
//         password: '123456',
//       };
//       userStore.loginUser(userData);
//     },
//   },
// });
</script>
<style>
.login {
  max-width: 700px;
}

button {
  margin-top: 0.7em;
}
</style>
