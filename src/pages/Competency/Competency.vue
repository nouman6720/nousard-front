<template>
  <div class="content">
    <div class="col-12">
      <div class="float-right">
        <router-link to="competency_create" class="btn btn-success"
          >Add</router-link
        >
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
                <!-- View is implemented -->

                <!-- <button class="btn" @click="toggleModal(info[index])">
                  <i class="fa fa-eye"></i>
                </button>

                <view-model
                  v-if="isShowModal"
                  @close="toggleModal"
                  :item="item.id"
                /> -->

                <button
                  class="btn btn-danger"
                  @click="deleteCompetency(item.id)"
                >
                  <i class="fa fa-trash"></i>
                </button>
                <router-link
                  :to="{
                    path: '/competency_edit/',
                    name: 'Competency Edit',
                    params: { competency: item },
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
import BaseTable from "@/components/BaseTable";
import axios from "axios";
import Card from "../../components/Cards/Card.vue";
import ViewModel from "../../components/ViewModel.vue";

const tableColumns = [
  "competency_title",
  "description",
  "competency_type",
  "parent_competency",
];

export default {
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
      axios.delete("api/competency/" + id).then((response) => {
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
