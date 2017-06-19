<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <input type="text" name="" value="" v-model="location" placeholder="City?" />
    <button type="button" name="button" @click="getWeather(location)" v-text="buttonText"></button>
  </div>
</template>

<script>
import axios from "axios";
var darkSkyKey = "54f2199c7f2eeef83b7d85834c79a5c3";
var googleMapsKey = "AIzaSyBCQvwyLahB8OTK-BZuAksotjpP1yQs8tc";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      title: "WEATHER",
      buttonText: "Click for Weather",
      location: ""
    };
  },
  methods: {
    getWeather(location) {
      console.log(location);
      location = "";
      // this^ didn't work
      axios
        .get(
          "https://maps.googleapis.com/maps/api/geocode/json?address=" +
            location +
            "&key=" +
            googleMapsKey
        )
        .then(res => {
          console.log(response);
          const lat = response.lat;
          const lng = response.lng;
        });
    }
  },
  mounted() {}
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
