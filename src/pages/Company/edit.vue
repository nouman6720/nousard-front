<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Add New Company</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="updateCompany">
          <div class="form-group">
            <label>Company Title</label>
            <input
              type="text"
              class="form-control"
              v-model="each.name"
            />
          </div>
          <div class="form-group">
            <label>Website</label>
            <input
              type="text"
              class="form-control"
              v-model="each.website"
            />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input
              type="text"
              class="form-control"
              v-model="each.phone1"
            />
          </div>
          <div class="form-group">
            <label>Address</label>
            <input
              type="text"
              class="form-control"
              v-model="each.address1"
            />
          </div>
          <div class="form-group">
            <label>City</label>
            <input
              type="text"
              class="form-control"
              v-model="each.city"
            />
          </div>
          <div class="form-group">
            <label>Country</label>
            <input
              type="text"
              class="form-control"
              v-model="each.country"
            />
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
    props: ['each'],
  data() {
    return {
      data: {},
      com: {},
    };
  },
  methods: {
    updateCompany() {
      this.com["org"] = this.each;
      axios
        .patch(`api/organization/` + this.each.id, this.com)
        .then((response) =>
          this.$router.push({ name: "Company Management" })
        )
        .catch((err) => console.log(err))
        .finally(() => (this.loadin = false));
    },
  },
};
</script>