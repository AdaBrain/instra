<template>
  <v-row class="bio">
    <p>
      {{ content }}
    </p>
  </v-row>
</template>

<script>
export default {
  name: "BioProfile",
  props: ["content"],
};
</script>

<style>
.bio {
  margin-top: 3em;
  margin-left: 0.7em;
  font-size: 12px;
}
</style>