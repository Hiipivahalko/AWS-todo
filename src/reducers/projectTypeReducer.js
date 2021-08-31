

const projectTypeReducer = (state = 'all', action) => {
    switch (action.type) {
        case 'SET_PROJECT_TYPE':
            return action.project
        default:
            return state
    }
}

export default projectTypeReducer