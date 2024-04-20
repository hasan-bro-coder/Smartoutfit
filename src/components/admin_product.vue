<template>
  <div class="btns">
    <button @click="show()">add new product</button>
  </div>
  <dialog>
    <form @submit.prevent="add(this)" method="dialog">
      <div>
        <label for="name">name</label>
        <input name="name" :value="form.name" />
      </div>
      <div>
        <label for="price">price</label>
        <input name="price" type="number" :value="form.price" />
      </div>
      <div>
        <label for="quantity">quantity</label>
        <input name="quantity" type="number" :value="form.quantity" />
      </div>
      <div>
        <label for="image">uploade image</label>
        <input name="image" type="file" />
      </div>
      <div>
        <label for="description">description</label>
        <textarea name="description" type="number" :value="form.description"></textarea>
      </div>
      <div>
        <label for="category">category</label>
        <textarea name="category" type="number" :value="form.category"></textarea>
      </div>
      <button>OK</button>
    </form>
  </dialog>
  <dialog class="edit">
    <form @submit.prevent="editor(this)" method="dialog">
      <div>
        <label for="name">name</label>
        <input name="name" :value="form.name" />
      </div>
      <div>
        <label for="price">price</label>
        <input name="price" type="number" :value="form.price" />
      </div>
      <div>
        <label for="quantity">quantity</label>
        <input name="quantity" type="number" :value="form.quantity" />
      </div>
      <!-- <div> -->
        <!-- <label for="image">uploade image</label> -->
        <!-- <input name="image" type="file" /> -->
      <!-- </div> -->
      <div>
        <label for="description">description</label>
        <textarea name="description" type="number" :value="form.description"></textarea>
      </div>
      <div>
        <label for="category">category</label>
        <textarea name="category" type="number" :value="form.category"></textarea>
      </div>
      <button>OK</button>
    </form>
  </dialog>
  <div class="products">
    <div class="product" v-for="product in products" :key="product._id" @click.self="send(product._id)"
      data-aos="fade-up" data-aos-delay="100">
      <img @click.self="send(product._id)"
        :src="product.image || 'https://images.unsplash.com/photo-1711809657132-fa38bf2ac5e7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
        alt="image not found" />
      <div class="bottom">
        <div class="price" @mouseleave="$event.target.innerText = `Tk ` + product.price" @mouseover="
      $event.target.innerText = 'available: ' + product.quantity
      ">
          Tk {{ product.price }}
        </div>

        <div class="btn-con">
          <button class="cart" @click="edit(product._id)">
            edit<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </button>
          <button class="delet" @click="delet(product._id)" style="color: red; border-color: red">
            delete
          </button>
        </div>
      </div>
      <!-- {{product}} -->
    </div>
  </div>
</template>
<script>
import { store } from "../store";

export default {
  data() {
    return {
      products: [],
      form: {
        name: "",
        price: 0,
        quantity: 0,
        image: "",
        description: "",
        category: [],
      },
    };
  },
  methods: {
    send(id) {
      window.location.pathname = "/product/" + id;
    },
    async refresh() {
      let { data, error } = await store.supabase
        .from('products')
        .select('*')
      this.products = data
    },
    async edit(id) {
      this.id = id;
      let { data, error } = await store.supabase
        .from('products')
        .select('*')
        .eq('_id', id)
      console.log(data);
      this.form = data[0];
      document.querySelector("dialog.edit").showModal();
    },
    async editor() {
      let that = this;
      let form = Object.fromEntries(
        new FormData(document.querySelector("dialog.edit form")).entries()
      );
      console.log(form);
      document.querySelector("dialog.edit").close();
      if(form.hasOwnProperty('image') && form.image == ""){
        delete form.image
        const { data, error } = await store.supabase
          .from('products')
          .update(form)
          .eq('_id', that.id)
          .select()

        this.refresh();
        return 0
      } // true
      // async function FileToDataURL(blob, callback) {
      //   var a = new FileReader();
      //   a.onload = function (e) { form.image = e.target.result; callback(form); }
      //   a.readAsDataURL(blob.image);
      // }
      // FileToDataURL(form, async (form) => {


      //   const { data, error } = await store.supabase
      //     .from('products')
      //     .update(form)
      //     .eq('_id', that.id)
      //     .select()

      //   this.refresh();
      // })
    },

    show() {
      document.querySelector("dialog").showModal();
    },
    async add() {
      let form = Object.fromEntries(
        new FormData(document.querySelector("form")).entries()
      );
      console.log(form);
      async function FileToDataURL(blob, callback) {
        var a = new FileReader();
        a.onload = function (e) { form.image = e.target.result; callback(form); }
        a.readAsDataURL(blob.image);
      }
      document.querySelector("dialog").close("");
      FileToDataURL(form, async (form) => {

        const { data, error } = await store.supabase
          .from('products')
          .insert(
            form
          )
          .select()

        this.refresh();
      })
    },
    async delet(id) {
      await store.supabase
        .from('products')
        .delete()
        .eq('_id', id)
      this.refresh();
    },
  },
  async mounted() {
    console.log(this.$route);

    this.refresh();
  },
};
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

  form {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    div {
      gap: 5px;
      width: 200px;
      display: flex;
      flex-direction: column;

      input {
        color: black;
        height: 28px;
      }

      input[type="file"] {
        color: rgb(255, 255, 255);
        height: 28px;
      }
    }
  }
}

.btns {
  width: 100vw;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border-radius: 6px;
    padding: 15px;
    background: rgba(0, 0, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px rgb(255, 255, 255) solid;

    &:hover {
      border: 1px white solid;
      background-color: white;
      color: black;
    }
  }
}

.products {
  display: grid;
  // width: 50vw;
  gap: 30px;
  margin: 0px 100px;
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

      .price,
      .quantity {
        font-size: 20px;
        font-weight: 500;
        text-align: center;
      }

      .btn-con {
        width: 100%;
        display: flex;
        gap: 10px;
      }

      .delet {
        height: 50px;
        width: 100%;
        border-radius: 6px;
        border: 1px rgb(255, 0, 0) solid;
        background-color: rgba(255, 255, 255, 0);
        color: rgb(255, 0, 0);
        transition: 1s;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          border: 1px rgba(255, 0, 0, 0) solid;
          color: rgb(255, 255, 255) !important;
          background-color: rgb(255, 0, 0);
          fill: rgb(255, 255, 255);
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

        &:hover svg {
          fill: black;
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