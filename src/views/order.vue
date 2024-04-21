<template>
  <div class="main">
    <div class="left" data-aos="fade-up">
      <img :src="data.image" alt="" class="img">
    </div>

    <div class="right">
      <h1>{{ data.name }}</h1>
      <h2 class="price">Tk {{ data.price }}</h2>
      <div class="btn-con">
        <button class="order" @click="order(data._id)">confirm order</button>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "../store"
export default {
  data() {
    return {
      data: {}
    }
  },
  methods: {
    async order(id) {

      const { data, error } = await supabase
        .from('orders')
        .insert([
          { product_id: [id], other_column: 'otherValue' },
        ])
        .select()

    }
  },
      async mounted() {

    let { data, error } = await store.supabase
      .from('products')
      .select('*')
      .eq('_id', this.$route.params.id)
    this.data = data[0]
  },
}
</script>
<style lang="scss" scoped>
.main {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .left {
    width: 50%;
    height: 60vh;
    padding-bottom: 30px;

    .img {
      background-color: rgba(54, 54, 54, 0);
      width: 100%;
      height: 100%;
      border-radius: 12px;
      object-fit: contain;
    }
  }

  .right {
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
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
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