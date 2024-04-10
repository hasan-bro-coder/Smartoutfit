<template>
  <div class="main">
    <div class="left" data-aos="fade-up">
      <div class="img"></div>
    </div>

    <div class="right" data-aos="fade-up" data-aos-delay="100">
      <h1 data-aos="fade-up" data-aos-delay="200">{{ data.name }}</h1>
      <h2 class="price" data-aos="fade-up" data-aos-delay="300">Tk {{ data.price }}</h2>
      <div class="quantity" data-aos="fade-up" data-aos-delay="400">stock available: {{ data.quantity }}</div>
      <p class="description" data-aos="fade-up" data-aos-delay="500">
        {{ data.description }}
      </p>
      <div class="btn-con">
        <button class="order">order in one click</button>
        <button class="cart" @click="addtocart(data._id)">add to cart</button>
      </div>
    </div>
  </div>
  <div class="other"></div>
  <Products></Products>

</template>
<script>
import Products from "../components/products.vue"

export default {
  components:{Products},
  data() {
    return {
      data: "",
    };
  },
  methods:{
    addtocart(id){
      let cart = localStorage.getItem("fav") || []
      cart.push(id)
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
    .img {
      background-color: rgb(54, 54, 54);
      width: 100%;
      height: 100%;
      border-radius: 12px;
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
      grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
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