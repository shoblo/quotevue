<template>
  <div id="app">
    <Title user="larry" />
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!-- <router-link to="/about">About</router-link> | -->
      <!-- <router-link to="/Billing">Billing</router-link> | -->
      <router-link to="/Handovers">Handovers</router-link> |
      <router-link to="/quotation">Qutation</router-link>
      <!-- <router-link to="/churn">Churn Queue</router-link> -->
    </div>
    <router-view />
  </div>
</template>



<script>
import Title from "@/components/Title.vue";

export default {
  name: "App",
  components: {
    Title,
  },
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
