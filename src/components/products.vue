<template>
  <div class="loader" v-if="products.length <= 0"><img src="/loader.gif" alt=""></div>
  <!-- <div class="products" v-if="products.length <= 0">
    <a class="product" v-for="(product, index) in [0,0,0,0,0,0,0,0,0,0,0]" :key="index"
      data-aos="fade-up" :data-aos-delay="index < 30 ? (index) * 100 : 100">
      <img :src="product.image" alt="image Loading" />
      <div class="bottom">
        <div class="det">

          <div class="name">
            ......
          </div>
          <div class="price" @mouseleave="$event.target.innerText = `Tk ` + product.price"
            @mouseover="$event.target.innerText = 'available: ' + product.quantity">Tk .......</div></div>
        <div class="btn-con">
          <button class="cart">checkout<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg></button>
        </div>
      </div>
    </a>
  </div> -->
  <div class="products" v-else>
    <a :href="'/product/' + product._id" class="product" v-for="(product, index) in products" :key="product._id"
      @click="send(product._id)" data-aos="fade-up" :data-aos-delay="100">
      <!-- src="https://images.unsplash.com/photo-1711809657132-fa38bf2ac5e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" -->
      <img :src="product.image" alt="image not found" />
      <div class="bottom">
        <div class="det">

          <div class="name">
            {{ product.name }}
          </div>
          <div class="price" @mouseleave="$event.target.innerText = `Tk ` + product.price"
            @mouseover="$event.target.innerText = 'available: ' + product.quantity">Tk {{ product.price }}</div>
        </div>
        <div class="btn-con">
          <button class="cart">checkout<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg></button>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
import { store } from "../store";

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    send(id) {
      window.location.pathname = "/product/" + id;
    }
  },
  async mounted() {
    window.onload = async () => {
      let { data, error } = await store.supabase
        .from('products')
        .select('*')
      this.products = data
    }
  },
};
</script>
<style scoped lang="scss">
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

.products {
  display: grid;
  // width: 50vw;
  gap: 30px;
  margin: 100px;
  //    place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 400px;

  .product {
    background-color: rgb(54, 54, 54);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 12px;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.7) inset,0px 0px 30px rgba(255, 255, 255, 0) ;
    // transform: translateY(-40px) !important;
    // background-color: rgba(54, 54, 54, 0.267);
    // box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.575) ;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
      max-height: 280px;
      aspect-ratio: 1 /1;
      display: flex;
      justify-content: flex-start;
      // align-items: center;
      // height:85%
      transition: 1s;
    }

    .bottom {
      width: 100%;
      min-height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding: 5px 5px;

      .price,
      .quantity {
        font-size: 15px;
        font-weight: 500;
        text-align: center;
      }

      .name {
        font-size: 20px;
        text-align: center;
        text-overflow: clip;
        overflow: hidden;
        max-height: 40px;
      }

      .btn-con {
        width: 100%;
        display: flex;
      }

      .cart {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        border-radius: 6px;
        border: 1px white solid;
        background-color: rgba(255, 255, 255, 0);
        color: white;
        transition: 1s;

        &:hover {
          border: 1px white solid;
          background-color: white;
          color: black;
        }

        &:hover svg {
          fill: black
        }

        svg {
          fill: white;
          width: 20px;
          height: 10px;
        }
      }
    }

    // aspect-ratio: 1/1;
  }
}

@media (max-width: 750px) {
  .products {
    display: grid;
    // width: 50vw;
    gap: 30px;
    margin: 0px 25px;
    //    place-items: center;
    grid-template-columns: repeat(2, minmax(220px, 1fr));
    grid-auto-rows: 400px;
  }
}

@media (max-width: 550px) {
  .products {
    gap: 30px;
    grid-template-columns: repeat(2, minmax(150px, 1fr));
    grid-auto-rows: 300px;

    .product {
      background-color: rgb(54, 54, 54);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 12px;
      // box-shadow: 0 0 10px rgba(0, 0, 0, 0.7) inset,0px 0px 30px rgba(255, 255, 255, 0) ;
      // transform: translateY(-40px) !important;
      // background-color: rgba(54, 54, 54, 0.267);
      // box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.575) ;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height: 280px;
        aspect-ratio: 1 /1;
      }
    }
  }
}

@media (max-width: 370px) {
  .products {
    gap: 10px;
    grid-template-columns: repeat(2, minmax(100px, 1fr));
    grid-auto-rows: 250px;

    .product {
      background-color: rgb(54, 54, 54);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 12px;
      // box-shadow: 0 0 10px rgba(0, 0, 0, 0.7) inset,0px 0px 30px rgba(255, 255, 255, 0) ;
      // transform: translateY(-40px) !important;
      // background-color: rgba(54, 54, 54, 0.267);
      // box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.575) ;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height: 280px;
        aspect-ratio: 1 /1;
      }

      .cart {
        height: 40px !important;
      }
    }
  }
}

@media (max-width: 300px) {
  .products {
    gap: 10px;
    grid-template-columns: repeat(1, minmax(100px, 1fr));
    grid-auto-rows: 250px;

    .product {
      background-color: rgb(54, 54, 54);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 12px;
      // box-shadow: 0 0 10px rgba(0, 0, 0, 0.7) inset,0px 0px 30px rgba(255, 255, 255, 0) ;
      // transform: translateY(-40px) !important;
      // background-color: rgba(54, 54, 54, 0.267);
      // box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.575) ;

      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        max-height: 280px;
        aspect-ratio: 1 /1;
      }

      .cart {
        height: 40px !important;
      }
    }
  }
}
</style>