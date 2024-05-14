<template>
    <div class="btn">
        <slot name="text"></slot> 
        <slot name="icon"></slot>
    </div>
    <!--div를 새로 만들면 app.vue에서 만든 속성이 어디 적용될지 몰라서 상속이 안됨-->
    <!--<h1 :class="$attrs.class" :style="$attrs.style">Test</h1> <!--app.vue에서 지정한 class나 style속성을 저장해둔 전역변수가 있음. $attrs-->
</template>

<script>
    export default {
        //상속을 막는법
        inheritAttrs : false, //기본값은 true. div 하나만 있을 때는 상속이 자동으로 되니까 그걸 막고싶다면 false로. 근데 위에처럼
        //inline으로 적어줬으면 상속됨.
        created(){
            console.log(this.$attrs)
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