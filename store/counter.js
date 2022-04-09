import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
    id: 'counter-store',
    state: () => ({
        counter: 0,
    }),
    actions: {},
    getters: {
        counter: state => state.counter
    }
})