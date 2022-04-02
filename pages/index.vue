<template>
  <v-container>
    <header-profile :username="username" />
    <profile-image :src="avatarImg" />
      
    <v-row class="bio">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </v-row>

    <v-row class="margin-top" justify="space-around">
      <v-btn elevation="7" large>Follow</v-btn>
      <v-btn elevation="7" large>Message</v-btn>
      <v-btn elevation="7" large>
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </v-row>
    <v-row class="margin-top">
      <v-tabs grow>
        <v-tab>
          <v-icon>mdi-grid</v-icon>
        </v-tab>
        <v-tab>
          <v-icon> mdi-tag-heart-outline </v-icon>
        </v-tab>
      </v-tabs>
    </v-row>

    <dog-image breed="pomeranian" maxWidth="150" />

  </v-container>
</template>

<script>
import DogImage from "../components/instraComp/DogImage.vue";
import HeaderProfile from '../components/instraComp/HeaderProfile.vue';
import ProfileImage from '../components/instraComp/ProfileImage.vue';

export default {
  name: "IndexPage",
  components: {
    DogImage,
    HeaderProfile,
    ProfileImage
  },
  data: () => ({
    username: "AdaDeSions",
    avatarImg: "https://avatars.githubusercontent.com/u/3336816?v=4",
  })
};
</script>

<style scoped>
.border {
  border: 1px solid #fff;
}

.profile {
  margin-top: 3em;
}

.bio {
  margin-top: 3em;
  margin-left: 0.7em;
  font-size: 12px;
}

.margin-top {
  margin-top: 3em;
}
</style>
