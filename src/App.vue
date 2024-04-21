<script>
import { RouterLink, RouterView } from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import {store} from "./store";
let closed = true;
export default {
  data() {
    return {
      cart: [],
      havecart: true
    };
  },
  methods: {
    send(id) {
      window.location.pathname = "/product/" + id;
    },
    sidebar() {
      if (closed) {
        document.querySelector(".sidebar").style.width =
          "clamp(350px,30vw,1000px)";
        document.querySelector(".sidebar").style.padding = "10px";
        document.querySelector(".sidebar").style.outline = "1px white solid"

      } else {
        document.querySelector(".sidebar").style.width = "0px";
        document.querySelector(".sidebar").style.padding = "0px";
        document.querySelector(".sidebar").style.outline = "1px transparent solid"
      }
      closed = !closed;
    },
    async update(){
    let datas = [];
    let cart = JSON.parse(localStorage.getItem("fav") || "[]");
    console.log(cart);
    for (let id = 0; id < cart.length; id++) {
      try {
        let {data,error} = await store.supabase
        .from('products')
        .select('*')
        .eq('_id', String(cart[id]))
        console.log(data,error);
        datas.push(data[0]);
      }
      catch (e) { console.log(e); }
    }
    this.cart = datas;
    this.havecart = datas.length <= 0;
    }
  },
  async mounted() {
    AOS.init();
    this.update()
    
  },
};
</script>

<template>
  <!-- <div class="loader">
    <h1>Smart Outfit</h1>
  </div> -->
  <!-- <div class="nav"></div> -->
  <div class="sidebar">
    <h1 v-if="havecart">Not Found</h1>
    <div>
      <div class="prod" v-for="prod in cart" :key="prod.id" @click="send(prod._id)">
        <h1>{{ prod.name }}</h1>
        <h2>Tk {{ prod.price }}</h2>
      </div>
      <button>order</button>
    </div>
  </div>
  <nav>
    <div class="social" >
      <span v-if="this.$route.path == '/admin' ||
      this.$route.path == '/admin/orders' ||
      this.$route.path == '/admin/products'
      ">
        <RouterLink to="/admin/products">products</RouterLink>
        <RouterLink to="/admin/orders">orders</RouterLink>
      </span>
      <RouterLink to="/" v-if="this.$route.path.includes('/product')
      ">home</RouterLink>
    </div>
    <!-- <div class="links" v-else> -->
      <!-- <a href="">Home</a>
    <a href="">about us</a>
    <a href="">contact us</a> -->
    <!-- </div> -->
    <div class="logo">
      <h1>Smart Outfit</h1>
    </div>
    <div class="buttons">
      <button class="fav" @click="sidebar()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          !Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com
          License - https://fontawesome.com/license/free Copyright 2024
          Fonticons, Inc.
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>
      </button>
      <!-- <button class="fav">favourite</button> -->
    </div>

    <!-- <router-link to="/">home</router-link> -->
    <!-- <router-link to="/">about</router-link> -->
  </nav>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  clip-path: circle(100% at 50% 50%),
}

.sidebar {
  width: 0px;
  height: calc(100vh - 60px);
  position: fixed;
  top: 60px;
  // left:0;
  right: 0;
  z-index: 4;
  background-color: rgb(54, 54, 54);
  outline: 1px transparent solid;
  transition: 1s;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  gap: 10px;
  overflow-x: hidden;

  .prod {
    background-color: rgba(0, 0, 0, 0.293);
    border-radius: 8px;
    width: 100%;
    min-height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px
  }
}

nav {
  // top: 0;
  // z-index: 3;
  // position: fixed;
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  gap: 30px;
  background-color: transparent;

  .logo {
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: calc(20px * 1.618);
    }
  }

  .links {
    width: 350px;
    gap: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social {
    width: 350px;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
  }

  .buttons {
    width: 350px;
    display: flex;
    justify-content: flex-end;
    gap: 30px;
    align-items: center;

    button {
      width: 70px;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: rgb(255, 255, 255) 1px solid;
      border-radius: 6px;
      color: white;
      transition: 1s;
      fill: rgb(255, 255, 255);

      &:hover {
        border: 1px white solid;
        background-color: white;
        color: black;
        fill: black;
      }

      svg {
        width: 30px;
        height: 30px;
        margin-left: -1px;
      }
    }
  }
}

@media (max-width: 730px) {
  .social {
    display: none !important;
  }

  .links {
    gap: 20px !important;
    justify-content: center !important;
  }
}
</style>
