<template>
  <v-row class="margin-top" justify="space-around">
    <v-btn elevation="7" large>Follow {{ counter }}</v-btn>
    <v-btn elevation="7" large>Message</v-btn>
    <v-btn elevation="7" large>
      <v-icon>mdi-chevron-down</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
import { useCounterStore } from "../../store/counter"

export default {
  name: "ControlPanel",
  setup() {
    const...
  },
};
</script>

<style>
</style>