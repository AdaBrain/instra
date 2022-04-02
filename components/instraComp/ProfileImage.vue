<template>
  <v-row class="profile" justify="space-around">
    <div class="avatar">
      <v-avatar>
        <img :src="src" alt="Avatar" />
      </v-avatar>
    </div>
    
    <!-- Info Text-box -->
    <div class="text-box" v-for="(item, idx) in info" :key="idx">
      <div class="text-center">
        {{ item.val }} <br />
        {{ item.key }}
      </div>
    </div>

  </v-row>
</template>

<script>
export default {
  props: ["src"],
  data: () => ({
      info: [
          {key: "Post", val: "1,992"},
          {key: "Followers", val: "2.3 M"},
          {key: "Following", val: "1.5 M"},
      ]
  })
};
</script>

<style>
</style>