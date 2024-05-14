<template>
  <h1>메모 추가</h1>
  <p><button>메모 추가</button></p>
  <list-component :list="list"></list-component>
  <view-component></view-component>
</template>

<script>
import ListComponent from './components/ListComponent.vue'
import ViewComponent from './components/ViewComponent.vue'

export default {
  name: 'App',
  components: {
    ListComponent,
    ViewComponent
  },
  data(){
    return {list : ["memo1", "memo2"]}
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
