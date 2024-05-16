<template>
    <div class="btn">
        <slot></slot> 
    </div>
    <h1 @click="onClick">Test</h1> <!--이렇게 자식컴포넌트가 여러개가 있는경우에는, 상속을 어디에 줄지 몰라서 부모에서 적은 이벤트가 상속되지 않음.-->
    <!--아래 에밋에 등록한 이름을 가져다가, 클릭이 발생했다는걸 부모에게 전달해줌.-->
    <input type="text" v-model="msg"/> <!--양방향 전달-->
</template>

<script>
    export default {
        emits : ["myclk"] //부모에게 클릭이라는 이벤트가 발생했다는것을 알려줌.
        ,
        data(){
            return {
                msg : ""
            }
        },
        methods : {
            onClick(){
                this.$emit('myclk', this.msg)
            }
        },
        watch : { //데이터 변경 감지 프로퍼티
            msg(){ //이 변수의 값이 변경되었을 때 호출해줌.
                this.$emit('changeMsg', this.msg) //변경 될 때 msg를 호출하고, 그 값을 부모에게 넘겨줄거니까 emit을 사용
                //(부모에게 알려줄 변수명, 넘겨줄 값)
            }
        }
    }
</script>

<style scoped>
    .btn {
        display : inline-block;
        margin: 4px;
        padding: 6px 12px;
        border-radius: 4px;
        background-color: gray;
        color: white;
        cursor: pointer;
    }
</style>