import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import todoReducer from './reducers/todoReducer'
import projectReducer from './reducers/projectsReducer'
import projectTypeReducer from './reducers/projectTypeReducer'

const reducer = combineReducers({
    todos: todoReducer,
    projects: projectReducer,
    projectType: projectTypeReducer
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store