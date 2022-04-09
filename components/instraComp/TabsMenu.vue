<template>
  <v-row class="margin-top">
    <v-tabs grow>
      <v-tab>
        <v-icon>mdi-grid</v-icon>
        {{ counter }}
      </v-tab>
      <v-tab>
        <v-icon> mdi-tag-heart-outline </v-icon>
      </v-tab>
    </v-tabs>
  </v-row>
</template>

<script>
export default {
  name: "TabsMenu",
  computed: {
    counter() {
      return this.$store.state.counter.counter;
    },
  },
};
</script>

<style>
</style>