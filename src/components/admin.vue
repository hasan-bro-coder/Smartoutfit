<template>
  <div class="grid">
    <div class="col" @click="send('/admin/orders')">ongoing orders: 0</div>
    <div class="col">products available: 0</div>
    <div class="col">order completed: 0</div>
    <div class="col">money incommed: 0</div>
  </div>
</template>
<script>
export default {
     methods: {
    send(id){
      window.location.pathname = id;
    }
  },
};
</script>
<style lang="scss" scoped>
.grid {
  display: grid;
  // width: 50vw;
  gap: 30px;
  margin: 0px 100px;
  //    place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-auto-rows: 250px;
  .col {
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