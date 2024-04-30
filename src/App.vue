<script>
import { RouterLink, RouterView } from "vue-router";
import gsap from "gsap";
import AOS from "aos";
import "aos/dist/aos.css";
import SplitType from 'split-type'
import { store } from "./store";
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
    search() {
      window.location.pathname = "/search/" + this.$refs.input.value;

    },
    async update() {



      let datas = [];
      let carts = JSON.parse(localStorage.getItem("fav") || "[]");
      carts.forEach(async (el, i) => {
        try {
          let { data, error } = await store.supabase
            .from('products')
            .select('*')
            .eq('_id', el)
          if (!error) {
            this.cart.push(data[0]);
            this.havecart = false
          }
        }
        catch (e) { console.log(e?.massage) }
      })
    }
  },
  async mounted() {
    window.mobileCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};
    if(!window.mobileCheck()){
      AOS.init();
    }
    this.update()
    let tl = gsap.timeline();
    tl.from(".loader h1", {
      duration: 1.5,
      scale: 0.1,
      // clipPath: "inset(0 100% 0 0)",

      // ease: Power4.easeOut,
    });
    //   const myText = new SplitType('.loader h1')

    // tl.to('.char', {
    //     y: 0,
    //     stagger: 0.05,
    //     delay: 0.2,
    //     duration: .1
    // })
    tl.to(".loader", {
      duration: 1.5,
      clipPath: "circle(0% at 50% 0%)",
      // ease: Power4.easeOut,
      onComplete() {
        setTimeout(() => { document.body.style.overflowY = "auto" }, 1000)
      }
    });
  },
};
</script>

<template>
  <div class="loader">
    <h1>Smart Outfit</h1>
  </div>
  <!-- <div class="nav"></div> -->
  <div class="sidebar">
    <h1 v-if="havecart">Not Found</h1>
    <div class="prod-con" v-else>
      <div class="prod" v-for="prod in cart" :key="prod?._id" @click="send(prod._id)">
        <img :src="prod?.image" alt="not found">
        <p class="name">{{ prod?.name }}</p>
        <p class="price">Tk {{ prod?.price }}</p>
      </div>
    </div>
    <!-- <button @click="order()">order</button> -->
  </div>
  <nav>
    <div class="social">
      <RouterLink to="/admin/products" v-if="this.$route.path.includes('/admin')">products</RouterLink>
      <RouterLink to="/admin/orders" v-if="this.$route.path.includes('/admin')">orders</RouterLink>
      <RouterLink to="/"
        v-if="this.$route.path.includes('/product') || this.$route.path.includes('/admin') || this.$route.path.includes('/search')">
        home</RouterLink>
    </div>
    <!-- <div class="links" v-else> -->
    <!-- <a href="">Home</a>
    <a href="">about us</a>
    <a href="">contact us</a> -->
    <!-- </div> -->
    <div class="logo">
      <div v-if="this.$route.path == '/' || this.$route.path.includes('/search')">
        <input type="text" placeholder="Search items" ref="input">
        <svg @click="search()" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24"
          focusable="false">
          <path
            d="m20.87 20.17-5.59-5.59C16.35 13.35 17 11.75 17 10c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.75 0 3.35-.65 4.58-1.71l5.59 5.59.7-.71zM10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z">
          </path>
        </svg>
      </div>
      <h1 v-else>Smart Outfit</h1>
    </div>
    <div class="buttons">
      <div class="fav" @click="sidebar()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
        </svg>

      </div>
      <!-- <button class="fav">favourite</button> -->
    </div>

    <!-- <router-link to="/">home</router-link> -->
    <!-- <router-link to="/">about</router-link> -->
  </nav>
  <RouterView></RouterView>
</template>

<style scoped lang="scss">
.loader {
  position: fixed;
  display: flex;
  justify-content: center;
  // align-items: center;
  z-index: 3000;
  width: 100vw;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  clip-path: circle(100% at 50% 50%);

  h1 {
    margin-top: 160px;
    font-size: max(50px, 12vw);
    color: rgb(0, 0, 0);
    font-weight: 600;
    clip-path: inset(0 0% 0 0);
  }
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
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0px;
  overflow-x: hidden;

  .prod-con {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    overflow: auto;
  }

  .prod {
    background-color: rgba(0, 0, 0, 0.293);
    border-radius: 8px;
    width: 100%;
    min-height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    // justify-content: center;
    // align-items: center;
    // gap: 10px;
    .name {
      font-size: 25px;
    }

    .price {
      font-weight: 700;
    }

    img {
      grid-area: 1 / 1 / 3 / 2;
      height: 100%;
      max-height: 70px;
      max-width: 100%;
    }
  }
}

nav {
  // top: 0;
  // z-index: 3;
  // position: fixed;
  overflow: hidden;
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

    div {

      display: flex;
      justify-content: center;
      align-items: center;

      input {
        border: 1px solid white;
        border-width: 1px;
        border-right: none;
        height: 40px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        width: calc(100%);
        background-color: #202020;
        padding: 20px;
        color: rgb(243, 243, 243);
        font-size: 14px;

        &:focus-visible {
          border-color: white !important;
          color: white;
          outline: none !important;
          box-shadow: none !important;
        }
      }

      svg {
        width: 40px;
        height: 42px;
        padding: 0px 5px;
        fill: white;
        background-color: #202020;
        border: 1px solid white;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
      }
    }

    h1 {
      font-size: clamp(10px,5vw,calc(20px * 1.618));
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

    .fav {
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

  .buttons {
    width: 70px !important;
  }

  .logo {
    min-width: 100px !important;
    font-size: 20px !important;
  }

  .links {
    gap: 20px !important;
    justify-content: center !important;
  }
}
</style>
