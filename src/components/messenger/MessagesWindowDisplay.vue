<template>
  <div id="messagesWindowWrap">
    <the-message v-for="message in messages" :key="message.id" :name="message.name">
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
  width: 100%;
  height: 100%;
  padding: 10px 20px 10px 10px;
  position: relative;
  top: 0;
  right: -24px;
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  flex-direction: column-reverse;
}
</style>
