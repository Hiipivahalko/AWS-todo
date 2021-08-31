
const init_projects = [
    {name: 'math', color: 'blue'},
    {name: 'cs', color: 'green'},
    {name: 'aws', color: 'pink'},
    {name: 'react', color: 'red'},
    {name: 'clojure', color: 'orange'},
    {name: 'other', color: 'orange'}
]

const projectReducer = (state = init_projects, action) => {
    switch (action.type) {
        case 'INIT_PROJECTS':
            return action.data
        case 'NEW_PROJECT':
            return state.concat(action.data)
        default:
            return state
    }
}

export default projectReducer