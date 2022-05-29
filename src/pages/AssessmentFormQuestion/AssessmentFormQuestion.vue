<template>
  <div class="content">
    <div class="col-12">
      <div class="float-right">
        <router-link
          to="asseessment_form_question_create"
          class="btn btn-success"
          >Add</router-link
        >
      </div>
      <card>
        <table class="table tablesorter">
          <thead>
            <tr>
              <slot name="columns">
                <th>Form Title</th>
                <th>Question Title</th>
                <th>Actions</th>
              </slot>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in info" :key="index">
              <td>
                {{ item.form_id }}
              </td>
              <td>
                {{ item.question_id }}
              </td>
              <td>

                <!-- view -->
                <!-- <button class="btn" @click="toggleModal">
                  <i class="fa fa-eye"></i>
                </button>

                <view-model
                  v-if="isShowModal"
                  @close="toggleModal"
                  v-bind:item="item"
                  :title="item.description"
                /> -->

                <button
                  class="btn btn-danger"
                  @click="deleteCompetency(item.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
                <router-link to="competency_create" class="btn btn-success"
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
    // Card
  },
  data() {
    return {
      info: this.info,
      isShowModal: false,
    };
  },
  mounted: function () {
      debugger
     axios
        .get("api/form/question")
        .then((response) => {
          this.info = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
        this.myMethod();
  },
  methods: {
    async myMethod() {
      debugger
  let response1 = await axios
  .get("api/form/question")
        .then((response) => {
          this.info = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
},
    deleteCompetency(id) {
      axios
        .delete("api/form/question/" + id)
        .then((response) => {
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
