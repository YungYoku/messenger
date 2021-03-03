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
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template: 100% / 1fr 6fr;
  background-color: #79DAC2;
  position: relative;
}
</style>
