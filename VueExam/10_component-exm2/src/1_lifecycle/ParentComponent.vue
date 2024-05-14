<template>
    <div class="parent">
        Parent 컴포넌트
        <div>
            <p>data.count = {{count}}</p>
            <p>props.prop = {{prop}}</p>
        </div>
        <div>
            <button @click="count++"> data 변경 </button>
            <button @click="prop++"> props 변경 </button> <!--자식 부분까지 변경되는 버튼-->
        </div>
        <child-component :prop="prop"></child-component>
    </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

    export default {
    components: { ChildComponent },
        data() {
            return {
                count: 0, prop: 0
            }
        },
        //처음 실행될때
        beforeCreate(){ //컴포넌트 객체가 생성되기 전에
            console.log("1.beforeCreate : ",  this.$options.name); //$options는 전역변수. 객체의 name꺼내서 확인해보기.
        },
        created(){
            console.log("1.Created : ",  this.$options.name); //부모일때는 1로 표시하기 위해서 여기도 1.create.
        },
        beforeMount(){
            console.log("1.beforeMount : ",  this.$options.name);
        },
        //여기까지 mount눌렀을 때
        mounted(){
            console.log("1.mounted : ",  this.$options.name);
        },
        //데이터 변경, props변경누를때
        beforeUpdate(){
            console.log("1.beforeUpdate : ",  this.$options.name);
        },
        //데이터 변경, props변경누를때
        updated(){
            console.log("1.updated : ",  this.$options.name);
        }

    }
</script>

<style scoped>
    .parent {
        border : 1px solid royalblue;
        margin : 10px;
    }
</style>