

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_TODOS':
            return state
        case 'NEW_TODO':
            return state.concat(action.data)
        default:
            return state
    }
}

export default todoReducer