import './styles/App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Todos from './components/Todos'
import { Container, Grid, GridItem, Heading, Wrap, Text, VStack, Box, Flex } from '@chakra-ui/layout';
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


const MenuButton = ({text}) => (
    <Box 
        as="button" bg="#cdedfd" alignItems='center' justifyItems="center" borderWidth="2px" borderColor="white"
        _hover={{bg:"white", borderColor:"black"}}
        w={40} h={10}
    >
        <Text color="#200a74" _hover={{color: "black"}}>{text}</Text>
    </Box>
)

const NewTodo = () => {

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

    dispatch({
      type: 'NEW_TODO',
      data: newTodo
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

const App = () => {

  const todos = useSelector(state => state.todos)
  

//#51d0d3

  return (
      <Flex bg='#E6E6FA' alignContent="center" justifyContent="center" h="100vh" fontFamily={['Courier New', 'Courier', 'monospace']}>
        <Container>
        <Heading color='#200a74' size='4xl' p={10} textShadow="4px 2px #ffffff">
            Todo
        </Heading>
        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 1fr)"
          columnGap={10}
        >
          <GridItem rowSpan={2} colSpan={1}>
            <VStack
              p={0}
            >
              <MenuButton text="All"/>
              <MenuButton text="Unfinnished"/>
              <MenuButton text="Done"/>
            </VStack>
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
            <NewTodo />
          </GridItem>
          <GridItem rowSpan={1} colSpan={3}>
          {todos.length !== 0 ? <Todos todos={todos}/> : <Text>No todos jet :(</Text>}
          </GridItem>
        </Grid>
        </Container>
      </Flex>
    
  )
}

export default App;