import { Box, VStack, Text } from '@chakra-ui/layout'
import React from 'react'

const MenuButton = ({ text }) => (
    <Box
      as="button" bg="#cdedfd" alignItems='center' justifyItems="center" 
      borderWidth="2px" borderColor="white"
      _hover={{ bg: "white", borderColor: "black" }}
      w={40} h={10}
    >
      <Text color="#200a74" _hover={{ color: "black" }}>{text}</Text>
    </Box>
  )

const SideMenu = () => {

    return (
        <VStack
            p={0}
        >
            <MenuButton text="All" />
            <MenuButton text="Unfinished" />
            <MenuButton text="Done" />
        </VStack>
    )
}

export default SideMenu