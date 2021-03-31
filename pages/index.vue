<template>
  <div class="container">
    <OnLine />
    <button @click.prevent="goToPage('signIn')">Iniciar sesión</button>
    <button @click.prevent="goToPage('signUp')">Registrarme</button>
  </div>
</template>

<script>
import OnLine from './../components/OnLine.vue'
export default {
  middleware: ['unprotect'],
  methods: {
    goToPage(page) {
      switch (page) {
        case 'signIn':
          this.$router.push('/signIn')
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
    OnLine
  },
}
</script>

<style>

</style>
