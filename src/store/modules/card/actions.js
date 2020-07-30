import * as type from './types';
import api from '@/api';

const actions = {
    getCard({commit}, payload) {

        return new Promise((resolve, reject) => {
            api.get('5eaffb6c3300005c00c68a8a')
                .then(res => {
                    commit(type.GET_CARD, res.data);
                    resolve(res.data);
                })
                .catch(error => {
                    console.log('Problem', error.message);
                    reject(error);
                });
        })
    }
};

export default actions;
