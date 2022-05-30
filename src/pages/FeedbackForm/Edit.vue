<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Update Feedback Form</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="updateAssessmentForm">
          <div class="form-group">
            <label>Form Title</label>
            <input type="text" class="form-control" v-model="data.form_title" />
          </div>
          <button type="submit" class="btn btn-primary">Edit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["data"],
  data() {
    return {
      com: {},
      info: this.info,
    };
  },
  methods: {
    updateAssessmentForm() {
      this.com["assessment_form"] = this.data;
      this.com["assessment_form"]["org_id"] = 1;
      axios
        .patch("api/assessment/form/" + this.data.id, this.com)
        .then((response) =>
          this.$router.push({ name: "Default Feedback Form" })
        )
        .catch((err) => console.log(err))
        .finally(() => (this.loadin = false));
    },
  },
};
</script>