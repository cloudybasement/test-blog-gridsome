// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/styles.css";

export default function(Vue, { router, head, isClient }) {
  if (isClient) {
    const Unicon = require("vue-unicons").default;
    const {
      uniGithub,
      uniFacebookF,
      uniTwitter,
      uniInstagram,
    } = require("vue-unicons/src/icons");

    Unicon.add([uniGithub, uniFacebookF, uniTwitter, uniInstagram]);
    Vue.use(Unicon);
  }

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
