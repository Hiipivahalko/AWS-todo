import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

const TodoText = ({text}) => (
    <Text color="#200a74" mt={3}>
        {text}
    </Text>
)


const Todo = ({ todo }) => {
    /*return (
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.info}</p>
            <p>status: {todo.status}</p>
        </div>
    )*/
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