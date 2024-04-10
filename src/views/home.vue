<template>
  <div class="paralax" >
    <div class="section">PRODUCT</div>
    <div class="section">PRODUCT</div>
    <div class="section">PRODUCT</div>
  </div>
  <Products></Products>
</template>
<script>
import Products from "../components/products.vue"

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  components: { Products },
  async mounted() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".paralax", {
      x: -(window.innerWidth * 1.5),
      duration: 2,
      scrollTrigger: {
        trigger: ".paralax",
        // start: "top-=30 top",
        // endTrigger: ".end",
        // end: "bottom top",
        marker: true,
        pin: true,
        scrub: 1,
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.paralax {
  height: calc(100vh);
  width: 300vw;
  padding: 0px 25vw;
  display: flex;
  align-items: center;
  gap: 25vw;
  .section {
    width: 50vw;
    height: 80vh;
    background-color: rgb(54, 54, 54);
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

</style>