<template>
  <div v-if="planets" class="text-gray-100 font-medium text-xl ml-4">
    <client-only>
      <download-csv :data="planets" style="cursor: pointer;">
        Planets
      </download-csv>
    </client-only>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({
      planets: 'swapi/getPlanets'
    }),
  }
</script>

<style scoped>

</style>