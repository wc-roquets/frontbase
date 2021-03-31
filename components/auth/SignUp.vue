<template>
  <div>
    <h1>SignUp</h1>
    <label for="">First name</label>
    <input  v-model="register.first_name" type="email">
    <label for="">last_name</label>
    <input  v-model="register.last_name" type="email">    
    <label for="">UserName</label>
    <input v-model="register.username" type="text">
    <label for="">Email</label>
    <input  v-model="register.email" type="email">
    <label for="">Password</label>
    <input  v-model="register.password" type="password">
    <button @click.prevent="userRegister">Ingresar</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        register: {
          first_name: 'David',
          last_name: 'Gómez',
          username: 'davidmao',
          email: 'admin@example.com',
          password: 'password'
        }
      }
    },
    methods: {
      async userRegister() {
        console.log(this.register)
        try {
          const request = await this.$axios.post('users', { user: this.register })
          if (request.status == 200) {
            const headers = request.headers
            this.$cookies.set('auth', true, {})
            this.$cookies.set('accessToken', headers['access-token'], {})
            this.$cookies.set('client', headers['client'], {})
            this.$cookies.set('uid', headers['uid'], {})
            this.$router.push('/auth')
          }
        } catch (error) {
          console.log(`error -> ${error}`)
        }
      }
    },
  }
</script>

<style scoped>

</style>