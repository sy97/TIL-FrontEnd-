<template>
  <my-button @myclk="log" @changeMsg="logMsg"> <!--이건 진짜 버튼이 아님. 진짜 이벤트도 아님. my-button은 자식컴포넌트임. @click도 자식에게 무슨일이 일어난건지 알려주는거임.
  근데도 발생하는 이유는 , 자식컴포넌트에 상속돼서 자식컴포넌트에서 일어난것임.-->
  <!--자식이 myclk로 이 이벤트가 발생했다는 것을 알려줬고, 그걸 부모가 받아와서 log라는 함수를 호출함 -->
    MyButton
  </my-button>
</template>

<script>

import MyButton from './components/MyButton.vue'
export default {
  name: 'App',
  components: {
    MyButton
  },
  methods : {
    log(info){ //myclk를 넘겨받아오면서 'message'를 받아옴. 그래서 'message'가 콘솔에 출력됨.
      alert("Click!");
      console.log(info);
    },

    logMsg(msg){
      console.log(msg); //따로클릭하지않아도 값을 쓰면 계속 콘솔에 찍힘
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
