<template>
  <div class="w-full h-full flex flex-col justify-between">
    <div>
      <Navbar />
      <div v-bind:class="slotClass">
        <slot />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  props: ["slotClass"],
  components: {
    Navbar,
    Footer,
  },
};
</script>
