<template>
    <div>
        <ul>
            <li v-for="(number,index) in list" :key="index">{{number}} <button @click="upCount(number)">변경</button>  <button>삭제</button></li> 
        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            currentNumber : ""
        }
        ,
        props : {  
            list : {
                type : Array, 
                default : []
            } 
        },
        
        methods : {
            upCount(number){
                this.currentNumber = number;
                this.currentNumber++
                
            }
        }

    }
</script>

<style scoped>

</style>