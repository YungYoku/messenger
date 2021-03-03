<template>
  <div id="wrap">
    <messages-window-display
      ref="messagesDisplay"
      :messages="Number(messagesAmount)"
    ></messages-window-display>
    <messages-window-input @messageSend="messageAdd"></messages-window-input>
  </div>
</template>

<script>
import MessagesWindowDisplay from "./MessagesWindowDisplay.vue";
import MessagesWindowInput from "./MessagesWindowInput.vue";

import {ref, onMounted} from 'vue'
import {useStore} from 'vuex'
import axios from "axios";

export default {
  setup() {
    const store = useStore()

    let messagesAmount = ref(0)
    let currentMessage = ref('')

    async function messageDeclaration(msg) {
      return await fetch('https://vue-course-work-default-rtdb.firebaseio.com/messages.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: msg,
          name: store.getters['messenger/name']
        })
      })
    }

    const messages = ref([])
    async function msgGetter() {
      try {
        const {data} = await axios.get('https://vue-course-work-default-rtdb.firebaseio.com/messages.json')
        messages.value = await Object.keys(data).map(key => {
          return {
            id: key,
            msgs: data[key].message,
            name: data[key].name
          }
        })

        messages.value = messages.value.reverse()

        store.commit('messenger/messagePush', messages.value)
      } catch (e) {
        console.log(e)
      }
    }

    async function messagePush(message) {
      await messageDeclaration(message)
      await msgGetter()
      store.commit('messenger/messagePush', messages.value)
    }
    onMounted(()=>{
      setInterval(()=>{
        msgGetter()
      }, 1000)
    })

    function messageAdd(message) {
      if(message !== '') {
        messagesAmount++
        messagePush(message)
      }
    }

    return {
      messagesAmount,
      currentMessage,
      messageAdd
    }
  },
  emits: {
    "message-send": null,
  },
  components: { MessagesWindowInput, MessagesWindowDisplay },
};
</script>

<style scoped>
#wrap {
  display: grid;
  overflow: hidden;
  position: relative;
  grid-template: calc(100% - 50px) 50px / 1fr;
}
</style>
