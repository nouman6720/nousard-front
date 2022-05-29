<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Add New Company</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="addCompany">
          <div class="form-group">
            <label>Company Title</label>
            <input
              type="text"
              class="form-control"
              v-model="data.name"
            />
          </div>
          <div class="form-group">
            <label>Website</label>
            <input
              type="text"
              class="form-control"
              v-model="data.website"
            />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              v-model="data.phone1"
            />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              type="text"
              class="form-control"
              v-model="data.address1"
            />
          </div>
          <div class="form-group">
            <label>City</label>
            <input
              type="text"
              class="form-control"
              v-model="data.city"
            />
          </div>
          <div class="form-group">
            <label>Country</label>
            <input
              type="text"
              class="form-control"
              v-model="data.country"
            />
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
    };
  },
  methods: {
    addCompany() {
      debugger;
      this.com["org"] = this.data;
      axios
        .post("api/organization", this.com)
        .then((response) =>
          this.$router.push({ name: "Company Managment" })
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