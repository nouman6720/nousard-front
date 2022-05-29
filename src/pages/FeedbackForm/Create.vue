<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Add Feedback Form</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="addAssessmentForm">
          <!-- <div class="form-group">
            <label>Competency type</label>
            <select
              class="form-control"
              v-model="data.competency_type"
              required
            >
              <option>Choose Province</option>
              <option
                v-for="(option, key) in competency_options"
                :key="key"
                v-bind:value="key"
              >
                {{ option }}
              </option>
            </select>
          </div> -->
          <div class="form-group">
            <label>Form Title</label>
            <input type="text" class="form-control" v-model="data.form_title" />
          </div>
          <button type="submit" class="btn btn-primary">Create</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import axios from "axios";

Vue.prototype.$http = axios;
export default {
  data() {
    return {
      data: {},
      competency_options: {
        1: "Behavioral Competency",
        2: "Technical",
        3: "Sub-technical",
        4: "Organizational",
      },
      com: {},
      info: this.info,
    };
  },
  methods: {
    addAssessmentForm() {
      this.com["assessment_form"] = this.data;
      this.com["assessment_form"]["org_id"] = 1;
      axios
        .post("api/assessment/form", this.com)
        .then((response) =>
          this.$router.push({ name: "Default Feedback Form" })
        )
        .catch((err) => console.log(err))
        .finally(() => (this.loadin = false));
    },
    // getForms() {
    //   debugger;
    //   axios
    //     .get("api/assessment/form")
    //     .then((response) => {
    //       this.info = response.data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       this.errored = true;
    //     });
    // },
  },
};
</script>