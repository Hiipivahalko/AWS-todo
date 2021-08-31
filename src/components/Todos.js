import { List, ListItem, VStack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const Todos = ({ dispatch }) => {
    
    const todos = useSelector(state => state.todos)
    const project_type = useSelector(state => state.projectType)
    console.log('project_type', project_type)
    console.log('todos', todos)

    return (
        <VStack align="stretch" maxH='1200px' spacing={4} w="500px" overflow='auto'>
            <List spacing={3}>
                {todos[project_type].map(todo =>
                    <ListItem key={todo.title}>
                        <Todo todo={todo} dispatch={dispatch}/>
                    </ListItem>
                )}
            </List>
        </VStack>
    )
}

export default Todos