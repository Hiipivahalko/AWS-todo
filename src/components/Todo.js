import React from 'react'

import axios from 'axios'

import { Heading, Text, Box, VStack, HStack } from '@chakra-ui/layout';
import {
    Button,
    Menu,
    MenuButton,
    IconButton,
    MenuItem,
    MenuList,
    AlertDialog,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Select,
    Tag,
    Badge
} from "@chakra-ui/react"

import { DragHandleIcon } from '@chakra-ui/icons'



//const api = 'https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev'

const ConfirmTodo = ({ todo, dispatch, button_color, text, button_text }) => {

    const [isOpen, setIsOpen] = React.useState(false)
    const onClose = () => setIsOpen(false)
    const cancelRef = React.useRef()

    const updateStatus = (event) => {
        event.preventDefault()
        dispatch({
            type: 'UPDATE_TODO_STATUS',
            todo: todo
        })
        onClose()
    }

    return (
        <div>
            <Button bg={button_color} onClick={() => setIsOpen(true)}>
                {button_text}
            </Button>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            {text}
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button bg={button_color} onClick={updateStatus} ml={3}>
                                Confirm
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </div>
    )
}


const TodoText = ({ text, cl }) => (
    <Text color={cl} mt={3}>
        {text}
    </Text>
)

const Todo = ({ todo, dispatch }) => {
    // #51d0d3
    // #fb8793

    const bg_color = todo.status === 'unfinished' ? '#F6D9BB' : 'green.200'
    const bg_color2 = todo.status === 'unfinished' ? 'red.200' : 'green.300'
    const text_color = '#200A74'//todo.status === 'unfinished' ? '#200a74' : '#ffffff'
    let pr_cl = 'black'
    if (todo.priority === 'Low') {
        pr_cl = 'yellow.200'
    } else if (todo.priority === 'High') {
        pr_cl = 'orange.200'
    } else {
        pr_cl = 'red.200'
    }
    //console.log(pr_cl)
    return (
        <Box
            bg={bg_color} borderWidth="3px" borderColor="#fb8793"
            _hover={{ bg: "#fcd4e1", borderColor: "#fb8793" }}
            p={3}
        >   
            <HStack>
                <Tag size='md' variant="solid" bg={bg_color2} color='black'>{todo.status}</Tag>
                <Tag size='md' variant="solid" bg={pr_cl} color='black'>{todo.priority}</Tag>
                <Tag size='md' variant="solid" bg='black' color='white'>{todo.project}</Tag>
            </HStack>
            <HStack >
                <VStack align='left' w='400px'>
                    <Heading color={text_color} >{todo.title}</Heading>
                    <TodoText text={todo.time} cl={text_color} />
                    <TodoText text={todo.info} cl={text_color} />
                </VStack>
                <VStack align='right' justifyItems='right'>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label="Options"
                            icon={<DragHandleIcon />}
                            variant="outline"
                            w="10px"
                            borderColor='orange.300' borderWidth='2px'
                        />
                        <MenuList>
                            <MenuItem>Edit</MenuItem>
                            <MenuItem>Delete</MenuItem>
                        </MenuList>
                    </Menu>
                    {todo.status === 'unfinished' ? 
                        <ConfirmTodo 
                            dispatch={dispatch} todo={todo} button_color='green.200'
                            text='Confirm Todo as done'
                            button_text='Mark as done'
                        /> : 
                        <ConfirmTodo 
                            dispatch={dispatch} todo={todo} button_color='red.200'
                            text='Mark Todo as undone'
                            button_text='Eiku'
                        />
                    }
                </VStack>
            </HStack>

        </Box>
    )
}


export default Todo