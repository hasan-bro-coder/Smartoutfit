<template>
  
  <dialog >
<h1 id="firstname">{{ data.products[0].name }}</h1>
<h1 id="firstname">quantity: {{ data.products[0].quantity }}</h1>
<h1 id="firstname">price: {{ data.products[0].price }} tk</h1>
<!-- <h1 id="firstname">{{ data.products }}</h1> -->
    <hr>
<h3 id="firstname">{{ data.firstname }}</h3>
<h3 id="lastname">{{ data.lastname }}</h3>
<h3 id="companyname">{{ data.companyname }}</h3>
<h3 id="mobilenumber">{{ data.mobile }}</h3>
<h3 id="email">{{ data.email }}</h3>
<h3 id="detail">{{ data.detail }}</h3>
<hr>
<h2 id="loacation">{{ data.loacation }}</h2>
<h3 id="streetaddress">{{ data.streetaddress }}</h3>
<h3 id="town">{{ data.town }}</h3>
<h3 id="district">{{ data.district }}</h3>
<h3 id="postcode">{{ data.postcode }}</h3>
<form method="dialog">
    <button>OK</button>
  </form>
  </dialog>
  <div class="orders">
    <div class="order" v-for="(order, index) in orders" :key="index" @click="show(order)">
      <!-- <img :src="order.products[0]" alt="image not found" v-if="order.products?.length == 1"> -->
      <div >{{order.products.length}} products</div>
      <p>{{ order.district }}</p>
      <p>{{ order.created_at }}</p>
      <h6 :class="order.status"> {{ order.status }}</h6>
      <button>change status</button>
    </div>
  </div>
</template>
<script>
import { store } from "../store.js"
export default {
  data() {
    return {
      orders: [],
      data: { id: 2, products: [], firstname: "dfsd", lastname: "fsdfsdf", companyname: "dsfsdf", streetaddress: "sdfsdf", town: "dfs", district: "Bagerhat", postcode: "fdsf", mobilenumber: "dasdas", email: "sdfd@fsdf.fgdfg", detail: "dasdas", created_at: "2024-04-26T15:46:08.68805+00:00" }
    }
  },
  methods: {
    async refresh() {
      let { data, error } = await store.supabase
        .from('order')
        .select('*')
      this.orders = data
    },
    show(order){
      this.data = order
      document.querySelector("dialog").showModal()
    }
  },
  async mounted() {
    this.refresh()
  }
}
</script>
<style lang="scss" scoped>
dialog {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  padding: 25px;
  background-color: rgb(46, 46, 46);
  color: white;
  border: 1px white solid;
}
.orders{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  .order{
    width: 100%;
    background-color: rgb(44, 44, 44);
    border-radius: 6px;
  }
}
</style>