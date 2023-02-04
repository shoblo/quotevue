<template>
  <div class="frame">
    <p>The switch below turn on/off function of resetting the due date</p>
    <p>
      If it is turned on, all the due dates of orders in SDC queue will be
      periodically put out for 30 days.
    </p>
    <p>This function is triggered every 24 hours</p>
    <InputSwitch v-model="enableduedate" @click="duedateswitch" />
  </div>
</template>

<script>
// import { onUpdated } from "vue";

export default {
  name: "setduedate",
  setup() {
    // onUpdated(() => {
    //   console.log("mounted in the composition api!");
    //   console.log(this.enableduedate);
    // });
    // console.log("setup  in the composition api!");
    // console.log(this.enableduedate);
    // });
  },

  data() {
    return {
      enableduedate: true,
    };
  },
  methods: {
    duedateswitch() {
      console.log(this.enableduedate);
    },
  },
};
</script>

<style scoped>
.frame {
  border-style: solid;
  margin-left: 10px;
  padding-left: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c5032;
}
</style>