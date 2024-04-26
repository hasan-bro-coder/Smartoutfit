
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
const app = createApp(App)

app.use(router)

app.mount('body')
