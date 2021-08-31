import './styles/App.css';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initTodosReducer } from './reducers/todoReducer'
//import { NewTodo } from './components/Todo'


import SideMenu from './components/SideMenu'
import MainContainer from './components/MainContainer'

import { Container, Heading, Flex, HStack } from '@chakra-ui/layout';


const App = () => {
  const dispatch = useDispatch()
  console.log('here app')
  useEffect(() => {
    dispatch(initTodosReducer())
  }, [])

  const todos = useSelector(state => state.todos)
  console.log(todos)
  const projects = useSelector(state => state.projects)
  //console.log(projects)

  //#51d0d3 blue backgroundcolor

  return (
    <Flex bg='#E6E6FA' h="1500px" fontFamily={['Courier New', 'Courier', 'monospace']}
      minW='900px' maxW='1000px' marginLeft='auto' marginRight='auto'
      p={0} overflow='auto'
    >
      <Container alignContent='left' ml={0} minW='900px' maxW='1000px' >
        <Heading color='#200a74' size='4xl' p={10} textShadow="4px 2px #ffffff">
          Todo
        </Heading>
        <HStack spacing={10}>
          <SideMenu />
          <MainContainer projects={projects} todos={todos} dispatch={dispatch}/>
        </HStack>
      </Container>
    </Flex>
  )
}

export default App;