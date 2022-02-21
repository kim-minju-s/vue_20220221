<template>
  <v-app>
    <v-main>

      

      <button @click="state.menu=1">홈</button> <br />
      <button @click="state.menu=2">ckeditor</button>
      <hello-world v-if="state.menu === 1"></hello-world>
      <board-write v-if="state.menu === 2"></board-write>
      
    </v-main>
  </v-app>
</template>

<script>
import { reactive } from '@vue/reactivity'
import HelloWorld from './components/HelloWorld.vue'
import BoardWrite from './components/BoardWrite.vue'

export default {
  name: 'App',

  components: {
    HelloWorld, 
    BoardWrite,
  },

  setup() {

    const state = reactive({
      menu : 1,
    })

    return {
      state,
    }
  }
}
</script>
