<template>
  <div v-if="this.chosenFilm != null" class="flex justify-center">
    <div class="my-20 w-full mx-4 md:mx-0 lg:w-3/4">
          <h1 class="text-3xl">{{ chosenFilm.title }}</h1>
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:col-gap-40">
        <div class="my-16">
          <h2 class="my-2">Directed by {{ chosenFilm.director }}</h2>
          <h2 class="my-2">Producer : {{ chosenFilm.producer }}</h2>
          <h2 class="my-2">Date : {{ chosenFilm.release_date }}</h2>
          <span class="font-medium">Description : </span>
          <h2 class="my-2" v-html="chosenFilm.opening_crawl"></h2>
        </div>
        <div class="my-16">
          <h2 class="my-2 text-2xl">Statistics</h2>
          <h2 class="my-2">Charachters : {{ chosenFilm.characters.length }}</h2>
          <h2 class="my-2">Planets : {{ chosenFilm.planets.length }}</h2>
          <h2 class="my-2">Species : {{ chosenFilm.species.length }}</h2>
          <h2 class="my-2">Starships : {{ chosenFilm.starships.length }}</h2>
          <h2 class="my-2">Vehicles : {{ chosenFilm.vehicles.length }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      chosenFilm: 'swapi/getChosenFilm',
    }),
    
  }
</script>

<style scoped>

</style>