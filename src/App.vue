<template>
  <div id="app">
    <h1>Andres Insuasty</h1>
    <PxRedes/>
    <router-view />
    <PxFooter/>

  </div>
</template>

<script>
import PxRedes from './components/PxRedes.vue'
import PxFooter from './components/PxFooter.vue'
export default {
  name: 'App',
  components: {
    PxRedes,
    PxFooter,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
