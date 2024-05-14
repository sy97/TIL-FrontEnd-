<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <ul>
                <li v-for="memo in list" @click="onSelected(memo)">{{memo}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    const ChildComponent = { //1.원래는 export했었는데 이제는 여기까지의 내용을 변수로 담는다.
        data(){
            return { list : ["소영", "모모", "마루"]}
        },
        
        methods : {
            onSelected(memo){
                //내가 선택한 메모를 부모에게 전달
                //this.$emit(부모가 참조할 수 있는 위치, 전달할 내용) 
                //자바에서는 부모의 참조변수를 super로 갖고있음. 그거로 부모를 찾아가는데 여기서는 emit이 그역할.
                this.$emit(ChildComponent.SELECT, memo)
            }
        }
        
    }
    ChildComponent.SELECT ="select" //2.차일드컴포넌트.SELECT라는 변수를 새로만든다. 이거로 이 자식의 위치를 찾아올 수 있게.
    export default ChildComponent; //바깥에서도 이걸 쓸 수있게 해줌. "select"라는 값이 전달됨.
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>