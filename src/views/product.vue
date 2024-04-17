<template>
  <div class="main">
    <div class="left" data-aos="fade-up">
        <img src="https://images.unsplash.com/photo-1711809657132-fa38bf2ac5e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
    </div>

    <div class="right" data-aos="fade-up" data-aos-delay="100">
      <h1 data-aos="fade-up" data-aos-delay="200">{{ data.name }}</h1>
      <h2 class="price" data-aos="fade-up" data-aos-delay="300">Tk {{ data.price }}</h2>
      <div class="quantity" data-aos="fade-up" data-aos-delay="400">stock available: {{ data.quantity }}</div>
      <p class="description" data-aos="fade-up" data-aos-delay="500">
        {{ data.description }}
      </p>
      <div class="btn-con">
        <button class="order" @click="order(data._id)">order in one click</button>
        <button class="cart" @click="addtocart(data._id)">add to cart</button>
      </div>
    </div>
  </div>
  <div class="other"></div>
  <Products></Products>
  <Credits></Credits>

</template>
<script>
import Products from "../components/products.vue"
import Credits from "../components/credits.vue"

export default {
  components: { Products,Credits },
  data() {
    return {
      data: "",
    };
  },
  methods:{
    order(id){
      window.location.pathname = "/order/" + id;
    },
    addtocart(id){
      let cart = JSON.parse(localStorage.getItem("fav")) || []
      !cart.includes(id) ? cart.push(id) : ""
      localStorage.setItem("fav",JSON.stringify(cart))
    }
  },
  async mounted() {
    let server =
      "https://db0b181b-728d-4acb-9abb-54d70a947b41-00-2t0pfo365rz6a.riker.replit.dev";
    async function request(url, method) {
      let json = await (
        await fetch(url, {
          method,
        })
      ).json();
      console.log(json);
      return json;
    }
    this.data = await request(
      server + "/product/" + this.$route.params.id || "",
      "GET"
    );
  },
};
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  .left {
    width: 50%;
    height: 80vh;
    padding: 40px;
    img {
      background-color: rgba(54, 54, 54, 0);
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: contain;
    }
  }
  .right {
    padding: 40px;
    width: 50%;
    height: 80vh;
    .price {
      font-weight: 700;
    }
    .description {
      font-weight: 500;
    }
    .quantity {
      margin-top: 20px;
    }
    .btn-con {
      margin-top: 30px;
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      gap: 20px;
      .order {
        border-radius: 6px;
        min-width: 200px;
        height: 40px;
        border: 1px white solid;
        background-color: rgba(255, 255, 255, 0);
        color: white;
        transition: 1s;
        &:hover {
          border: 1px white solid;
          background-color: white;
          color: black;
        }
      }
      .cart {
        border-radius: 6px;
        min-width: 200px;
        height: 40px;
        border: 1px white solid;
        background-color: rgba(255, 255, 255, 0);
        color: white;
        transition: 1s;
        &:hover {
          border: 1px white solid;
          background-color: white;
          color: black;
        }
      }
    }
  }
}
// .other{
//   height: 300px;
// }
@media (max-width: 730px) {
  .main {
    flex-direction: column;
    .right,
    .left {
      width: 80%;
    }
  }
}
</style>