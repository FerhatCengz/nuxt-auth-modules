<template>
  <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Username</label>
        <input type="text" v-model="login.username"/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" v-model="login.password"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>

    </form>
    <button @click="googleAuth">Google</button>
  </div>
</template>

<script>

export default {
  auth: false,
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        const response = await this.$auth.loginWith('local', {
          data: this.login
        })
        console.log(response);
        this.$router.push('/');
      } catch (err) {
        console.log(err)
      }
    },

    async googleAuth() {
      try {
        const response = await this.$auth.loginWith('google')
        console.log(response);
        this.$router.push('/');
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
