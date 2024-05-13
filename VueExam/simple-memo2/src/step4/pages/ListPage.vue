<template>
    <header-component title="리스트 페이지"></header-component> <!--전역 컴포넌트는 태그만 써줘도 알아서 import됨-->
    <div>
        리스트 컨텐츠
        <ul>
            <li v-for="(memo,index) in list" :key="index" @click="setReadMemo(index)">{{index}}: {{memo}}</li> <!--키값안주면 빨간줄 뜨므로 인덱스로 주는게좋음-->
            <!--부모로부터 받아온 함수 호출해주고, index넘겨주기-->
        </ul>
    </div>
    <footer-component></footer-component>
</template>

<script>
    import {MODE} from '../common'
    
    export default {
        props : { //부모의 데이터를 받아올 때는 porps라는 프로퍼티로 받아오기. 
            list : {
                type : Array, //데이터의 타입.
                default : []
            },

            setReadMemo : { //app에서 넘겨준 메서드를 여기서 등록해주기
                type : Function
            }

        }
    }
</script>

<style scoped>

</style>