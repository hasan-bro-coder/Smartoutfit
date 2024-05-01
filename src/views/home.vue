<template>
  <main>
    <h1>
      Smart Outfit
    </h1>
    <p>Where Style Meets smartness</p>
    <div class="effect">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
      <div class="col"></div>
    </div>
  </main>
  <div class="paralax" >
    <div class="section"><div class="sq"><img src="/demo/660aff8b36119_SLIDE-NEW-.jpg" alt="image not found"></div></div>
    <div class="section"><div class="sq"><img src="/demo/6604333d59dfc_Untitled-4.jpg" alt="image not found"></div></div>
    <div class="section"><div class="sq"><img src="/demo/66065b2d278ae_Fb-Cover2.jpg" alt="image not found"></div></div>
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
      x:  -(window.innerWidth * 2),
      // -document.querySelector(".paralax").clientWidth,
      duration: 2,
      scrollTrigger: {
        trigger: ".paralax",
        // start: "top-=30 top",
        // endTrigger: ".end",
        // end: "+=3000",
        // markers: true,
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
    z-index: -1;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    // box-shadow: 0px 20px 20px 2px rgb(0 195 255 / 63%);
    // filter: blur(10px);
    &:after {
  content: '';
  position: absolute;
  left: 50%;
  // top: 5%;
  // right: 50%;
  transform: translateX(-50%);
  height:5%;
  width: calc(25vh * 5);
  bottom: -5px;
  background: linear-gradient(180deg, rgba(139,167,32,0) 0%, rgba(0, 195, 255,1) 100%);
  pointer-events: none;
}
    @for $i from 1 through 6 {
  .col:nth-child(#{$i}) {
    position: absolute;
    bottom: calc(-12.5vh * $i);
    color: rgb(0, 195, 255);    
    background-color: rgba(0, 195, 255,calc(((6 - $i)*10)/100));
    height: calc(25vh * $i);
    aspect-ratio: 1/1;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    // border-radius: 50%;
  }
}
}
}
.paralax {
  height: calc(100vh);
  width: 300vw;
  // padding: 0px 25vw;
  display: flex;
  align-items: center;
  // gap: 25vw;
  overflow: hidden;
  .section {
    width: 100vw;
    height: 80vh;
    // background-color: rgb(54, 54, 54);
    display: flex;
    align-items: center;
    justify-content: center;
    .sq{
      width: 50vw;
    height: 80vh;
    // background-color: rgb(54, 54, 54);
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      max-width:80vw;
      object-fit: contain;
      height:100%;
    }
    }
  }
}
@media (max-width: 750px) {
  .sq {
    width: 96vw !important;
}
}
</style>