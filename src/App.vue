<template>
  <div id='app'>
    <HelloWorld title="slot">
      <p class="inner">*** this is default text ***</p>
      <p>aaaaaaaaaa</p>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 5px;
}
tr td {
  padding: 5px;
  border: 1px solid gray;
}
tr th.head {
  background-color: black;
  color:white; 
}
</style>
