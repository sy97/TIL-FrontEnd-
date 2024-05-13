<template>
  <div>
    <h1>컴포넌트를 이용한 메모장</h1>
  </div>
  <hr>
  <div id="app">
    <list-page v-if="mode == MODE.LIST" :list="list" :setReadMemo="setReadMemo" :setMode="setMode"></list-page> <!--list에게 setReadMemo라는 함수 넘겨주기-->
    <read-page v-if="mode == MODE.READ" :current-memo="selectedMemo" :setMode="setMode"></read-page>  <!--이렇게하고나서 뒤로가기하면안됨. 페이지이동한게 아니기 때문-->
    <write-page v-if="mode == MODE.WRITE" :addMemo="addMemo" :setMode="setMode"></write-page>
  </div>
</template>

<script>
import ListPage from './pages/ListPage.vue'
import ReadPage from './pages/ReadPage.vue'
import {MODE} from './common' //export로 해줬기 때문에 import로 가져올 수 있음.
import WritePage from './pages/WritePage.vue'


export default {
  name: 'App',
  components: {
    ListPage,
    ReadPage,
    WritePage
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
    },

    setMode(mode){ //페이지 이동을 할 수 있게 변수 받기.
      this.mode = mode;
    },

    //새 메모 저장을 위한 메서드.
    addMemo(memo){
      this.list.push(memo);
    }
  },

  computed : {
    MODE(){
      return MODE; //위에 바인딩할 때 쓰려면 자바스크립트에서 받아온 이 MODE 객체를 리턴해줘야 쓸 수 있음. 한번은 무조건 호출돼야하니까 computed에 적어주기. 
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
