<template>
    <div class="child">
        Child 컴포넌트
        <div>
            <ul>
                <li><!--부모데이터를 출력--></li>
            </ul>
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
    
    }
</script>

<style scoped>
    .child {
        border : 1px solid rosybrown;
        margin : 10px;
    }
</style>