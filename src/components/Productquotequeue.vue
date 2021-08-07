<template>
    <div class = 'frame'>
        <p>This is for api process bulk product quote</p>
        <Button class = 'button' v-on:click="Postquote">One Click pre-qual</Button>

    </div>
</template>

<script>
    export default {
        name: "productquote",
        
    }
</script>

<style scoped>

.frame{
     border-style:solid;
     margin-left: 10px;
     padding-left: 10px;
     font-family: Avenir, Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: left;
     color: #2c5032;
}


</style>