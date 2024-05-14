<template>
    <div class="parent">
        parent 컴포넌트
        <div>
            <button @click="addMemo"> 부모에서 자식으로 데이터 보내기</button>
        </div>
        <parent-component></parent-component> <!--MOUNT상태, unmount 상태는 그냥 이걸 없애는것--> 
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
    components: { ChildComponent },
        data() {
            return {
                list : ["memo1", "memo2"]
            }
        },

        methods : {
            addMemo(){
                // memo3, memo4, ,,. 추가
            }
        }
    }
</script>

<style scoped>
    .parent {
        border : 1px solid royalblue;
        margin : 10px;
    }
</style>