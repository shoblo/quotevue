<template>
  <div class="quote-example">
    <form id="Quoteform" action="/" method="POST">
      <div class="form-example">
        <Dropdown
          v-model="quote.product"
          :options="products"
          optionLabel="name"
          optionValue="code"
          filter="true"
          placeholder="Select a Product"
          required
        />
        <!-- <select name="product" id="product" v-model="quote.product">
                    <option value="WETN">WETN</option>
                    <option value="EVPN">EVPN</option>
                    <option value="IPVPN">IPVPN</option>
                    <option value="Internet Direct">Internet Direct</option>
                </select> -->
        <Dropdown
          v-model="quote.access_type"
          :options="access_type"
          optionLabel="name"
          optionValue="code"
          filter="true"
          placeholder="Select access type"
        />
        <!-- <select name="access type" id="access type" v-model="quote.access_type">
                    <option value="Vodafone Fibre">Vodafone Fibre</option>
                    <option value="HSNS Premium">HSNS Premium</option>
                    <option value="UFB">UFB BS3/BS3a</option>
                    <option value="HSNS Lite">HSNS Lite</option>
                    <option value="Lite-ADSL">Lite-ADSL</option>
                    <option value="Lite-VDSL">Lite-VDSL</option>
                    <option value="Lite-BS2">Lite-BS2</option>
                </select> -->
        <!-- <Dropdown
          v-model="quote.connection"
          :options="connection"
          optionLabel="name"
          optionValue="code"
          filter="true"
          placeholder="P2P/P2A"
        /> -->
        <span v-if="quote.product == 'WETN' || quote.product == 'EVPN'">
          <Dropdown
            v-model="quote.connection"
            :options="connection"
            optionLabel="name"
            optionValue="code"
            filter="true"
            placeholder="P2P/P2A"
          />
        </span>

        <!-- <select name="connection" id="connection" v-model="quote.connection">
                    <option value="P2A">P2A</option>
                    <option value="P2P">P2P</option>
                </select> -->
        <Dropdown
          v-model="quote.location"
          :options="location"
          optionLabel="name"
          optionValue="code"
          filter="true"
          placeholder="local/national"
        />

        <!-- <select name="location" id="location" v-model="quote.location">
                    <option value="local">local</option>
                    <option value="national">national</option>
                </select> -->
        <Dropdown
          v-model="quote.onsite"
          :options="onsite"
          optionLabel="name"
          optionValue="code"
          filter="true"
          placeholder="onsite switch"
        />

        <!-- <select name="onsite" id="onsite" v-model="quote.onsite">
                    <option value='Not on site'>Not on site</option>
                    <option value="One end on site">One end on site</option>
                    <option value="both ends on site">both ends on site</option>
                </select> -->
        <div class="p-field-checkbox">
          <Checkbox id="att" v-model="quote.att" :binary="true" />
          <label for="att">AT&T P2A</label>
        </div>

        <label for="term">Enter your term(mth): </label>
        <Dropdown
          v-model="quote.term"
          :options="term"
          optionLabel="name"
          optionValue="code"
          editable
          placeholder="Select term"
        />
        <br />

        <label for="bandwidth">Enter your bandwidth(Mb): </label>
        <Dropdown
          v-model="quote.bandwidth"
          :options="bandwidth"
          optionLabel="name"
          optionValue="code"
          editable
          placeholder="Select bandwidth"
        /><br />

        <label for="access speed">Enter your access: </label>
        <Dropdown
          v-model="quote.access_speed"
          :options="access_speed"
          optionLabel="name"
          optionValue="code"
          editable
          placeholder="Select access"
        /><br />

        <!-- <input type="checkbox" id="att" name="att" v-model="quote.att">
                <label for="att"> AT&T P2A</label><br> -->
      </div>
      <!-- <div class="form-example">
                <label for="term">Enter your term: </label>
                <input type="int" name="term" id="term" required v-model.trim="quote.term">
            </div> -->
      <!-- <div class="form-example">
                <label for="bandwidth">Enter your bandwidth: </label>
                <input type="int" name="bandwidth" id="bandwidth" required v-model.trim="quote.bandwidth">
            </div> -->
      <!-- <div class="form-example">
                <label for="access speed">Enter your access speed: </label>
                <input type="int" name="access speed" id="access speed" required v-model.trim="quote.access_speed">
            </div> -->
    </form>
    <!-- <Button class="button" v-on:click="getMessage">Submit</Button> -->
    <div>
      <h4>
        Thank you for your quote request, please desk-audit pricing estimate:<br />
        Please quote this in future communication, including installation.<br />
        Product: {{ quote.bandwidth }}M {{ quote.product }}
        <span v-if="quote.product == 'WETN' || quote.product == 'EVPN'">{{
          quote.connection
        }}</span
        ><br />
        Access type: {{ quote.access_type }}<br />
        Rate limit: {{ quote.bandwidth }}Mb/s<br />
        Installation Cost: ${{ quote.nrc }}<br />
        Monthly recurring charge: ${{ quote.mrc }}<br />
        Contract Term: {{ quote.term }}<br /><br /><br />

        Terms:<br />
        12 Month minimum contract; Pricing in $NZ and excludes GST; Pricing
        valid for 90 Days; <br />
        Subject to Vodafone financial approval and planning approval; Subject to
        network availability; Commercial in Confidence.<br />

        Kind regards<br />
      </h4>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Fastquote",

  setup() {
    return {};
  },

  data() {
    return {
      quote: {
        product: "WETN",
        access_type: "Vodafone Fibre",
        connection: "P2A",
        location: "local",
        onsite: "One end on site",
        att: false,
        term: 12,
        bandwidth: 100,
        access_speed: 100,
        nrc: 720,
        mrc: 410,
      },
      products: [
        { name: "WETN", code: "WETN" },
        { name: "EVPN", code: "EVPN" },
        { name: "Internet Direct", code: "Internet Direct" },
        { name: "IPVPN", code: "IPVPN" },
      ],
      access_type: [
        { name: "Vodafone Fibre", code: "Vodafone Fibre" },
        { name: "HSNS Premium", code: "HSNS Premium" },
        { name: "UFB", code: "UFB" },
      ],
      connection: [
        { name: "P2A", code: "P2A" },
        { name: "P2P", code: "P2P" },
      ],
      location: [
        { name: "local", code: "local" },
        { name: "national", code: "national" },
      ],
      onsite: [
        { name: "Not on site", code: "Not on site" },
        { name: "One end on site", code: "One end on site" },
        { name: "both ends on site", code: "both ends on site" },
      ],
      term: [
        { name: "12 month", code: 12 },
        { name: "24 month", code: 24 },
        { name: "36 month", code: 36 },
      ],
      bandwidth: [
        { name: "10 Mb", code: 10 },
        { name: "50 Mb", code: 50 },
        { name: "100 Mb", code: 100 },
      ],
      access_speed: [
        { name: "100 Mb", code: 100 },
        { name: "1G", code: 1000 },
        { name: "10G", code: 10000 },
      ],
      connection_disabled: false,
    };
  },

  watch: {
    quote: {
      handler() {
        this.Postquote();
      },
      deep: true,
    },
  },
  methods: {
    getMessage() {
      const path = "https://fastquote-aus-east.azurewebsites.net/test";
      axios
        .get(path)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    Postquote() {
      // const path = "http://localhost:5000";
      const path = "https://fastquote-aus-east.azurewebsites.net";
      const payload = {
        product: this.quote.product,
        access_type: this.quote.access_type,
        connection: this.quote.connection,
        location: this.quote.location,
        onsite: this.quote.onsite,
        term: this.quote.term,
        // term:this.termtest,
        bandwidth: this.quote.bandwidth,
        access_speed: this.quote.access_speed,
        att: this.quote.att,
      };
      axios
        .post(path, payload)
        .then((res) => {
          // this.getMessage();
          this.quote.nrc = res.data.nrc;
          this.quote.mrc = res.data.mrc;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
  },
};
</script>



<style scoped>
.quote-example {
  border-style: solid;
  margin-left: 10px;
  padding-left: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c5032;
}
.quote-example {
  border-style: solid;
  margin-left: 10px;
  padding-left: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c5032;
}

.button {
  margin-top: 20px;
}
</style>