<template>
  <div ref="menu" class="menu">
    <!-- Toggle menu -->
    <div class="toggleMenu text-gray-100 text-xl font-medium" @click="visible = !visible">
      {{ this.name }}
    </div>
    <!-- List -->
    <transition name="fade">
      <div v-if="visible" class="dropdownList block bg-orange-400 text-gray-100 mt-2 py-2 px-4 text-normal">
        <div>
          <nuxt-link class="block py-2" to="/">Test 1</nuxt-link>
          <nuxt-link class="block py-2" to="/">Test 2</nuxt-link>
          <nuxt-link class="block py-2" to="/">Test 3</nuxt-link>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    props: {
      films: {
        type: Array,
        default: null
      },
      name: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      documentClick(e){
        let el = this.$refs.menu
        let target = e.target
        if (( el !== target) && !el.contains(target)) {
          this.visible=false
        }
      }
    },
    mounted () {
      document.addEventListener('click', this.documentClick)
    },
    destroyed () {
    // Cleaning up
    document.removeEventListener('click', this.documentClick)
  }
}
</script>

<style scoped>
.menu {
  min-width: 60px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.toggleMenu {
  cursor: pointer;
  min-width: 80px;
}

.dropdownList {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  min-width: 140px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  text-overflow: ellipsis;
}
</style>