import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { Heading, Text, Box } from '@chakra-ui/layout';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Textarea,
    FormLabel,
} from "@chakra-ui/react"

const api = 'https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev'



 export const NewTodo = () => {

    const dispatch = useDispatch()

    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  

    const addTodo = (event) => {
    event.preventDefault()
    console.log('clicked')
    console.log(event)
    console.log(event.target[0].value)
    const newTodo = {
        title: event.target[0].value,
        info: event.target[1].value,
        status: 'unfinished'
    }

    axios.post(api, newTodo)
        .then((response) => {
            console.log(response.data.body)
            //body = response.data.body
            dispatch({
                type: 'NEW_TODO',
                data: response.data.body
            })
        })
        .catch((error) => {
            console.log(error)
        })

    
        onClose()
    }
    
    return (
        <div>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            Add new Todo :)
        </Button>
        <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Add new task</DrawerHeader>
                <DrawerBody>
                    <form onSubmit={addTodo} id='add_todo_form'>
                        <FormLabel>Title:</FormLabel>
                        <Input placeholder="Type here..." />
                        <FormLabel>Info:</FormLabel>
                        <Textarea></Textarea>
                    </form>
                </DrawerBody>
                <DrawerFooter>
                    <Button variant="outline" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button bg="#009f77" type="submit" form='add_todo_form'>Save</Button>
            </DrawerFooter>
        </DrawerContent>
            </Drawer>
        </div>
    )
}

const TodoText = ({text}) => (
    <Text color="#200a74" mt={3}>
        {text}
    </Text>
)


const Todo = ({ todo }) => {
    return (
        <Box 
            bg="#fb8793" borderWidth="3px" borderColor="#fcd4e1"
            _hover={{bg:"#fcd4e1", borderColor:"#fb8793"}}
            p={2}
        >
            <Heading color="#200a74" >{todo.title}</Heading>
            <TodoText text={todo.info} />
            <TodoText text={todo.status} />
        </Box>
    )
}

export default Todo