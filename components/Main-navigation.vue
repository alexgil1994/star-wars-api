<template>
  <div>
    <nav>
      <div class="w-full h-16 bg-orange-400 flex justify-between items-center shadow-md">
        <div class="flex">
          <div class="ml-4">
            <SelectMenu type="Films" :list="films" name="Films"/>
          </div>
          <div class="ml-4">
            <SelectMenu type="People" :list="people" name="People"/>
          </div>
          <div class="ml-4">
            <DownloadButton/>
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
import DownloadButton from './DownloadButton.vue'
  export default {
  components: { DownloadButton },
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