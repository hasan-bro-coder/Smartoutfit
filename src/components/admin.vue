<template>
  <div class="grid">
    <div class="col" @click="send('/admin/orders')">ongoing orders: {{ orderCount }}</div>
    <div class="col" @click="send('/admin/products')">products available: {{ productCount }}</div>
    <div class="col">order completed: 0</div>
    <div class="col">money incommed: 0</div>
  </div>
</template>
<script>
import {store} from '../store'
export default {
  data() {
    return {
      orderCount: 0,
      productCount: 0,
    }
  },
     methods: {
    send(id){
      window.location.pathname = id;
    },
  },
  async mounted() {
    let { data, error } = await store.supabase
        .from('order')
        .select('id')
        console.log(data,error);
      this.orderCount = data?.length
      {let { data, error } = await store.supabase
        .from('products')
        .select('_id')
      this.productCount = data.length}
  }
};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  // width: 50vw;
  gap: 30px;
  margin: 0px 100px;
  //    place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  // grid-auto-rows: 250px;
  .col {
    aspect-ratio: 1 / 1;
    background-color: rgb(54, 54, 54);
    border: 1px color white;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
}
@media (max-width: 600px) {
    .grid {
         margin: 0px 40px;
    }
}
</style>