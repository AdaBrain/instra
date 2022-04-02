<template>
  <v-container>
    <header-profile :username="username" />

    <v-row class="profile" justify="space-around">
      <div class="avatar">
        <v-avatar>
          <img
            src="https://avatars.githubusercontent.com/u/3336816?v=4"
            alt="Ada"
          />
        </v-avatar>
      </div>

      <!-- Post Text-box -->
      <div class="text-box">
        <div class="text-center">
          1,992 <br />
          Post
        </div>
      </div>

      <!-- Follower Text-box -->
      <div class="text-box">
        <div class="text-center">
          2.3M <br />
          Followers
        </div>
      </div>

      <!-- Following Text-box -->
      <div class="text-box">
        <div class="text-center">
          1.5M <br />
          Following
        </div>
      </div>
    </v-row>

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

export default {
  name: "IndexPage",
  components: {
    DogImage,
    HeaderProfile,
  },
  data: () => ({
    username: "AdaDeSions",
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
