<template>
  <h2>숫자 배열 조작과 구구단 출력</h2>
  <div id="app">
    <div>
        <ul>
            <li v-for="(number, index) in number_list">{{number}} <button @click="upNum(index)">변경</button>  <button @click="removeNum(index)">삭제</button></li> 
        </ul>
    <button @click="addNum">추가</button> <button @click="sort">소트</button> <button @click="setMode">구구단 보이기</button>    
    </div>
    <result-page v-if="mode==true" :list="number_list" :setMode="setMode"></result-page>
  </div>
</template>

<script>
import ResultPage from './pages/ResultPage.vue';


export default {
  components: { ResultPage },
  data(){
    return {
      number_list : [2, 3, 4, 5, 6, 7, 8, 9],
      mode : false
    }
  },

  methods : {
    upNum(index){
      this.number_list[index]++;
    },

    removeNum(index){
      this.number_list.splice(index, 1);
    },

    addNum(){
      this.number_list.push(1);
    },
    
    sort(){
      this.number_list.sort((a, b) => a - b);
    },

    setMode(){
      this.mode = true;
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
