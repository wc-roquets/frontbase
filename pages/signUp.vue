<template>
  <div>
    <h1>Registrarme</h1>
    <button @click.prevent="goToPage('home')">Home</button>
    <button @click.prevent="goToPage('signIn')">Iniciar sesión</button>
    <SignUp />        
  </div>
</template>

<script>
  import SignUp from './../components/auth/SignUp.vue'
  export default {
    middleware: ['unprotect'],
    methods: {
      goToPage (page) {
        switch (page) {
          case 'home':
            this.$router.push('/')
            break;
          case 'signIn':
            this.$router.push('/signIn')
            break;
          default:
            break;
        }
      }
    },
    components: {
      SignUp,
    },
  }
</script>

<style scoped>

</style>