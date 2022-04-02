<template>
  <div class="dog-api-section">
      <v-row>
          <div class="dog-imgs d-flex" v-for="(img, idx) in dogData" :key="idx">
              <v-img class="mr-3 mb-6" :src="img" max-width="50"></v-img>
          </div> 
      </v-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "DogImage",
    props: ["breed"],
    data: () => ({
        dogData: [],
    }),
    async mounted() {
        try {
            this.dogData = await axios.get(`https://dog.ceo/api/breed/${this.breed}/images`)
            this.dogData = this.dogData.data.message
        }
        catch(err) {
            this.dogData = "No Photo was Uploaded"
        }
    }
}
</script>

<style>

</style>