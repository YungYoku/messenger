<template>
  <div id="tabsWrap">
    <messages-tab v-for="(tab, i) in tabs" :key="tab" @click="swapTab(i+1)" :style="{
      background: currentTab === i+1 ? '#1c1c1c' : ''
    }"></messages-tab>
    <div id="newMessageTab" @click="newMessageTab"></div>
  </div>
</template>

<script>
import MessagesTab from "./MessagesTab.vue";
import {mapMutations, mapGetters} from 'vuex'

export default {
  components: {
    MessagesTab,
  },
  data() {
    return {
      tabs: ["tab1"],
      tabsAmount: 1
    };
  },
  computed: {
    ...mapGetters('messenger', ['currentTab'])
  },
  methods: {
    ...mapMutations({
      swapTab: 'messenger/swapTab',
      newTab: 'messenger/newTab',
    }),
    newMessageTab() {
      this.tabsAmount++
      this.tabs.push('tab' + this.tabsAmount)
      this.newTab()
    },
  }
};
</script>

<style scoped>
#tabsWrap {
  border-right: 3px solid #1c1c1c;
  overflow: hidden;
  min-width: 150px;
}

#newMessageTab {
  border-bottom: 3px solid #1c1c1c;
  height: 50px;
  padding: 10px;
  position: relative;
  font-size: 20px;
}

#newMessageTab::after {
  content: '+';
  position: absolute;
  font-size: 20px;
  color: white;
  top: 10px;
  left: calc(50% - 10px);
}

#newMessageTab:hover {
  background-color: #1c1c1c;
}

@media (max-width: 700px) {
  #tabsWrap {
    min-width: 75px;
    width: 75px;
  }
}


</style>
