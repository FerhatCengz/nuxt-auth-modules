<template>
  <div>
    <button @click="logout">Çıkış Yap</button>
    <button>Admin Geldi</button>
  </div>

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
  },

  mounted() {
    console.log("selam")
    console.log("this.$auth => ", this.$auth);
  }
}
</script>
