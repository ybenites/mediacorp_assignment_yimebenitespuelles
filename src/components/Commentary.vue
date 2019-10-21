<template>
    <div class="content-commentary">
        <div v-for="(commentary,index) of arrayCommentaries" :key="index" class="unit-commentary">
           {{commentary}}
        </div>
    </div>
</template>
<script>
export default {
    name:'Commentary',
    props: {
        arrayCommentaries:Array
    }
}
</script>
<style lang="scss" scoped>
.content-commentary{
    max-width: 500px;
    margin: 0 auto;
    height: 150px;
    opacity: 1;
    transition: opacity .5s ease;
    overflow-x: scroll;
    color: #818182;
    background-color: #fefefe;
    border-color: #fdfdfe;
    margin-bottom: 15px;
    padding: 15px 20px;
    .unit-commentary{
        padding: 5px 15px;
        &:nth-child(2n+1){
             margin-top: 6px;
        }
        &:nth-of-type(odd){
            color: #004085;
            background-color: #cce5ff;
            border-color: #b8daff;
        }
        &:nth-of-type(even){
            color: #856404;
            background-color: #fff3cd;
            border-color: #ffeeba;
        }
    }
}
</style>