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
      <button type="submit">OK</button>
      <button type="button" @click="close('new')">Cancle</button>
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
      <button type="submit">OK</button>
      <button type="button" @click="close('edit')">Cancle</button>
    </form>
  </dialog>
  <div class="loader" v-if="products.length <= 0"><img src="/loader.gif" alt=""></div>
  <div class="products" v-else>
    <div class="product" v-for="product in products" :key="product._id" @click.self="send(product._id)"
      data-aos="fade-up" data-aos-delay="100">
      <img @click.self="send(product._id)" :src="product.image" alt="image not found" />
      <div class="bottom">
        <div class="det">

          <div class="name">
            {{ product.name }}
          </div>
          <div class="price" @mouseleave="$event.target.innerText = `Tk ` + product.price" @mouseover="
      $event.target.innerText = 'available: ' + product.quantity
      ">
            Tk {{ product.price }}
          </div>
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
      this.form = data[0];
      document.querySelector("dialog.edit").showModal();
    },
    close(val) {
      if (val == "new") document.querySelector("dialog").close();
      else document.querySelector("dialog.edit").close();
    },
    async editor() {
      let that = this;
      let form = Object.fromEntries(
        new FormData(document.querySelector("dialog.edit form")).entries()
      );
      document.querySelector("dialog.edit").close();
      if (form.hasOwnProperty('image') && form.image == "") {
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

.btn-con {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  button{
    min-width: 20px;
    width: 100%;
  }
  .delet {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-radius: 6px;
    border: 1px rgb(255, 0, 0) solid;
    background-color: rgba(255, 255, 255, 0);
    color: rgb(255, 0, 0);
    transition: 1s;

    &:hover {
      border: 1px rgba(255, 255, 255, 0) solid;
      background-color: rgb(255, 0, 0);
      color: rgb(255, 255, 255);
    }
  }

  .cart {
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
      max-height: 120px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      padding: 0px 5px 5px 5px;

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

      // .cart {
      //   width: 100%;
      //   display: flex;
      //   justify-content: center;
      //   align-items: center;
      //   height: 50px;
      //   border-radius: 6px;
      //   border: 1px white solid;
      //   background-color: rgba(255, 255, 255, 0);
      //   color: white;
      //   transition: 1s;

      //   &:hover {
      //     border: 1px white solid;
      //     background-color: white;
      //     color: black;
      //   }

      //   &:hover svg {
      //     fill: black
      //   }

      //   svg {
      //     fill: white;
      //     width: 20px;
      //     height: 10px;
      //   }
      // }
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
        max-height: 200px;
        aspect-ratio: 1 /1;
      }
    }
  }
}

@media (max-width: 370px) {
  .products {
    gap: 20px;
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

      button {
        height: 40px !important;
      }
    }
  }
}

@media (max-width: 300px) {
  .products {
    gap: 30px;
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
        max-height: 120px;
        aspect-ratio: 1 /1;
      }

      button {
        height: 40px !important;
        svg{
          display: none;
        }
      }
    }
  }
}

// .products {
//   display: grid;
//   // width: 50vw;
//   gap: 30px;
//   margin: 0px 100px;
//   //    place-items: center;
//   grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
//   grid-auto-rows: 400px;

//   .product {
//     background-color: rgb(54, 54, 54);
//     color: white;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     border-radius: 12px;
//     img {
//       object-fit: cover;
//       width: 100%;
//       height: 100%;
//       // height:85%
//       display: flex;
//       justify-content: flex-start;
//       // align-items: center;
//       // height:85%
//       transition: 1s;
//     }

//     .bottom {
//       width: 100%;
//       min-height: 120px;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//       flex-direction: column;
//       padding: 5px 5px;

//       .price,
//       .quantity {
//         font-size: 15px;
//         font-weight: 500;
//         text-align: center;
//       }
//       .name {
//         font-size: 20px;
//         text-align: center;
//       }
//       .btn-con {
//         width: 100%;
//         display: flex;
//         gap: 10px;
//       }

//       .delet {
//         height: 50px;
//         width: 100%;
//         border-radius: 6px;
//         border: 1px rgb(255, 0, 0) solid;
//         background-color: rgba(255, 255, 255, 0);
//         color: rgb(255, 0, 0);
//         transition: 1s;
//         display: flex;
//         justify-content: center;
//         align-items: center;

//         &:hover {
//           border: 1px rgba(255, 0, 0, 0) solid;
//           color: rgb(255, 255, 255) !important;
//           background-color: rgb(255, 0, 0);
//           fill: rgb(255, 255, 255);
//         }

//         svg {
//           fill: white;
//           width: 20px;
//           height: 10px;
//         }
//       }

//       .cart {
//         width: 100%;
//         display: flex;
//         justify-content: center;
//         align-items: center;
//         height: 50px;
//         border-radius: 6px;
//         border: 1px white solid;
//         background-color: rgba(255, 255, 255, 0);
//         color: white;
//         transition: 1s;

//         &:hover {
//           border: 1px white solid;
//           background-color: white;
//           color: black;
//         }

//         &:hover svg {
//           fill: black;
//         }

//         svg {
//           fill: white;
//           width: 20px;
//           height: 10px;
//         }
//       }
//     }

//     // aspect-ratio: 1/1;
//   }
// }

// @media (max-width: 750px) {
//   .products {
//     display: grid;
//     // width: 50vw;
//     gap: 30px;
//     margin: 0px 25px;
//     //    place-items: center;
//     grid-template-columns: repeat(2, minmax(220px, 1fr));
//     grid-auto-rows: 400px;
//   }
// }

// @media (max-width: 450px) {
//   .products {
//     display: grid;
//     // width: 50vw;
//     gap: 30px;
//     margin: 0px 10px;
//     //    place-items: center;
//     grid-template-columns: repeat(1, minmax(200px, 1fr));
//     grid-auto-rows: 400px;
//   }
// }</style>