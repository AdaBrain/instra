<template>
  <v-container>
    <header-profile :username="username" />
    <profile-image :src="avatarImg" />
    <bio-profile :content="bio" />
    <control-panel />
    <tabs-menu />
    <dog-image breed="pomeranian" maxWidth="150" />
  </v-container>
</template>

<script>
import BioProfile from '../components/instraComp/BioProfile.vue';
import ControlPanel from '../components/instraComp/ControlPanel.vue';
import DogImage from "../components/instraComp/DogImage.vue";
import HeaderProfile from '../components/instraComp/HeaderProfile.vue';
import ProfileImage from '../components/instraComp/ProfileImage.vue';
import TabsMenu from '../components/instraComp/TabsMenu.vue';

export default {
  name: "IndexPage",
  components: {
    DogImage,
    HeaderProfile,
    ProfileImage,
    BioProfile,
    ControlPanel,
    TabsMenu
  },
  data: () => ({
    username: "AdaDeSions",
    avatarImg: "https://avatars.githubusercontent.com/u/3336816?v=4",
    bio: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.`
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

.margin-top {
  margin-top: 3em;
}
</style>
