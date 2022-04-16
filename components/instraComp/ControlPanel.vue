<template>
  <v-row class="margin-top" justify="space-around">
    <v-btn
    elevation="7" 
    large
    @click="add"
    >Follow {{ counter }}</v-btn>
    <v-btn elevation="7" large>Message</v-btn>
    <v-btn elevation="7" large>
      <v-icon>mdi-chevron-down</v-icon>
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
    })
  }
};
</script>

<style>
</style>