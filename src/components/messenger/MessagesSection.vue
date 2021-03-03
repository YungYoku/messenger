<template>
  <section>
    <login-registration v-if="lrExistance"></login-registration>
    <messages-tabs></messages-tabs>
    <messages-window></messages-window>
  </section>
</template>

<script>
import MessagesTabs from "./MessagesTabs.vue";
import MessagesWindow from "./MessagesWindow.vue";
import LoginRegistration from "@/components/messenger/LoginRegistration";

import {ref, computed, watch} from 'vue'
import {useStore} from 'vuex'
export default {
  setup() {
    const store = useStore()
    let lrExistance = ref(true)

    let name = computed(()=>{
      return store.getters['messenger/name']
    })

    watch(name, ()=>{
      lrExistance.value = false
    })

    return {
      lrExistance
    }
  },
  components: {LoginRegistration, MessagesTabs, MessagesWindow },
};
</script>

<style scoped>
section {
  border: 3px solid #1c1c1c;
  border-radius: 5px;
  width: 80%;
  height: 700px;
  margin: 54px 10% 0 10%;
  display: grid;
  grid-template: 100% / 1fr 6fr;
  background-color: #3F6777;
  position: relative;
}
</style>
