import React, { useState } from 'react'

import { VStack, HStack } from '@chakra-ui/layout';

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
  Select,
  InputGroup,
  InputLeftElement,
  ButtonGroup,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text
} from "@chakra-ui/react"

import { SearchIcon } from '@chakra-ui/icons'

import todoService from '../services/todos'
import projectService from '../services/projects'
import Todos from './Todos'

const api = 'https://jwg0kd20kj.execute-api.eu-west-1.amazonaws.com/dev'

const TabButton = ({ project, dispatch }) => {

    const changeProject = (event) => {
        event.preventDefault()
        console.log(event.target.outerText)

        dispatch({
            type: 'SET_PROJECT_TYPE',
            project: event.target.outerText
        })
    }

    return (
      <div>
        <Button
  
          borderRadius="15px"
          color='#200a74'
          bg='#E6E6FA'
          _hover={{
            bg: '#ffffff'
          }}
          _focus={{
            bg: '#cdedfd',
            boxShadow: "0 0 1px 2px rgba(0, 0, 255, 1)",
          }}
          m={3}
          onClick={changeProject}
        >
          {project}
        </Button>
      </div>
    )
}

const NewProject = ({ dispatch }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const addProject = (event) => {
      event.preventDefault()
      console.log(event)
      projectService.addNewProject(event, dispatch)
      onClose()
    }
  
    return (
      <div>
        <Button onClick={onOpen} colorScheme='blackAlpha'>Add new project :)</Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={addProject} id='add_project_form'>
                <FormLabel>Name: </FormLabel>
                <Input placeholder='Type here...' />
              </form>
            </ModalBody>
  
            <ModalFooter>
              <Button variant="outline" mr={3} onClick={onClose}>Close</Button>
              <Button bg="#009f77" type="submit" form='add_project_form'>Add</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    )
}

const NewTodo = ({ dispatch, projects }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    const addTodo = (event) => {
      console.log(event)
      event.preventDefault()
      todoService.addNewTodo(event, dispatch)
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
                <FormLabel>Project</FormLabel>
                <Select placeholder="Select project">
                  {projects.map(p =>
                    <option value={p.name}>{p.name}</option>
                  )}
                </Select>
                <FormLabel>Priority</FormLabel>
                <Select>
                  <option value='Low'>Low</option>
                  <option value='High'>High</option>
                  <option value='Critical'>Critical</option>
                </Select>
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

const MainContainer = ({ dispatch, projects, todos }) => {


    return (
        <VStack
            p={0} align='left'
            minW='700px' maxW='900px'
        >
            <ButtonGroup>
              <NewTodo dispatch={dispatch} projects={projects} />
              <NewProject dispatch={dispatch} />
            </ButtonGroup>
            <form type='submit'>
              <InputGroup>
                <InputLeftElement pointerEvents="none"
                  children={<SearchIcon />}
                />
                <Input placeholder='Search' borderColor='white' borderWidth='2px' />
              </InputGroup>
            </form>
            <Text m={3}>Project:</Text>
            <HStack overflow='scroll' >
              <TabButton project='all' />
              {projects.map(p =>
                <TabButton project={p.name} dispatch={dispatch} key={p.name} />
              )}
            </HStack>
            <Todos dispatch={dispatch}/>
        </VStack>
    )
}

export default MainContainer