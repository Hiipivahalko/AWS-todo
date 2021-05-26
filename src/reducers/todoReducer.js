import todosService from '../services/todos'

const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'INIT_TODOS':
            return action.data
        case 'NEW_TODO':
            return state.concat(action.data)
        default:
            return state
    }
}

export const initTodosReducer = () => {
    return async dispatch => {
        const todos = await todosService.getAllTodos()
        //console.log('todos',todos)
        dispatch({
            type: 'INIT_TODOS',
            data: todos
        })
    }
}

export default todoReducer