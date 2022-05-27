<template>
  <div class="content">
    <div class="col-12">
      <div class="float-right">
        <router-link to="competency_create" class="btn btn-success"
          >Add</router-link
        >

        <!-- <router-link to="/about" custom v-slot="{ navigate }">
  <span @click="navigate" @keypress.enter="navigate" role="link">About Us</span>
</router-link> -->

        <!-- <button type="button" class="btn btn-danger btn-floating">
          <i class="fas fa-magic"></i>
        </button> -->
      </div>
      <card>
        <table class="table tablesorter">
          <thead>
            <tr>
              <slot name="columns">
                <th>competency Title</th>
                <th>Description</th>
                <th>Competency Type</th>
                <th>Parent Competency</th>
                <th>Actions</th>
              </slot>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in info" :key="index">
              <td>
                {{ item.competency_title }}
              </td>
              <td>
                {{ item.description }}
              </td>
              <td>
                {{ item.competency_type }}
              </td>
              <td>
                {{ item.parent_competency }}
              </td>
              <td>
                <!-- <button class="btn"><i class="fa fa-edit"></i></button> -->

                <!-- <button class="btn" @click="toggleModal">
                  <i class="fa fa-eye"></i>
                </button> -->
                <!-- <view-model v-if="isShowModal" /> -->

                <button class="btn" @click="toggleModal(info[index])">
                  <i class="fa fa-eye"></i>
                </button>

                <view-model
                  v-if="isShowModal"
                  @close="toggleModal"
                  :item="item.id"
                />

                <button
                  class="btn btn-danger"
                  @click="deleteCompetency(item.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
                <router-link to="competency_create" class="btn btn-success"
                  >Edit</router-link
                >
                <!-- <div id="app">
                  <div class="container">
                    <button
                      class="btn btn-info"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      show modal
                    </button>
                    <competency-create></competency-create>
                  </div>
                </div> -->
                <!-- <router-link to= "/create" class="nav-item nav-link" >Create Product< /router-link> -->

                <div class="btn-group" role="group">
                  <!-- <router-link: to="{name: 'edit', params: {id: product.id}}" class="btn btn-success">Edit</router-link> -->
                  <!-- <button class="btn btn-danger" @click="deleteProduct(product.id)">Delete</button> -->
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!-- <button class="btn" @click="toggleModal">
          <i class="fa fa-eye"></i>
        </button> -->

        <!-- <ViewModel v-if="isShowModal" @close="toggleModal" /> -->
        <!-- <base-button type="primary" block @click="notifyVue('top', 'center')">Top Center</base-button> -->

        <!-- Modal -->
        <!-- <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div> -->
      </card>
    </div>
  </div>
</template>
<script>
// import {
//   Card
// } from "@/components/index";

import BaseTable from "@/components/BaseTable";
import Vue from "vue";
import axios from "axios";
import Card from "../components/Cards/Card.vue";
import ViewModel from "../components/ViewModel.vue";

Vue.prototype.$http = axios;

const instance = axios.create({
    baseURL: 'https://nousard.herokuapp.com/'
});

const tableColumns = [
  "competency_title",
  "description",
  "competency_type",
  "parent_competency",
];

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$axios', { value: instance });
  },
  components: {
    Card,
    BaseTable,
    ViewModel,
  },
  data() {
    return {
      table1: {
        title: "Orginataion",
        columns: [...tableColumns],
        data: this.info,
      },
      info: this.info,
      isShowModal: false,
      data_item: this.data_item,
    };
  },
  mounted: function () {
    axios
      .get("api/competency")
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {
    deleteCompetency(id) {
      axios
        .delete("api/competency/" + id)
        .then((response) => {
          // let i = this.products.map((data) => data.id).indexOf(id);
          // this.products.splice(i, 1);
          this.info = response.data.data;
        });
    },

    toggleModal(id) {
      this.isShowModal = !this.isShowModal;
      this.data_item = id;
      console.log(id);
    },
  },
};
</script>
<style>
</style>
