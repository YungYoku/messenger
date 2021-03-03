<template>
  <div id="loginRegistration" @keypress.enter="nameSubmit">
    <h3>ВХОД</h3>
    <div id="inputWrap">
      <label for="inputName">
        <input type="text" id="inputName" autocomplete="off" v-model.trim="name" placeholder="Введите Имя">
      </label>
    </div>
    <button id="loginBtn" @click="nameSubmit">ВОЙТИ</button>
  </div>
</template>

<script>
import {ref} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()

    let name = ref('')

    async function messageDeclaration() {
      return await fetch('https://vue-course-work-default-rtdb.firebaseio.com/data.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name
        })
      })
    }

    function nameSubmit() {
      if(name.value!==''){
        messageDeclaration()
        store.commit('messenger/nameDeclaration', name.value)
        name.value=''
      }
    }

    return {
      name,
      nameSubmit
    }
  }

}
</script>

<style scoped>
#loginRegistration {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: #3F6777;
  padding: 40px 20px 20px 20px;
}

#loginRegistration h3 {
  text-align: center;
  font-size: 30px;
  color: white;

}

#inputWrap {
  display: flex;
  align-items: center;
  justify-content: center
}

#loginRegistration input {
  width: 100%;
  height: 60px;
  border: 5px solid #2f5368;
  border-radius: 5px;
  margin-top: 60px;
  padding: 5px 10px;
  font-size: 20px;
  user-select: text;
  text-align: center;
}

#loginBtn {
  border: none;
  border-radius: 30px;
  width: 14%;
  height: 40px;
  margin: 60px 43% 0 43%;
  background-color: white;
  font-size: 20px;
  transition: all 0.2s;
}
#loginBtn:hover {
  transform: scale(1.05);
  transition: all 0.2s;
}
</style>
