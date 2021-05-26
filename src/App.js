import './styles/App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initTodosReducer } from './reducers/todoReducer'
import { NewTodo } from './components/Todo'
import axios from 'axios'

import Todos from './components/Todos'

import { Container, Grid, GridItem, Heading, Text, VStack, Box, Flex, SimpleGrid } from '@chakra-ui/layout';



const MenuButton = ({text}) => (
    <Box 
        as="button" bg="#cdedfd" alignItems='center' justifyItems="center" borderWidth="2px" borderColor="white"
        _hover={{bg:"white", borderColor:"black"}}
        w={40} h={10}
    >
        <Text color="#200a74" _hover={{color: "black"}}>{text}</Text>
    </Box>
)

const App = () => {
    const dispatch = useDispatch()
    console.log('here app')
    useEffect(() => {
        dispatch(initTodosReducer())
    }, [])

    const todos = useSelector(state => state.todos)


//#51d0d3 blue backgroundcolor

  /*return (
      <Flex bg='#E6E6FA' h="1500px" fontFamily={['Courier New', 'Courier', 'monospace']}
      minW='900px' maxW='1000px'
      >
        <Container alignContent='left' ml={0} >
        <Heading color='#200a74' size='4xl' p={10} textShadow="4px 2px #ffffff">
            Todo
        </Heading>
        <Grid
          templateRows="repeat(4, 1fr)"
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
            <NewTodo dispatch={dispatch}/>
          </GridItem>
          <GridItem rowSpan={3} colSpan={3}>
          {todos.length !== 0 ? <Todos todos={todos}/> : <Text>No todos jet :(</Text>}
          </GridItem>
        </Grid>
        </Container>
      </Flex>
  )*/
  return (
    <Flex bg='#E6E6FA' h="1500px" fontFamily={['Courier New', 'Courier', 'monospace']}
    minW='900px' maxW='1000px'
    >
        <Container alignContent='left' ml={0} >
        <Heading color='#200a74' size='4xl' p={10} textShadow="4px 2px #ffffff">
            Todo
        </Heading>
        <SimpleGrid columns={2} spacing={10}>
            <VStack
                p={0}
            >
                <MenuButton text="All"/>
                <MenuButton text="Unfinished"/>
                <MenuButton text="Done"/>
            </VStack>
            <VStack
                p={0} align='left'
            >
                <NewTodo dispatch={dispatch}/>
                {todos.length !== 0 ? <Todos todos={todos}/> : <Text>No todos jet :(</Text>}
            </VStack>
        </SimpleGrid>
        </Container>
    </Flex>
  )
}

export default App;