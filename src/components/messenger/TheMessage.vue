<template>
  <div class="messageWrap">
    <div class="messageWrapWrap">
      <h3>{{name}}</h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()

    const name = computed(()=>{
      return store.getters['messenger/name']
    })

    return {
      name
    }
  },
  props: {
    name
  }
};
</script>

<style scoped>
.messageWrap {

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.messageWrapWrap {
  margin-top: 10px;
  display: inline;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  position: relative;
  min-width: 52px;
  background-color: #5faaaa;
}
.messageWrapWrap h3 {
  position: relative;
  top: 0;
  font-size: 15px;
  color: #e8e8e8;
  font-weight: 400;
}
.messageWrapWrap:not(h3) {
  color: #B6F387;
  font-size: 20px;
  font-weight: 600;
}
</style>
