<template>
  <h1>컴포넌트 라이프 사이클 테스트</h1>
  <div>
    <button @click="sw=true">컴포넌트 mount</button><br>
    <button @click="sw=false">컴포넌트 unmount</button>   <!--버튼 눌렀을 때 sw가 true 면 마운트, false면 unmount-->
    <!--unmount누르면 div사라짐-->
  </div>
  <parent-component v-if="sw"></parent-component> <!--MOUNT상태, unmount 상태는 그냥 이걸 없애는것--> 

</template>

<script>
import ParentComponent from './ParentComponent.vue'


export default {
  name: 'App',
  components: {
    ParentComponent

  },
  data(){
    return {
      sw : true
    }
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
