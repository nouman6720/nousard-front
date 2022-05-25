<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <div class="float-right">
        <router-link to="asseessment_question_create" class="btn btn-success"
          >Add</router-link
        >
        <!-- <button type="button" class="btn btn-danger btn-floating">
          <i class="fas fa-magic"></i>
        </button> -->
                <!-- <button class="btn" @click="toggleModal"><i class="fa fa-eye"></i></button>

        <create-assessment v-if="isShowModal" @close="toggleModal" /> -->
        </div>
        <card>
          <template slot="header">
            <h4 class="card-title">Assesmnt Question</h4>
          </template>
          <div class="table-responsive text-left">
            <base-table :data="info"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>

    </div>
  </div>
</template>
<script>


import {
  Card
} from "@/components/index";

import BaseTable from "@/components/BaseTable";
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$http = axios;


const tableColumns = ["question_text", "Org_id", "response_type"];

export default{
  components:{
    Card,
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Orginataion",
        columns: [...tableColumns],
        data: this.info
      },
      info : this.info,
      isShowModal: false,
    };
  },
  mounted: function() {
        axios
      .get('http://127.0.0.1:8000/api/assessment/question')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
},
methods: {
    // deleteCompetency(id) {
    //   axios
    //     .delete("http://127.0.0.1:8000/api/competency/" + id)
    //     .then((response) => {
    //       // let i = this.products.map((data) => data.id).indexOf(id);
    //       // this.products.splice(i, 1);
    //       this.info = response.data.data;
    //     });
    // },

    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },

}
</script>
<style>
</style>
