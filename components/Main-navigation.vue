<template>
  <div>
    <nav>
      <div class="w-full h-16 bg-orange-400 flex justify-between items-center shadow-md">
        <div class="flex">
          <div class="ml-4">
            <SelectMenu :list="films" name="Films"/>
          </div>
          <div class="ml-4">
            <SelectMenu :list="people" name="People"/>
          </div>
        </div>
        <nuxt-link class="mr-4" to="/">
          <Logo class="h-16"/>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      films: 'swapi/getFilms',
      people: 'swapi/getPeople'
    }),
    mounted () {
      this.$store.dispatch('swapi/initFetching')
    },
  }
</script>

<style scoped>

</style>