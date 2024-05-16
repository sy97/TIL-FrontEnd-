<template>
  <h1>참조하기</h1>
  <div>
    <button @click="getCount1">1번째 count값 알아내기</button><br>
    <button @click="getCount2">2번째 count값 알아내기</button><br>
    <button @click="getInput">input1 포커스 이동</button>
  </div>
  <div>
    <sample-component ref="sample1"></sample-component>
    <sample-component ref="sample2"></sample-component>
  </div>
  <parent-component ref="parent"></parent-component>
</template>

<script>
import ParentComponent from './components/ParentComponent.vue'
import SampleComponent from './components/SampleComponent.vue'

export default {
  name: 'App',
  components: {
    ParentComponent,
    SampleComponent
  },
  methods : {
    getCount1(){
      //첫번째 샘플컴포넌트의  count값 출력
      console.log(this.$refs.sample1.count) //samplecomponent에서까지 ref를 달아주지않아도,이미 data로 count라는 변수가 return되고 있으므로 바로 적어주면됨.
    },

    getCount2(){
      //두번째 샘플컴포넌트의 count값 출력
      console.log(this.$refs.sample2.count)
    },

    getInput(){
      //텍스트박스에 포커스주기 focous()함수호출해서.
      this.$refs.parent.$refs.child.$refs.input1.focus() 
      this.$refs.parent.$refs.child.$refs.input1.value = ""; //기존 값 지우기
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
