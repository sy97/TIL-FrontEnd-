<template>
    <header-component title="쓰기 페이지"></header-component>
    <div>
        <textarea v-model="newMemo"></textarea>
        <div>
            <button @click="onCancle()">취소</button>
            <button @click="onaddMemo()">저장</button>
        </div>
    </div>
    <footer-component></footer-component>
</template>

<script>
    import {MODE} from '../common'
    
    export default {

        data(){
            return {
                newMemo: ""
            }
        },

        props : {
            addMemo : { //넘겨줄때 current-memo로 했다면 받아올떄는 카멜표기법으로 currentMemo로 해야함.
                type : Function
            },

            setMode : {
                type : Function
            }
        },

        methods : {
            onaddMemo(){
                if(this.newMemo.length == 0){ //빈칸일때 알람 뜨게.
                    alert("메모를 입력해주세요.")
                }
                else{
                this.addMemo(this.newMemo);
                this.setMode(MODE.LIST);
                }
            },

            onCancle(){
                this.setMode(MODE.LIST);
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