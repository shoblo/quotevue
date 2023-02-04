<template>
  <div class="billing">
    <h1>This is an wholesale billing page</h1>
    <Listbox v-model="selectedCity" :options="cities" optionLabel="name" />

    <!-- <Fastquote /> -->
  </div>
</template>

<script>
// import Fastquote from "../components/Fastquote.vue";

export default {
  name: "Billing",
  setup() {
    return {};
  },
  data() {
    return {
      selectedCity: null,
      cities: [
        { name: "New York", code: "NY" },
        { name: "Rome", code: "RM" },
        { name: "London", code: "LDN" },
        { name: "Istanbul", code: "IST" },
        { name: "Paris", code: "PRS" },
      ],
    };
  },

  components: {},
};
</script>

