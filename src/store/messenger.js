export default {
  namespaced: true,
  state() {
    return {
      messages: [
        {
          id: "tab1",
          msgs: [],
          name: ''
        }
      ],
      currentTab: 1,
      tabsAmount: 1,
      name: ""
    };
  },
  mutations: {
    messagePush(state, payload) {
      state.messages[state.currentTab - 1].msgs.unshift(payload);
    },
    swapTab(state, payload) {
      state.currentTab = payload;
    },
    newTab(state) {
      state.tabsAmount++;
      state.messages[state.tabsAmount - 1] = {
        id: "tab" + state.tabsAmount,
        msgs: []
      };
    },
    nameDeclaration(state, payload) {
      state.name = payload;
    }
  },
  getters: {
    messages(state) {
      return state.messages;
    },
    currentTab(state) {
      return state.currentTab;
    },
    name(state) {
      return state.name;
    }
  },
  actions: {}
};
