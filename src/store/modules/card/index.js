import * as type from './types';
import actions from './actions';
import api from '@/api';

const state = {
    cart: {}
};

const mutations = {
    [type.GET_CART](state, payload) {
        state.cart = payload;
    },
};

const getters = {
    cart: state => {
        return state.cart;
    }
};

export default {
    state,
    mutations,
    actions,
    getters,
};
