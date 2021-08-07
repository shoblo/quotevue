<template>
    <div class="title">
        <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
        <div class="nav-bar">
            <img alt="Vue logo" src="../assets/logo.png" />
            Welcome to Wholesale Tools
            </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        name:'Title',
        data() {
            return {
                msg: ''
            }
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
            },
            created(){
                this.getMessage();
            }
        },
        props: {
            user: {
                type: String,
            },
        },
        
    }
</script>

<style scoped>

.nav-bar {
  background: linear-gradient(-90deg, #84cf6a, #16c0b0);
  height: 220px;
  margin-bottom: 25px;
  -webkit-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  -moz-box-shadow: 0px 2px 15px -12px rgba(0, 0, 0, 0.57);
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.57);
  font-size: xxx-large;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  padding-left: 20px;
  padding-top: 30px;
  color: #3a3d3d;
  font-weight: bolder;
  
}

</style>