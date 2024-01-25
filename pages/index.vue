<template>
  <button @click="logout">Çıkış Yap</button>
</template>

<script>
export default {
  name: 'IndexPage',
  middleware: 'auth',

  methods: {
    logout() {
      this.$auth.logout();
      this.$router.push("/login");
    }
  }
}
</script>
