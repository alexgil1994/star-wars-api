<template>
  <div ref="menu" class="menu">
    <!-- Toggle menu -->
    <div class="toggleMenu text-gray-100 text-xl font-medium" @click="visible = !visible">
      {{ this.name }}
    </div>
    <!-- List -->
    <transition name="fade">
      <div v-if="visible" class="dropdownList block bg-orange-400 text-gray-100 mt-2 text-normal">
        <div v-if="type === 'Films'" class="w-56" style="max-height: 500px; overflow:auto; scrollbar-width: none;">
          <button @click="chooseFilm(item)" v-for="item in list" :key="item.episode_id" class="block py-4 px-4 hover:bg-orange-300 hover:text-white w-full text-left">{{ item.title }}</button>
        </div>
        <div v-else-if="type === 'People'" class="w-56" style="max-height: 500px; overflow:auto; scrollbar-width: none;">
          <button @click="chooseActor(item)" v-for="item in list" :key="item.episode_id" class="block py-4 px-4 hover:bg-orange-300 hover:text-white w-full text-left">{{ item.name }}</button>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
  export default {
    props: {
      type: {
        type: String,
        default: null
      },
      list: {
        type: Array,
        default: null
      },
      name: {
        type: String,
        default: ''
      },
    },
    computed: mapGetters({
      chosenFilm: 'swapi/getChosenFilm',
      chosenActor: 'swapi/getChosenActor'
    }),
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
      },
      chooseFilm(object) {
        this.$store.commit('swapi/setChosenFilm', object)
        if (this.chosenFilm != null) {
          this.$router.push('/')
        }
      },
      chooseActor(object) {
        this.$store.commit('swapi/setChosenActor', object)
        if (this.chosenActor != null) {
          this.$router.push('/people')
        }
      }
    },
    // EventListener used to close menus onClick outside
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
  min-width: 80px;
  position: relative;
  display: inline-block;
  vertical-align: middle;
}

.toggleMenu {
  cursor: pointer;
  min-width: 80px;
}

/* Scrollbar design */
.dropdownList {
  position: absolute;
  top: 100%;
  z-index: 1000;
  min-width: 140px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  text-overflow: ellipsis;
}

::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 20px;
  background: rgba(197, 153, 81, 0.8);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgba(194, 140, 53, 0.9);
} 
</style>