<template>
  <div v-if="this.chosenActor != null" class="flex justify-center">
    <div class="my-20 w-full mx-4 md:mx-0 lg:w-3/4">
          <h1 class="text-3xl">{{ chosenActor.name }}</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:col-gap-40">
        <div class="my-16">
          <h2 class="my-2">Gender : {{ chosenActor.gender }}</h2>
          <h2 class="my-2">Born : {{ chosenActor.birth_year }}</h2>
          <h2 class="my-2">Height : {{ chosenActor.height }}</h2>
          <h2 class="my-2">Mass : {{ chosenActor.mass }}</h2>
          <h2 class="my-2">Color of eyes : {{ chosenActor.eye_color }}</h2>
          <h2 class="my-2">Color of hair : {{ chosenActor.hair_color }}</h2>
          <h2 class="my-2">Color of skin : {{ chosenActor.skin_color }}</h2>
        </div>
        <div class="my-16">
          <h2 class="my-2 text-2xl">Statistics</h2>
          <h2 class="my-2">Films played : {{ chosenActor.films.length }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      chosenActor: 'swapi/getChosenActor',
    }),
    
  }
</script>

<style scoped>