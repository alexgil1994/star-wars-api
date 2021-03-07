<template>
  <div>
    <nav>
      <div class="w-full h-16 bg-orange-400 flex justify-between items-center shadow-md">
        <div class="flex">
          <div class="ml-4">
            <SelectMenu name="Films"/>
          </div>
          <div class="ml-4">
            <SelectMenu name="People"/>
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
  export default {
    
  }
</script>

<style scoped>

</style>