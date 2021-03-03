<template>
  <div class="messageWrap">
    <div class="messageWrapWrap">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.messageWrap {
  margin-top: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.messageWrapWrap {
  display: inline;
  border: 3px solid #1c1c1c;
  color: white;
  border-radius: 5px;
  padding: 10px;
}

</style>
