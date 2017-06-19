import Vue from "vue";
import App from "./App.vue";

// this is my Vue instance
// i could put my data element in here technically, on a smaller scale app. But we want the instance to render the whole app, so we're going to do smaller data stuff elsewhere.
new Vue({
  el: "#app",
  render: h => h(App)
});
