<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <h1>HI! this is the Log in Page</h1>
      </div>
      <div class="col-md-12">
        <router-link :to="{ name: 'dashboard' }">
          <button>Log In</button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
div {
  text-align: center;
}

div {
  margin-top: 20px;
  h1 {
    color: aqua;
  }
}

button {
  color: #fff;
  background: aqua;
  border: 0px;
  padding: 20px 40px;
  border-radius: 10px;
  font-size: 22px;
  cursor: pointer;
}

button:focus {
  border: 0px !important;
  // background: blueviolet;
}
</style>
