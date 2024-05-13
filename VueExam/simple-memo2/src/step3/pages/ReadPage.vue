<template>
    <header-component title="읽기 페이지"></header-component>
    <div>
        <ul>
            <p>선택된 메모 = {{currentMemo}}</p>
        </ul>
    </div>
        <footer-component></footer-component>
</template>

<script>
    export default {
        props : {
            currentMemo : { //넘겨줄때 current-memo로 했다면 받아올떄는 카멜표기법으로 currentMemo로 해야함.
                type : String,
                default : ""
            }
        }
    }
</script>

<style scoped> 

</style>