<template>
  <div>
    <p v-if="online">Conexión con el back</p>
    <p v-else>Sin Conexión</p>
    <p v-if="error != ''"> {{error}} </p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        online: false,
        error: ''
      }
    },
    async mounted () {
      try {
        const request = await this.$axios.get('status', {})
        this.online = request.data.online
      } catch (error) {
        this.error = error
      }
    },
  }
</script>

<style scoped>

</style>