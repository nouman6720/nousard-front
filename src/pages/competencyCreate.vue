<template>
  <div class="content">
    <h3 class="text-center" style="color: black">Add Competency</h3>
    <div class="row" style="margin-left: 30%; color: black">
      <div class="col-md-6">
        <form @submit.prevent="addCompetency">
          <div class="form-group">
            <label>Competency type</label>
            <select
              class="form-control"
              @change="onChange(competency.competency_type)"
              v-model="competency.competency_type"
              required
            >
              <!-- @change="changeLocation" -->
              <option>Competency Types</option>
              <option
                v-for="(option, key) in options"
                :key="key"
                v-bind:value="key"
              >
                {{ option }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Competency Title</label>
            <input
              type="text"
              class="form-control"
              v-model="competency.competency_title"
            />
          </div>
          <div class="form-group" v-if="isShowSubTechnical">
            <label>Parent Technical Competencies</label>
            <select
              class="form-control"
              v-model="competency.parent_competency"
              required
            >
              <option>Parent Competency</option>
              <option
                v-for="(option, key) in info"
                :key="key"
                v-bind:value="option.id"
              >
                {{ option.competency_title }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>Description</label>
            <input
              type="text"
              class="form-control"
              v-model="competency.description"
            />
          </div>
          {{item}}
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
  props: {
    item:{
       type: Object,
       default: {}
     },
  },
  // props: ['item'],
  data() {
    return {
      competency: {},
      options: {
        1: "Behavioral Competency",
        2: "Technical",
        3: "Sub-technical",
        4: "Organizational",
      },
      com: {},
      isShowSubTechnical: false,
      info: this.info,
      id: 2
    };
  },
  methods: {
    addCompetency() {
      this.com["competency"] = this.competency;
      axios
        .post("http://localhost:8000/api/competency", this.com)
        .then((response) => this.$router.push({ name: "Competency" }))
        .catch((err) => console.log(err))
        .finally(() => (this.loadin = false));
    },
    onChange(type) {
      debugger;
      if (type == 3) {
        this.isShowSubTechnical = true;
        axios
          .get("http://127.0.0.1:8000/api/competency/sub_technical/" + this.id)
          .then((response) => {
            this.info = response.data;
          })
          .catch((error) => {
            console.log(error);
            this.errored = true;
          });
      } else {
        this.isShowSubTechnical = false;
      }
    },
  },
};
</script>