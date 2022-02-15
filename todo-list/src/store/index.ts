import Vue from "vue";
import Vuex from "vuex";
import IUserStore from "./modules/userStore";

Vue.use(Vuex);

export interface IRootState {
  userStore: IUserStore;
}

export default new Vuex.Store<IRootState>({});
