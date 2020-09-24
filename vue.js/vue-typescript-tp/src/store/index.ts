import Vue from "vue";
import Vuex from "vuex";
import {ShowI} from "@/types/ShowI";
import ShowsService from "@/services/ShowsService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    shows: [] as ShowI[],
    isLoading: false,
  },
  mutations: {
    fetchShowsStart(state) {
      state.isLoading = true;
    },
    fetchShowsSucess(state, shows) {
      state.shows = shows;
      state.isLoading = false;
    },
  },
  actions: {
    async fetchShowById(context, showId) {
      context.commit('fetchShowsStart');
      const shows = await ShowsService.findShowById(showId);
      context.commit('fetchShowsSucess', shows);
    },
    async fetchShows(context) {
      context.commit('fetchShowsStart');
      const shows = await ShowsService.getAll();
      context.commit('fetchShowsSucess', shows);
    },
    async setFavorite(context, {showId, isFavorite, findById} : { showId: number, isFavorite: boolean, findById: boolean}): Promise<void> {
      await ShowsService.setFavoriteForShow(showId, isFavorite);
      if(findById) {
        await context.dispatch("fetchShowById", showId);
      } else {
        await context.dispatch("fetchShows");
      }
    }
  },
  getters: {
    getShowById(state){
      return (id: number): ShowI | undefined => {
        return state.shows.find(show => {
          return show.id === id;
        })
      }
    },
    getShowsFavorite(state){
      return state.shows.filter(show => {
        return show.isFavorite
      });
    }
  },
  modules: {}
});
