<template>
  <div class="main">
    <div class="left" data-aos="fade-up">
      <img :src="data.image" alt="" class="img">
    </div>

    <div class="right">
      <h1>{{ data.name }}</h1>
      <h2 class="price">Tk {{ data.price }}</h2>
    </div>
  </div>
  <div class="form">
    <form action="">
      <div class="inpgrp">
        <div class="con">
          <label for="firstname">firstname:</label>
          <input name="firstname" type="text">
        </div>
        <div class="con">
          <label for="lastname">lastname:</label>
          <input name="lastname" type="text">
        </div>
      </div>
      <div class="con">
        <label for="companyname">company name:</label>
        <input name="companyname" type="text">
      </div>
      <div class="con">
        <label for="streetaddress">company name:</label>
        <input name="streetaddress" type="text">
      </div>
      <select>
        <option class="select2-results__option" id="select2-billing_state-result-wlvy-BD-05" role="option"
          data-selected="false" tabindex="-1">Bagerhat</option>
        <option class="select2-results__option" id="select2-billing_state-result-a08r-BD-01" role="option"
          data-selected="false" tabindex="-1">Bandarban</option>
        <option class="select2-results__option" id="select2-billing_state-result-fdma-BD-02" role="option"
          data-selected="false" tabindex="-1">Barguna</option>
        <option class="select2-results__option" id="select2-billing_state-result-k61s-BD-06" role="option"
          data-selected="false" tabindex="-1">Barishal</option>
        <option class="select2-results__option" id="select2-billing_state-result-xvxn-BD-07" role="option"
          data-selected="false" tabindex="-1">Bhola</option>
        <option class="select2-results__option" id="select2-billing_state-result-4hg8-BD-03" role="option"
          data-selected="false" tabindex="-1">Bogura</option>
        <option class="select2-results__option" id="select2-billing_state-result-llks-BD-04" role="option"
          data-selected="false" tabindex="-1">Brahmanbaria</option>
        <option class="select2-results__option" id="select2-billing_state-result-l4ut-BD-09" role="option"
          data-selected="false" tabindex="-1">Chandpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-gggy-BD-10" role="option"
          data-selected="false" tabindex="-1">Chattogram</option>
        <option class="select2-results__option" id="select2-billing_state-result-asuv-BD-12" role="option"
          data-selected="false" tabindex="-1">Chuadanga</option>
        <option class="select2-results__option" id="select2-billing_state-result-7jr6-BD-11" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Cox's Bazar</option>
        <option class="select2-results__option" id="select2-billing_state-result-vuwa-BD-08" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Cumilla</option>
        <option class="select2-results__option" id="select2-billing_state-result-beie-BD-13" role="option"
          data-selected="true" tabindex="-1" aria-selected="false">Dhaka</option>
        <option class="select2-results__option" id="select2-billing_state-result-tmat-BD-14" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Dinajpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-g0rt-BD-15" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Faridpur </option>
        <option class="select2-results__option" id="select2-billing_state-result-0z1n-BD-16" role="option"
          data-selected="false" tabindex="-1">Feni</option>
        <option class="select2-results__option" id="select2-billing_state-result-gl0q-BD-19" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Gaibandha</option>
        <option class="select2-results__option" id="select2-billing_state-result-anoq-BD-18" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Gazipur</option>
        <option class="select2-results__option" id="select2-billing_state-result-53ly-BD-17" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Gopalganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-ash6-BD-20" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Habiganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-xf4c-BD-21" role="option"
          data-selected="false" tabindex="-1">Jamalpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-ifwf-BD-22" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Jashore</option>
        <option class="select2-results__option" id="select2-billing_state-result-1tm0-BD-25" role="option"
          data-selected="false" tabindex="-1">Jhalokati</option>
        <option class="select2-results__option" id="select2-billing_state-result-x44m-BD-23" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Jhenaidah</option>
        <option class="select2-results__option" id="select2-billing_state-result-k3h0-BD-24" role="option"
          data-selected="false" tabindex="-1">Joypurhat</option>
        <option class="select2-results__option" id="select2-billing_state-result-k52e-BD-29" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Khagrachhari</option>
        <option class="select2-results__option" id="select2-billing_state-result-ac5s-BD-27" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Khulna</option>
        <option class="select2-results__option" id="select2-billing_state-result-or6t-BD-26" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Kishoreganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-kg13-BD-28" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Kurigram</option>
        <option class="select2-results__option" id="select2-billing_state-result-ttys-BD-30" role="option"
          data-selected="false" tabindex="-1">Kushtia</option>
        <option class="select2-results__option" id="select2-billing_state-result-njb7-BD-31" role="option"
          data-selected="false" tabindex="-1">Lakshmipur</option>
        <option class="select2-results__option" id="select2-billing_state-result-9zjt-BD-32" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Lalmonirhat</option>
        <option class="select2-results__option" id="select2-billing_state-result-kdoc-BD-36" role="option"
          data-selected="false" tabindex="-1">Madaripur</option>
        <option class="select2-results__option" id="select2-billing_state-result-69vn-BD-37" role="option"
          data-selected="false" tabindex="-1">Magura</option>
        <option class="select2-results__option" id="select2-billing_state-result-480y-BD-33" role="option"
          data-selected="false" tabindex="-1">Manikganj </option>
        <option class="select2-results__option" id="select2-billing_state-result-uwwh-BD-39" role="option"
          data-selected="false" tabindex="-1">Meherpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-xc4c-BD-38" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Moulvibazar</option>
        <option class="select2-results__option" id="select2-billing_state-result-p7nw-BD-35" role="option"
          data-selected="false" tabindex="-1">Munshiganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-ax3q-BD-34" role="option"
          data-selected="false" tabindex="-1">Mymensingh</option>
        <option class="select2-results__option" id="select2-billing_state-result-a2ki-BD-48" role="option"
          data-selected="false" tabindex="-1">Naogaon</option>
        <option class="select2-results__option" id="select2-billing_state-result-opbg-BD-43" role="option"
          data-selected="false" tabindex="-1">Narail</option>
        <option class="select2-results__option" id="select2-billing_state-result-m3kc-BD-40" role="option"
          data-selected="false" tabindex="-1">Narayanganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-ongu-BD-42" role="option"
          data-selected="false" tabindex="-1">Narsingdi</option>
        <option class="select2-results__option" id="select2-billing_state-result-pima-BD-44" role="option"
          data-selected="false" tabindex="-1">Natore</option>
        <option class="select2-results__option" id="select2-billing_state-result-fy8s-BD-45" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Nawabganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-lj1g-BD-41" role="option"
          data-selected="false" tabindex="-1">Netrakona</option>
        <option class="select2-results__option" id="select2-billing_state-result-lz0v-BD-46" role="option"
          data-selected="false" tabindex="-1">Nilphamari</option>
        <option class="select2-results__option" id="select2-billing_state-result-0k85-BD-47" role="option"
          data-selected="false" tabindex="-1">Noakhali</option>
        <option class="select2-results__option" id="select2-billing_state-result-h9a9-BD-49" role="option"
          data-selected="false" tabindex="-1">Pabna</option>
        <option class="select2-results__option" id="select2-billing_state-result-cdp3-BD-52" role="option"
          data-selected="false" tabindex="-1">Panchagarh</option>
        <option class="select2-results__option" id="select2-billing_state-result-juah-BD-51" role="option"
          data-selected="false" tabindex="-1">Patuakhali</option>
        <option class="select2-results__option" id="select2-billing_state-result-gpcp-BD-50" role="option"
          data-selected="false" tabindex="-1">Pirojpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-vdko-BD-53" role="option"
          data-selected="false" tabindex="-1">Rajbari</option>
        <option class="select2-results__option" id="select2-billing_state-result-e1l2-BD-54" role="option"
          data-selected="false" tabindex="-1">Rajshahi</option>
        <option class="select2-results__option" id="select2-billing_state-result-g4iq-BD-56" role="option"
          data-selected="false" tabindex="-1">Rangamati</option>
        <option class="select2-results__option" id="select2-billing_state-result-631u-BD-55" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Rangpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-i157-BD-58" role="option"
          data-selected="false" tabindex="-1">Satkhira</option>
        <option class="select2-results__option" id="select2-billing_state-result-vsfr-BD-62" role="option"
          data-selected="false" tabindex="-1">Shariatpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-udvm-BD-57" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Sherpur</option>
        <option class="select2-results__option" id="select2-billing_state-result-jvc2-BD-59" role="option"
          data-selected="false" tabindex="-1" aria-selected="false">Sirajganj</option>
        <option class="select2-results__option select2-results__option--highlighted"
          id="select2-billing_state-result-lxm6-BD-61" role="option" data-selected="false" tabindex="-1"
          aria-selected="true">Sunamganj</option>
        <option class="select2-results__option" id="select2-billing_state-result-dw4l-BD-60" role="option"
          data-selected="false" tabindex="-1">Sylhet</option>
        <option class="select2-results__option" id="select2-billing_state-result-8jg4-BD-63" role="option"
          data-selected="false" tabindex="-1">Tangail</option>
        <option class="select2-results__option" id="select2-billing_state-result-6yl9-BD-64" role="option"
          data-selected="false" tabindex="-1">Thakurgaon</option>
      </select>
      <div class="btn-con">
        <button class="order" @click="order(data._id)">confirm order</button>
      </div>
    </form>
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

.form {
  width: 100vw;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 20%;

  form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: flex-start;

    input {
      height: 40px;
      width: 100%;
      font-family: monospace;
      font-size: 16px
    }

    label {
      text-transform: uppercase !important;
    }

    .con {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 100%;
      min-height: 74px;
      // height: 100%;
    }

    .inpgrp {
      width: 100%;
      display: flex;
      gap: 10px;
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