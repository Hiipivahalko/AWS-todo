import { List, ListItem, VStack } from '@chakra-ui/layout'
import React from 'react'
import Todo from './Todo'

const Todos = ({ todos }) => {
    return (
        <VStack align="stretch" maxH='80vh' spacing="20px" w="500px">
            <List>
                {todos.map(todo =>
                    <ListItem key={todo.title}>
                        <Todo todo={todo} />
                    </ListItem>
                )}
            </List>
        </VStack>
    )
}

export default Todos