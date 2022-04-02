<template>
  <div class="dog-api-section">
      <v-row>
          <div class="dog-imgs d-flex" v-for="(img, idx) in dogData" :key="idx">
              <v-img class="mr-3 mb-6" :src="img" max-width="150"></v-img>
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