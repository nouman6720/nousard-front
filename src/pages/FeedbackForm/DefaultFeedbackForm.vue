<template>
  <div class="content">
    <div class="col-12">
      <div class="float-right">
        <router-link to="feedback_form_create" class="btn btn-success"
          >Add</router-link
        >
      </div>
      <card>
        <table class="table tablesorter">
          <thead>
            <tr>
              <slot name="columns">
                <th>Form Title</th>
                <th>Org</th>
                <th>User</th>
                <th>Actions</th>
              </slot>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in info" :key="index">
              <td>
                {{ item.form_title }}
              </td>
              <td>
                {{ item.org_id }}
              </td>
              <td>
                {{ item.user_id }}
              </td>
              <td>
                <button
                  class="btn btn-danger"
                  @click="deleteFeedbackForm(item.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>

                <router-link
                  :to="{
                    path: '/feedback_form_edit/',
                    name: 'Feedback Form Edit',
                    params: { data: item },
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
    // Card
  },
  data() {
    return {
      info: this.info,
      isShowModal: false,
    };
  },
  mounted: function () {
    axios
      .get("api/assessment/form")
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {
    deleteFeedbackForm(id) {
      axios.delete("api/assessment/form/" + id).then((response) => {
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
