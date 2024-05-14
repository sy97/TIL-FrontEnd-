<template>
    <div class="parent">
        parent 컴포넌트
        <div>
            자식에게 받은 데이터 = {{ selectedMemo }}
        </div>
        <child-component @select = "onSelectedMemo"></child-component><!--여기서는 @가 이벤트가 아니라 자식컴포넌트의 onselected가 호출되는것.
        자식에서 클릭이벤트가 일어나면, emit이라는 동작이 일어나고, memo가 전달됨. 그걸 받아줄 함수가 필요한것.--> 
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
    components: { ChildComponent },
        data() {
            return { selectedMemo : ""}
        },

        methods : {
            onSelectedMemo(memo){ //emit을 통해 전달된 메모 받아옴
                this.selectedMemo = memo;
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