<template>
  <div>
    <h1>컴포넌트를 이용한 메모장</h1>
  </div>
  <hr>
  <div id="app">
    <list-page v-if="mode == 'list'" :list="list" :setReadMemo="setReadMemo"></list-page> <!--list에게 setReadMemo라는 함수 넘겨주기-->
    <read-page v-if="mode == 'read'" :current-memo="selectedMemo"></read-page>  <!--이렇게하고나서 뒤로가기하면안됨. 페이지이동한게 아니기 때문-->
  </div>
</template>

<script>
import ListPage from '../step3/pages/ListPage.vue'
import ReadPage from './pages/ReadPage.vue'

//객체로 관리하기.
const MODE = {
  LIST : "list",
  READ : "read"
}

export default {
  name: 'App',
  components: {
    ListPage,
    ReadPage
  },
  data(){
    return {
      list : ["memo1", "memo2", "memo3"],
      selectedMemo : "", //index와 일치하는 메모 
      mode : MODE.LIST //list페이지인지 read페이지인지 구분하게 해줄 일종의 플래그변수. 근데 그냥 mdoe : "lsit" 이렇게 하지말고 객체로 관리하기. 
    }
  },
  methods : {
    setReadMemo(index){
      //읽기페이지로 이동할 때 어떤 글인지 알려주는 메서드
      this.selectedMemo = this.list[index];
      //이게 호출될 때 read페이지로 바뀌어야함.
      this.mode = MODE.READ;
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
