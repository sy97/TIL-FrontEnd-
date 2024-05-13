<template>
    <header-component title="읽기 페이지"></header-component>
    <div>
        <ul>
            <p>선택된 메모 = {{currentMemo}}</p>
        </ul>
    </div>
    <div>
        <button @click="setmode(MODE.LIST)">리스트 페이지로 이동</button>
    </div>
        <footer-component></footer-component>
</template>

<script>
    import {MODE} from '../common' //여기서도 MODE.LIST로 읽을 수 있도록 import해주기. 

    export default {
        props : {
            currentMemo : { //넘겨줄때 current-memo로 했다면 받아올떄는 카멜표기법으로 currentMemo로 해야함.
                type : String,
                default : ""
            },

            setMode : { 
                type : Function
            }
        },
        computed : {
            MODE(){
            return MODE; 
            }
        }
    }
</script>

<style scoped> 

</style>