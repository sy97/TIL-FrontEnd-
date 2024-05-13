<template>
  <div>
    <h1>컴포넌트를 이용한 메모장</h1>
  </div>
  <hr>
  <div id="app">
    <list-page :list="list"></list-page> <!--v-bind:list인데 v-bind는 생략가능 --> 
  </div>
</template>

<script>
import ListPage from '../step2/pages/ListPage.vue'


export default {
  name: 'App',
  components: {
    ListPage
  },
  data(){
    return {list : ["memo1", "memo2", "memo3"]}
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
