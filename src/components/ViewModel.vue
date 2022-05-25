<template>
  <div class="modal" id="myModal" style="display: block">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Competency</h4>
          <button
            type="button"
            class="close"
            @click="$emit('close')"
            data-dismiss="modal"
          >
            ×
          </button>
        </div>
        <!-- Modal body -->
        <div class="modal-body">
          <div class="form-group">
            <label>Competency Title</label>
          </div>
        <div>
          {{ title }}
          {{item}}
        </div>
            
            <div class="form-group">
            <label>Competency Title</label>
            </div>
            
            <div class="form-group">
            <label>Description</label>
            </div>
            
        </div>
        <!-- Modal footer -->
        <div class="modal-footer">
          <button
            type="button"
            @click="$emit('close')"
            class="btn btn-danger"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewmodel",
  props: {
    item: Array,
    title: String,
    type: String,
    // icon: String,
    //  data:{
    //    type: Array,
    //    default: () => []
    //  },
    //  data:{
    //    type: String,
    //    default: ''
    //  },
    columns:{
       type: Array,
       default: ()=>[]
     }
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
  },
};
</script>