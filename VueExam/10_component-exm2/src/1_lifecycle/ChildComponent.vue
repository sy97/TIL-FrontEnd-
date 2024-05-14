<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <p>data.count = {{count}}</p>
            <p>props.prop = {{prop}}</p>
        </div>
        <div>
            <button @click="count++"> data 변경 </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { count: 0 }
        },
        props : {
            prop : {
                type : String,
            }
        },
        //처음 실행될때
        beforeCreate(){ //컴포넌트 객체가 생성되기 전에
            console.log("2.beforeCreate : ",  this.$options.name); //$options는 전역변수. 객체의 name꺼내서 확인해보기.
        },
        created(){
            console.log("2.Created : ",  this.$options.name); 
        },
        beforeMount(){
            console.log("2.beforeMount : ",  this.$options.name);
        },
        //여기까지 mount눌렀을 때
        mounted(){
            console.log("2.mounted : ",  this.$options.name);
        },
        //데이터 변경, props변경누를때
        beforeUpdate(){
            console.log("2.beforeUpdate : ",  this.$options.name);
        },
        //데이터 변경, props변경누를때
        updated(){
            console.log("2.updated : ",  this.$options.name);
        }
    }
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>