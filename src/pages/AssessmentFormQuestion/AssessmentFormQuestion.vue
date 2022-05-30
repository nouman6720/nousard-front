<template>
  <div class="content">
    <div class="col-12">
      <div class="float-right">
        <router-link
          to="assessment_form_question_create"
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
                  @click="deleteFormQuestion(item.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>

                <!-- Edit Assessment Form Question -->

                <!-- <router-link
                  :to="{
                    path: '/assessment_form_question_edit/',
                    name: 'Assessment Form Question Edit',
                    params: { assessment_form: item },
                  }"
                  class="btn btn-success"
                  >Edit</router-link
                > -->

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
    deleteFormQuestion(id) {
      axios.delete("api/form/question/" + id).then((response) => {
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
