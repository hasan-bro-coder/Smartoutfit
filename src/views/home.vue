<template>
  <main>
    <h1>
      Smart Outfit
    </h1>
    <p>Where Style Meets smartness</p>
    <div class="effect">
      <div class="col"></div>
      <!-- <div class="col"></div> -->
      <!-- <div class="col"></div> -->
      <!-- <div class="col"></div> -->
    </div>
  </main>
  <div class="paralax" >
    <div class="section">PRODUCT</div>
    <div class="section">PRODUCT</div>
    <div class="section">PRODUCT</div>
  </div>
  <Products></Products>
  <Credits></Credits>
</template>
<script>
import Products from "../components/products.vue"
import Credits from "../components/credits.vue"

import gsap from "gsap";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default {
  components: { Products,Credits },
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
main{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h1{
    margin-top: 100px;
    font-size: max(50px,12vw);
    color: white;
    font-weight: 600;
    text-align: center;
    // font-family: Consolas,Menlo;
    // text-shadow: rgba(255, 255, 255, 0.322) 1px 1px 100px;
  }
  p{
    font-size: max(14px,1.5vw);
  }
  .effect{
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .col{
      background-color: blue;
      // width: 50vw;
      height: 50vh;
      aspect-ratio: 1/1;
      // border-top-left-radius: 50%;
      // border-top-right-radius: 50%;
      // border-radius: 50%;
    }
  }
}
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