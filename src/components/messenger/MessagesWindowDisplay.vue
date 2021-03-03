<template>
  <div id="messagesWindowWrap">
    <the-message v-for="message in messages" :key="message.id">
      {{ message.msgs }}
    </the-message>
  </div>
</template>

<script>
import TheMessage from "./TheMessage.vue";
import {useStore} from 'vuex'
import {computed} from "vue";

export default {
  setup() {
    const store = useStore()
    let currentTab = computed(() => {
      return store.getters['messenger/currentTab']
    })
    let messages = computed(()=>{
      return store.getters['messenger/messages'][0].msgs[0]
    })


    return {
      messages,
      //currentTab
    }
  },
  components: {
    TheMessage,
  }
};
</script>

<style>
#messagesWindowWrap {
  overflow-x: hidden;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column-reverse;
}
</style>
