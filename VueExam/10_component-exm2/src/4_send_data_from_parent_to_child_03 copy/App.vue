<template>
  <!--<my-button class="mycss" style="color:red">MyButton</my-button> <!--여기서 적용한 클래스는 자식에게도 그대로 물려짐-->

  <my-button>
    <template v-slot:icon> <!--이렇게 분리해서 전달해주면 어느위치에 무엇을 넣을지 지정해줄수있음-->
      <sapn>(A)</sapn>
    </template>

    <template #text><!--줄여서 #으로가능-->
      <span>MyButton</span>
    </template>
  </my-button>
</template>

<script>

import MyButton from './components/MyButton.vue'
export default {
  name: 'App',
  components: {
    MyButton
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
