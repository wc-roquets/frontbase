<template>
  <div>
    <h1>Iniciar sesión</h1>
    <button @click.prevent="goToPage('home')">Home</button>
    <button @click.prevent="goToPage('signUp')">Registrarme</button>
    <SignIn />
  </div>
</template>

<script>
  import SignIn from './../components/auth/SignIn.vue'
  export default {
    middleware: ['unprotect'],    
    methods: {
      goToPage (page) {
        switch (page) {
          case 'home':
            this.$router.push('/')
            break;
          case 'signUp':
            this.$router.push('/signUp')
            break;
          default:
            break;
        }
      }
    },    
    components: {
      SignIn,
    },
  }
</script>

<style scoped>

</style>