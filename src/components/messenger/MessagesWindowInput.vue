<template>
  <label for="msgInput">
    <input type="text" v-model="message" @keypress.enter="messageSend" id="msgInput" placeholder="Напишите сообщение" />
  </label>
</template>

<script>
export default {
  data() {
    return {
      message: "",
    };
  },
  emits: {
    'message-send': null
  },
  methods: {
    messageSend() {
      this.$emit("message-send", this.message);
      this.message = "";
    },
  },
};
</script>

<style scoped>
input {
  border-top: 3px solid #1c1c1c;
  border-left: none;
  border-right: none;
  border-bottom: none;
  width: 100%;
  background-color: #1c1c1c;
  color: #b4f291;
  height: 50px;
  padding: 10px;
  font-size: 22px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
