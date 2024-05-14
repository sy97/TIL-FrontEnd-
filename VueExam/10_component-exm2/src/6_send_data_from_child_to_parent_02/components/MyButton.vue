<template>
    <div class="btn">
        <slot></slot> 
    </div>
    <h1 @click="$emit('myclk', 'message')">Test</h1> <!--이렇게 자식컴포넌트가 여러개가 있는경우에는, 상속을 어디에 줄지 몰라서 부모에서 적은 이벤트가 상속되지 않음.-->
    <!--아래 에밋에 등록한 이름을 가져다가, 클릭이 발생했다는걸 부모에게 전달해줌.-->
    <input type="text" /> 
</template>

<script>
    export default {
        emits : ["myclk"] //부모에게 클릭이라는 이벤트가 발생했다는것을 알려줌.
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