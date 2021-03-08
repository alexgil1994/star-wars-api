export const state = () => ({
  films: [],
  chosenFilm: null,
  people: [],
  chosenActor: null,
  planets: []
})

export const mutations = {
  setFilms (state, data) {
    state.films = data
  },
  setPeople (state, data) {
    state.people = data
  },
  setChosenFilm (state, data) {
    state.chosenFilm = data
  },
  setChosenActor (state, data) {
    state.chosenActor = data
  },
  setPlanets (state, data) {
    state.planets = data
  },
}

export const actions = {
  initFetching ( {commit, dispatch} ) {
    dispatch('fetchFilms')
    dispatch('fetchPeople')
    dispatch('fetchPlanets')
  },
  // Fetching Films
  async fetchFilms ( {commit, dispatch} ) {
    await this.$axios.$get('https://swapi.dev/api/films/')
      .then(result => {
        commit('setFilms', result.results)
      })
      .catch(e => {
        console.log(e);
        dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
      })
  },
  // Fetching People - Actors
  fetchPeople ( {commit, dispatch} ) {
    console.log("fetching people");
    let tempPeopleArray = []
    let promises = []

    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 1 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 2 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 3 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 4 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 5 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 6 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 7 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 8 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 9 }})
    .then(result => {
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))

    Promise.all(promises).then(() => {
      // SetPeople
      commit('setPeople', tempPeopleArray)
    })
  },
  // Fetching planets for download as csv
  fetchPlanets ( {commit, dispatch} ) {
    console.log("fetching planets");
    let tempPlanetsArray = []
    let promises = []

    promises.push(this.$axios.$get('https://swapi.dev/api/planets/', { params: { page: 1 }})
    .then(result => {
      tempPlanetsArray.push.apply(tempPlanetsArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/planets/', { params: { page: 2 }})
    .then(result => {
      tempPlanetsArray.push.apply(tempPlanetsArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/planets/', { params: { page: 3 }})
    .then(result => {
      tempPlanetsArray.push.apply(tempPlanetsArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/planets/', { params: { page: 4 }})
    .then(result => {
      tempPlanetsArray.push.apply(tempPlanetsArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/planets/', { params: { page: 5 }})
    .then(result => {
      tempPlanetsArray.push.apply(tempPlanetsArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/planets/', { params: { page: 6 }})
    .then(result => {
      tempPlanetsArray.push.apply(tempPlanetsArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))

    Promise.all(promises).then(() => {
      // SetPlanets
      commit('setPlanets', tempPlanetsArray)
    })
  },
  // Fetching the film chosen by the user
  async fetchChosenFilm ( {commit, dispatch}, url ) {
    await this.$axios.$get(url)
      .then(result => {
        commit('setChosenFilm', result)
      })
      .catch(e => {
        console.log(e);
        dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
      })
  },
  // Fetching the actor chosen by the user
  async fetchChosenActor ( {commit, dispatch}, url ) {
    await this.$axios.$get(url)
      .then(result => {
        commit('setChosenActor', result)
      })
      .catch(e => {
        console.log(e);
        dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
      })
  },
}

export const getters = {
  getFilms (state) {
    return state.films
  },
  getPeople (state) {
    return state.people
  },
  getChosenFilm (state) {
    return state.chosenFilm
  },
  getChosenActor (state) {
    return state.chosenActor
  },
  getPlanets (state) {
    return state.planets
  }
}