import axios from 'axios'

const api = 'https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev'
//https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev

const getAllTodos = async () => {
    console.log('here getAllTodos')
    try {
        //console.log('here')
        const request = await axios.get(`${api}`)
        //console.log('data.body', JSON.parse(request.data.body).Items)
        return JSON.parse(request.data.body).Items
    } catch (exception) {
        console.log('Error')
        console.log(exception.meassage)
    }
    return null
}

export default {
    getAllTodos
}