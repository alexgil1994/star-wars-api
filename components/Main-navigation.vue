<template>
  <div>
    <nav>
      <div class="w-full h-16 bg-orange-400 flex justify-between items-center shadow-md">
        <nuxt-link class="ml-4" to="/">
          <Logo class="h-16"/>
        </nuxt-link>
        <div class="mr-4">
          <SelectMenu/>
        </div>
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