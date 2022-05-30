<template>
  <div class="content">
    <div class="col-12">
      <div class="float-right">
        <router-link to="company_create" class="btn btn-success"
          >Add</router-link
        >
      </div>
      <card>
        <table class="table tablesorter">
          <thead>
            <tr>
              <slot name="columns">
                <th>Company Title</th>
                <th>Website</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Actions</th>
              </slot>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(each, index) in info" :key="index">
              <td>
                {{ each.name }}
              </td>
              <td>
                {{ each.website }}
              </td>
              <td>
                {{ each.phone1 }}
              </td>
              <td>
                {{ each.country }}
              </td>
              <td>
                <!-- view -->
                <!-- <button class="btn" @click="toggleModal">
                  <i class="fa fa-eye"></i>
                </button>

                <view-model
                  v-if="isShowModal"
                  @close="toggleModal"
                  v-bind:each="each"
                  :title="each.description"
                /> -->

                <button class="btn btn-danger" @click="deleteCompany(each.id)">
                  <i class="fa fa-trash"></i>
                </button>
                <!-- <router-link to="competency_create" class="btn btn-success"
                  >Edit</router-link
                > -->
                <router-link
                  :to="{
                    path: '/company_edit/' + each.id,
                    name: 'Company Edit',
                    params: { each: each },
                  }"
                  class="btn btn-success"
                  >Edit</router-link
                >

                <div class="btn-group" role="group"></div>
              </td>
            </tr>
          </tbody>
        </table>
      </card>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Card from "../../components/Cards/Card.vue";

export default {
  components: {
    Card,
  },
  data() {
    return {
      info: this.info,
      isShowModal: false,
    };
  },
  mounted: function () {
    axios
      .get("api/organization")
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {
    deleteCompany(id) {
      debugger;
      axios.delete("api/organization/" + id).then((response) => {
        // let i = this.products.map((data) => data.id).indexOf(id);
        // this.products.splice(i, 1);
        this.info = response.data.data;
      });
    },

    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>
<style>
</style>