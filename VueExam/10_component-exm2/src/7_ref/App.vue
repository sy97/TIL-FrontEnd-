<template>
<!--<h1 ref="hello">Hello</h1><!--vue에서는 dom말고 ref라는 속성으로 접근해서 참조함-->
<h1 ref="hello">Hello!</h1>
<hello ref="hello2"></hello>
</template>

<script>
import Hello from './components/hello.vue'

export default {
  name: 'App',
  components: {
    Hello

  },
  mounted(){ //create면 안됨.
    //const h1 =document.querySelector("#hello"); // h1태그에 접근 , 자바스크립트에서는 이렇게 접근
    //console.log(h1.textContent);
    console.log(this.$refs.hello.textContent) //이렇게해주면 콘솔에 객체가 전달됨. 그중에 hello의 텍스트 가져오기.

    //컴포넌트(hello.vue) 참조
    console.log(this.$refs.hello2.$el) //어떤 요소가 있는지 알려주는 태그. 
    console.log(this.$refs.hello2.$refs.good.textContent) //다시 $refs로 들어가서 가져와야함.
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
