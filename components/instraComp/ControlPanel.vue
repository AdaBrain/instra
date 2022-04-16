<template>
  <v-row class="margin-top" justify="space-around">
    <v-btn
    elevation="7" 
    large
    @click="add"
    >Add {{ counter }}</v-btn>
    <v-btn elevation="7" large
    @click="minus"
    >
    Minus</v-btn>
    <v-btn elevation="7" large
    @click="reset"
    >
      Reset
    </v-btn>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "ControlPanel",
  data() {
    return {
      state: this.$store.state,
    }
  },
  computed: {
    counter() {
      return this.state.counter.counter
    }
  },
  methods: {
    ...mapMutations({
      add: 'counter/increment',
      minus: 'counter/decrement',
      reset: 'counter/reset'
    })
  }
};
</script>

<style>
</style>