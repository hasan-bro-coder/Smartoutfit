<template>
  <div class="loader" v-if="data == ''"><img src="/loader.gif" alt="loading"></div>
  <div class="main" v-else>
    <div class="left" data-aos="fade-up">
        <img :src="data.image" alt="image not found">
    </div>

    <div class="right" data-aos="fade-up" data-aos-delay="100">
      <h1 data-aos="fade-up" data-aos-delay="200">{{ data.name }}</h1>
      <h2 class="price" data-aos="fade-up" data-aos-delay="300">Tk {{ data.price }}</h2>
      <div class="quantity" data-aos="fade-up" data-aos-delay="400" v-if="data.quantity > 0">stock available: {{ data.quantity }}</div>
      <div class="quantity" data-aos="fade-up" data-aos-delay="400" v-else style="color: red;
      ">out of stock</div>
      <p class="description" data-aos="fade-up" data-aos-delay="500">
        {{ data.description }}
      </p>
      <div class="btn-con">
        <button class="order radial-gradient" @click="order(data._id)">order in one click</button>
        <button class="cart radial-gradient" @click="addtocart(data._id)">add to cart</button>
      </div>
    </div>
  </div>
  <div class="other"></div>
  <Products></Products>
  <Credits></Credits>

</template>
<script>
import Products from "../components/products.vue";
import Credits from "../components/credits.vue";
import {store} from "../store";

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
      store.cart = cart
    }
  },
  async mounted() {
    let { data, error } = await store.supabase
        .from('products')
        .select('*')
        .eq('_id', this.$route.params.id)
        console.log(data);
    this.data = data[0]
  },
};
</script>
<style lang="scss" scoped>
.loader {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }
}
.main {
  min-width: 100vw;
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
      transition: 1s;
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
        // background-color: rgba(255, 255, 255, 0); 
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
        // background-color: rgba(255, 255, 255, 0);
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
    height: 100%;
    .right,
    .left {
      width: 80%;
    }
  }
}
</style>