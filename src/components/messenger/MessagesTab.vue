<template>
  <div class="wrap">
    <div id="tabsWrap__ava"></div>
    <h3>Chat</h3>
  </div>
</template>

<script>

export default {}
</script>

<style scoped>
.wrap {
  border-bottom: 3px solid #1c1c1c;
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.wrap:hover {
  background-color: #1c1c1c;
}

.wrap h3 {
  color: white;
}

#tabsWrap__ava {
  min-width: 30px;
  min-height: 30px;
  background-color: white;
  border-radius: 50%;
  margin-right: 10px;
}

@media (max-width: 700px) {
  .wrap h3 {
    display: none;
  }
}
</style>
