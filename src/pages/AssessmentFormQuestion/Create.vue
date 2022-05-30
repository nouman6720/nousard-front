<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Add Question in Feedback Form</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="addAssessmentFormQuestion">
          <div class="form-group">
            <label>Assessment Question</label>
            <select
              class="form-control"
              v-model="data.question_id"
              required
            >
              <option>Choose Province</option>
              <option
                v-for="(option, key) in assessment_question"
                :key="key"
                v-bind:value="option.id"
              >
                {{ option.question_text }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Assessment Form</label>
            <select
              class="form-control"
              v-model="data.form_id"
              required
            >
              <option>Choose Province</option>
              <option
                v-for="(option, key) in assessment_form"
                :key="key"
                v-bind:value="option.id"
              >
                {{ option.form_title }}
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
import axios from "axios";

export default {
  data() {
    return {
      data: {},
      com: {},
      assessment_form: this.assessment_form,
      assessment_question: this.assessment_question,
    };
  },
  mounted: function () {
      axios
        .get("api/assessment/form")
        .then((response) => {
          this.assessment_form = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
        axios
        .get("api/assessment/question")
        .then((response) => {
          this.assessment_question = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
  },
  methods: {
    addAssessmentFormQuestion() {
        debugger
      this.com["assessment_form_question"] = this.data;
      axios
        .post("api/form/question", this.com)
        .then((response) =>
          this.$router.push({ name: "Asseessment Form Question" })
        )
        .catch((err) => console.log(err))
        .finally(() => (this.loadin = false));
    },
    // getForms() {
    //   debugger;
      
    // },
  },
};
</script>