import axios from 'axios'

const api = 'https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev'
//https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev

const getAllTodos = async () => {
    console.log('here getAllTodos')
    try {
        //console.log('here')
        const request = await axios.get(`${api}`)
        console.log('data.body', request.data.body)
        return JSON.parse(request.data.body)
    } catch (exception) {
        console.log('Error')
        console.log(exception.meassage)
    }
    return null
}

const addNewTodo = async (event, dispatch) => {
    const newTodo = {
        title: event.target[0].value,
        info: event.target[1].value,
        status: 'unfinished',
        project: event.target[2].value,
        priority: event.target[3].value
    }
    console.log('todo', newTodo)
    try {
        const response = await axios.post(api, newTodo)
        console.log('response', response)
        dispatch({
            type: 'NEW_TODO',
            data: response.data.body
        })
        return response.data.body
    } catch (exception) {
        console.log('Error')
        console.log(exception.meassage)
    }
    return null
}

export default {
    getAllTodos,
    addNewTodo
}