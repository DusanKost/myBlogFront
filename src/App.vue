<template>
  <div id="app">
    <navbar-component :is-auth="isAuth"  v-on:logout="logout($event)"></navbar-component>
    <router-view :user-id="user.id" v-on:login="login($event)"></router-view>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components:{
    'navbar-component' : Navbar
  },
  created(){
    this.isAuth = this.$auth.isAuthenticated()
    if (this.isAuth)
        this.setAuthenticatedUser()
  },
  data () {
    return {
      isAuth: null,
      user:{}
    }
  },
  methods:{
    setAuthenticatedUser(){
        this.$http.get('api/user')
        .then(res => {
            this.$auth.setAuthenticatedUser(res.body)

            this.user = this.$auth.getAuthenticatedUser()
        })
    },
    login(){
      this.isAuth = true
      if (this.isAuth)
          this.setAuthenticatedUser()
    },
    logout(){
      this.isAuth = false
      this.user = {}
    },
  }
}
</script>

<style scoped>

</style>
