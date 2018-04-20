import Vue from "vue";
import Vuex from "vuex";

import apis from "../js/api";

import { SET_SETTINGS } from "./mutation-types";
import { GET_SETTINGS } from "./action-types";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // STATE
  state: {
    settings: {
      loaded: false,
      data: {}
    }
  },
  // GETTERS
  getters: {
    // GET SETTINGS
    getSettings(state) {
      return state.settings.data;
    }
  },
  // MUTATIONS
  mutations: {
    // SET WE SETTINGS
    [SET_SETTINGS](state, settings) {
      state.settings.data = settings;
      state.settings.loaded = true;
    }
  },
  // ACTIONS
  actions: {
    // LOAD WE SETTINGS
    [GET_SETTINGS](context, payload) {
      brainpopApis.settings.we(
        function(settings) {
          context.commit(SET_SETTINGS, settings);
          if (payload.onSuccess) {
            payload.onSuccess(settings);
          }
        },
        function(e) {
          if (payload.onFailure) {
            payload.onFailure(e);
          }
        }
      );
    }
  }
});
