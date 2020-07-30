import * as type from './types';
import actions from './actions';
import api from '@/api';

const state = {
    card: {}
};

const mutations = {
    [type.GET_CARD](state, payload) {
        state.card = payload;
    },
};

const getters = {
    card: state => {
        return state.card;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};
