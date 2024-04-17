<template>
    <div class="products">
    <div
      class="product"
      v-for="(product,index) in products"
      :key="product._id"
      @click="send(product._id)"
      data-aos="fade-up"
      :data-aos-delay="index < 30 ? (index) * 100 : 100"
    >
      <img
        src="https://images.unsplash.com/photo-1711809657132-fa38bf2ac5e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="nai"
      />
      <div class="bottom">
        <div class="price" @mouseleave="$event.target.innerText = `Tk `+product.price " @mouseover="$event.target.innerText = 'available: '+product.quantity ">Tk {{ product.price }}</div>

        <div class="btn-con">
        <button class="cart">checkout<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
    this.products = await request(server + "/search/all", "GET");
  },
};
</script>
<style scoped lang="scss">
.products {
  display: grid;
  // width: 50vw;
  gap: 30px;
  margin: 0px 100px;
  //    place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 400px;
  .product {
    background-color: rgb(54, 54, 54);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 12px;
    img {
      object-fit: cover;
      width: 100%;
      min-height: 250px;
      // height:85%
    }
    .bottom {
      width: 100%;
      min-height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding: 5px 5px;
      .price,.quantity {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }
      .btn-con{
        width: 100%;
        display: flex;
      }
      .order {
        height: 50px;
        width: 50%;
        border-radius: 6px;
        border: 1px white solid;
        background-color: rgba(255, 255, 255, 0);
        color: white;
        transition: 1s;
        &:hover {
          border: 1px white solid;
          background-color: white;
          color: black;
          fill: black;
        }
        svg {
          fill: white;
          width: 20px;
          height: 10px;
        }
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
        &:hover svg{
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
@media (max-width: 450px) {
  .products {
    display: grid;
    // width: 50vw;
    gap: 30px;
    margin: 0px 10px;
    //    place-items: center;
    grid-template-columns: repeat(1, minmax(200px, 1fr));
    grid-auto-rows: 400px;
  }
}
</style>