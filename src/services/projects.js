const colors = [
    'white',
    'yellow',
    'blue',
    'red',
    'green',
    'black',
    'orange'
]

let colorID = 0


const addNewProject = async (event, dispatch) => {
    const newProject = {
        name: event.target[0].value,
        color: colors[colorID % colors.length]
    }
    console.log('new project', newProject)
    try {
        dispatch({
            type: 'NEW_PROJECT',
            data: newProject
        })
        colorID++
        return newProject
    } catch (exception) {
        console.log('Error')
        console.log(exception.meassage)
    }
    return null
}

export default {
    addNewProject
}