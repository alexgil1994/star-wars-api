export const state = () => ({
  films: [],
  chosenFilm: null,
  people: [],
  chosenActor: null,
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
}

export const actions = {
  initFetching ( {commit, dispatch} ) {
    dispatch('fetchFilms')
    dispatch('fetchPeople')
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
  // TODO Couldn't implement with a for loop for some reason. Also tried to use promises array and Promise.all
  fetchPeople ( {commit, dispatch} ) {
    console.log("fetching people");
    let tempPeopleArray = []
    let promises = []

    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 1 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 2 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 3 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 4 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 5 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 6 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 7 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 8 }})
    .then(result => {
      console.log(result);
      tempPeopleArray.push.apply(tempPeopleArray, result.results)
    })
    .catch(e => {
      console.log(e);
      dispatch('notification/enableNotification', { text: 'Something went wrong trying to load the data', color: 'red' }, { root: true})
    }))
    promises.push(this.$axios.$get('https://swapi.dev/api/people/', { params: { page: 9 }})
    .then(result => {
      console.log(result);
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
  }
}