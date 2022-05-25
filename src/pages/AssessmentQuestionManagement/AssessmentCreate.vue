<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Add Question</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="addAssessmentQuestion">
          <div class="form-group">
            <label>Competency type</label>
            <select class="form-control" v-model="data.competency_id" required>
              <option>Choose Province</option>
              <option
                v-for="(option, key) in competencies"
                :key="key"
                v-bind:value="option.id"
              >
                {{ option.competency_title }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Question Title</label>
            <input
              type="text"
              class="form-control"
              v-model="data.question_text"
            />
          </div>
          <div class="form-group">
            <label>Question Response Type</label>
            <select class="form-control" v-model="data.response_type" required>
              <!-- @change="changeLocation" -->
              <option>Choose Province</option>
              <option
                v-for="(option, key) in options"
                :key="key"
                v-bind:value="key"
              >
                {{ option }}
              </option>
            </select>
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
      competencies: this.competencies,
      options: {
        1: "Textual",
        2: "Rating",
      },
      com: {},
    };
  },
  mounted: function () {
      debugger
     axios
        .get("http://127.0.0.1:8000/api/competency")
        .then((response) => {
          this.competencies = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
  },
  methods: {
    addAssessmentQuestion() {
      debugger
      this.com["assessment_question"] = this.data;
      this.com["assessment_question"]['org_id'] = 1;
      axios
        .post("http://localhost:8000/api/assessment/question", this.com)
        .then((response) => this.$router.push({ name: "Assessment Questions Management" }))
        .catch((err) => console.log(err))
        .finally(() => (this.loadin = false));
    },
  },
};
</script>