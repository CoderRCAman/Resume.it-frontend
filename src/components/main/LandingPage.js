import React from 'react'
import Layout from "../Layout/Index"
import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  Input,
  Avatar,
  FormControl,
  FormLabel,
  Textarea,
  Select,
  Button,
} from "@chakra-ui/react";
import {Link} from 'react-router-dom'

export default function LandingPage() {
  return (
    <>
       <Layout />
       <Flex
      flexDirection="column"
      width="100wh"
      height="90vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        
        <Heading color="gray.400"  fontSize={"20px"}>Create Your own Resume Here</Heading>
        <Box minW={{ base: "90%", md: "468px" }}
        >
         
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
             
              <Link to='/select'>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
              >
                Create Your Resume
              </Button>
              </Link>
            </Stack>
         
        </Box>
      </Stack>
      
    </Flex>

    </>
  )
}
