<template>
    <header-component title="리스트 페이지"></header-component> <!--전역 컴포넌트는 태그만 써줘도 알아서 import됨-->
    <div>
        리스트 컨텐츠
        <ul>
            <li v-for="(memo,index) in list">{{index}}: {{memo}}</li> <!--나중에 쓸 때를 대비해서 인덱스도 받아놓기-->
        </ul>
    </div>
    <footer-component></footer-component>
</template>

<script>
    export default {
        props : { //부모의 데이터를 받아올 때는 porps라는 프로퍼티로 받아오기. 
            list : {
                type : Array, //데이터의 타입.
                default : []
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>