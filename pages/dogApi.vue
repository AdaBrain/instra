<template>
  <div class="dog-api-section">
      <v-row>
          <div class="dog-imgs d-flex" v-for="(img, idx) in dogData" :key="idx">
              <v-img :src="img" max-width="100"></v-img>
          </div> 
      </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "dogApi",
    data: () => ({
        dogData: [],
    }),
    async mounted() {
        try {
            this.dogData = await axios.get("https://dog.ceo/api/breed/pomeranian/images")
            this.dogData = this.dogData.data.message
        }
        catch(err) {
            this.dogData = "Data Not Found"
        }
    }
}
</script>

<style>

</style>