<template>
  <v-app id="app">
    <v-content>
      <NavBar/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({

  })
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');
#app{font-family: 'Fira Sans', sans-serif;}
</style>