<template>
  <div class="content">
    <div class="row">
      <div class="col-12">
        <div class="float-right">
          <router-link to="assessment_question_create" class="btn btn-success"
            >Add</router-link
          >
        </div>
        <card>
          <template slot="header">
            <h4 class="card-title">Assessment Question</h4>
          </template>
          <div class="table-responsive text-left">
            <base-table
              :data="info"
              :columns="table1.columns"
              thead-classes="text-primary"
            >
            </base-table>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import { Card } from "@/components/index";

import BaseTable from "@/components/BaseTable";
import axios from "axios";

const tableColumns = ["question_text", "Org_id", "response_type"];

export default {
  components: {
    Card,
    BaseTable,
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
    };
  },
  mounted: function () {
    axios
      .get("api/assessment/question")
      .then((response) => {
        this.info = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      });
  },
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal;
    },
  },
};
</script>
<style>
</style>
