export const state = () => ({
    counter: 0,
    post: 15
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    decrement(state) {
        if (state.counter > 0) {
            state.counter--
        }        
    },
    reset(state) {
        state.counter = 0
    }
}