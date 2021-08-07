<template>
    <div>
        <Fastquote/>
        <productquotequeue/>
    </div>
</template>

<script>
import axios from 'axios';
import Fastquote from '../components/Fastquote.vue';
import Productquotequeue from '../components/Productquotequeue.vue';


    export default {
        name: 'Quotation',
        data() {
            return {
                msg:'test',
                value1: 'Off',
                options: ['Off', 'On']
            }
        },
        components: { 
            Fastquote,
            Productquotequeue,
            },
        methods: {
            getMessage() {
                const path = 'http://localhost:5000/ping';
                axios.get(path)
                    .then((res) => {
                     this.msg = res.data;
                    })
                .catch((error) => {
                // eslint-disable-next-line
                    console.error(error);
                })
            }
        },
        
    }
</script>

<style lang="scss" scoped>

</style>