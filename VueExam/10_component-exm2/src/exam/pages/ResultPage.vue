<template>
    <div>
        <h2>구구단</h2>
        <ul>
            <li v-for="num in list">{{num}}단
                <ul>
                    <li v-for="i in 9">{{num}} X {{i}} = {{num*i}}</li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props : {
            list : {
                type : Array, 
                default : []
            } 
        }
    }
</script>

<style scoped>

</style>