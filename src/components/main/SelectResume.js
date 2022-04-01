import React from "react";
import Layout from "../Layout/Index";
import {useNavigate} from 'react-router-dom'
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
  Grid,
  GridItem,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Helper from "../../components/Helper/helperNew";

export default function SelectResume() { 
  const navigate = useNavigate() ; 
  return (
    <>
      <Layout />
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading mt={"5"} color="gray.400" fontSize={"20px"}>
          Create Your own Resume Here
        </Heading>
        <Box minW={{ base: "90%", md: "720px" }} 
        
        >
          <Box
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
            
          >
            <Flex flexDirection={["column", "column", "row", "row"]} justifyContent='center'>
           
              {/* <Box
                height={["50rem", "50rem"]}
                width={["100%", "50%"]}
                mr={"5"}
                p={"2"}
                border={"1px solid #cccccc"}
                boxShadow={"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}
                borderRadius={"10px"}
              >
                   <Button colorScheme='teal' variant='outline' mb={"3"} w={"100%"}>Select</Button>
                <Box bg={"#e6e6e6"}>
               
                  <Heading textAlign={"center"} mb={"3"} color={"#4d4d4d"}>
                    Professional
                  </Heading>
                </Box>

                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  p={"2"}
                  alignItems={"center"}
                  backgroundColor={"#80ccff"}
                >
                  <Image
                    height={["40px", "50px"]}
                    width={["40px", "50px"]}
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                  <Box
                    display={"flex"}
                    flex={"1"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                    color={"#141f1f"}
                  >
                    <Box display={"flex"} flexDirection={"column"} ml={"4"}>
                      <Text
                        fontSize={"md"}
                        fontWeight={"bold"}
                        maxWidth={"300px"}
                      >
                        Hero U
                      </Text>
                      <Text fontSize={"sm"} maxWidth={"300px"}>
                        jobTiitle
                      </Text>
                      <Box
                        maxW={"200px"}
                        textTransform={"capitalize"}
                        fontSize={"10px"}
                      >
                        address dfdsfdsf
                      </Box>
                    </Box>
                    <Image
                      height={"40px"}
                      width={"40px"}
                      name="aec"
                      src="https://www.aec.ac.in/static/media/logo.675b2dd6.png"
                      opacity={"0.8"}
                      marginTop={"10px"}
                    />
                  </Box>
                </Box>
                <Flex flexDirection={"row"} mt={"4"}>
                  <Box width={"30%"} ml={"2"} flexDirection={"column"}>
                    <Heading fontWeight={"500"} fontSize={"13px"}>
                      Department
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"12px"}>
                      my aname sa
                    </Box>
                    <Heading mt={"4"} fontWeight={"500"} fontSize={"13px"}>
                      Skills
                    </Heading>

                    <Box
                      textTransform={"capitalize"}
                      fontSize={"13px"}
                      borderBottom={" 4px solid #0099ff "}
                      mb={"2"}
                    >
                      my aname sa
                    </Box>
                    <Box
                      textTransform={"capitalize"}
                      fontSize={"13px"}
                      borderBottom={" 4px solid #0099ff "}
                      mb={"2"}
                    >
                      my aname sa
                    </Box>
                    <Box
                      textTransform={"capitalize"}
                      fontSize={"13px"}
                      borderBottom={" 4px solid #0099ff "}
                      mb={"2"}
                    >
                      my aname sa
                    </Box>
                    <Box
                      textTransform={"capitalize"}
                      fontSize={"13px"}
                      borderBottom={" 4px solid #0099ff "}
                      mb={"2"}
                    >
                      my aname sa
                    </Box>
                    <Heading mt={"6"} fontWeight={"600"} fontSize={"13px"}>
                      {" "}
                      Hobbies
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"12px"}>
                      my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d
                      sdjnsand d sdasidsad isad sd asdasdnnsds das sdsdsd
                      sadassd sdasdas
                    </Box>
                  </Box>
                  <Box flex={"1"} ml={"4"} justifyContent={"center"} mr={"1"}>
                    <Heading fontSize={"15px"}> Profile</Heading>

                    <Box textTransform={"capitalize"} fontSize={"12px"}>
                      my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d
                      sdjnsand d sdasidsad isad sd asdasdnnsds das dsfdsfdsf df
                      dsfds fdsfds fsd ds fdsf dsfdsf
                    </Box>
                    <Heading mt={"4"} fontSize={"15px"}>
                      {" "}
                      Emp History
                    </Heading>
                    <Image
                      height={"150px"}
                      width={"150px"}
                      name="aec"
                      src="https://www.aec.ac.in/static/media/logo.675b2dd6.png"
                      opacity={"0.2"}
                      position={"absolute"}
                      top={["30%","30%","45%","45%"]}
                    />

                    <Box textTransform={"capitalize"} fontSize={"12px"}>
                      my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d
                      sdjnsand d sdasidsad isad sd asdasdnnsds das sdsdsd
                      sadassd sdasdas
                    </Box>
                    <Heading mt={"4"} fontSize={"15px"}>
                      Education
                    </Heading>

                    <UnorderedList fontSize={"13px"} ml={"4"}>
                      <ListItem>Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>Consectetur adipiscing elit</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>

                    <Heading mt={"4"} fontSize={"15px"}>
                      {" "}
                      References
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"12px"}>
                      my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d
                      sdjnsand d sdasidsad isad sd asdasdnnsds das sdsdsd
                      sadassd sdasdas
                    </Box>
                    
                  </Box>
                  
                  

                  
                </Flex>
                
               
                
                
            </Box> */}
              
              <Box
                height={["50rem", "50rem"]}
                width={["100%", "50%"]}
                mr={"5"}
                p={"2"}
                border={"1px solid #cccccc"}
                boxShadow={"2px 2px 2px 1px rgba(0, 0, 0, 0.2)"}
                borderRadius={"10px"}
              ><Button colorScheme='teal' variant='outline' mb={"3"} w={"100%"} 
               onClick={()=>  navigate('/create/resume')}
              >Select</Button>
                <Box bg={"#e6e6e6"}>
                  <Heading textAlign={"center"} mb={"3"} color={"#4d4d4d"}>
                    Simple
                  </Heading>
                </Box>
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  ml={"4"}
                  alignItems={"center"}
                >
                  <Image
                    height={["40px", "60px"]}
                    width={["40px", "60px"]}
                    name="Christian Nwamba"
                    src="https://bit.ly/code-beast"
                  />
                  <Box
                    display={"flex"}
                    flex={"1"}
                    flexDirection={"row"}
                    justifyContent={"space-between"}
                  >
                    <Box display={"flex"} flexDirection={"column"} ml={"4"}>
                      <Text fontSize={"lg"} fontWeight={"bold"}>
                        resume.lName
                      </Text>
                      <Text fontSize={"md"}>resume.jobTitle</Text>
                    </Box>
                    <Image
                      height={"40px"}
                      width={"40px"}
                      name="aec"
                      src="https://www.aec.ac.in/static/media/logo.675b2dd6.png"
                      opacity={"0.8"}
                    />
                  </Box>
                </Box>
                <Flex flexDirection={"row"} mt={"4"}>
                  <Box flex={"1"} ml={"4"} justifyContent={"center"} mr={"1"}>
                    <Heading fontSize={"15px"}> Profile</Heading>

                    <Box textTransform={"capitalize"} fontSize={"10px"}>
                      profileSummary
                    </Box>
                    <Heading mt={"4"} fontSize={"13px"}>
                      {" "}
                      Emp History
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"11px"}>
                      experiences.map
                      <Box mb={2}>
                        <Text fontWeight={500}>
                          Worked as:{" "}
                          <span style={{ fontWeight: "400" }}>
                            {" "}
                            Exp Jobtitle
                          </span>
                        </Text>
                        <Text fontWeight={500}>
                          Under employer:{" "}
                          <span style={{ fontWeight: "400" }}>
                            {" "}
                            exp.jobEmployer
                          </span>
                        </Text>
                        <Text fontWeight={500}>
                          In the county of:{" "}
                          <span style={{ fontWeight: "400" }}>
                            {" "}
                            exp.jobCountry
                          </span>
                        </Text>
                        <Text fontWeight={500}>
                          In city:{" "}
                          <span style={{ fontWeight: "400" }}> xp.jobCity</span>
                        </Text>
                      </Box>
                    </Box>
                    <Heading mt={"4"} fontSize={"13px"}>
                      Education
                    </Heading>

                    <UnorderedList fontSize={"11px"} ml={"4"}>
                      <ListItem>Lorem ipsum dolor sit amet</ListItem>
                      <ListItem>Consectetur adipiscing elit</ListItem>
                      <ListItem>Integer molestie lorem at massa</ListItem>
                      <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                    </UnorderedList>
                    <Heading mt={"4"} fontSize={"13px"}>
                      {" "}
                      Hobbies
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"11px"}>
                      my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d
                      sdjnsand d sdasidsad isad sd asdasdnnsds das sdsdsd
                      sadassd sdasdas
                    </Box>
                    <Heading mt={"4"} fontSize={"15px"}>
                      {" "}
                      References
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"11px"}>
                      my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d
                      sdjnsand d sdasidsad isad sd asdasdnnsds das sdsdsd
                      sadassd sdasdas
                    </Box>
                  </Box>

                  {/* right side box start */}
                  <Box width={"30%"} ml={"2"} flexDirection={"column"}>
                    <Heading fontSize={"13px"} fontWeight={"500"}>
                      {" "}
                      Details
                    </Heading>
                    <Box textTransform={"capitalize"} fontSize={"10px"}>
                      Address:Guwahti <br />
                      DOB: 25/06/1232 <br />
                      email <br />
                      resume.phone
                    </Box>
                    <Heading mt={"4"} fontWeight={"500"} fontSize={"12px"}>
                      Department
                    </Heading>

                    <Box textTransform={"capitalize"} fontSize={"10px"}>
                      department
                    </Box>
                    <Heading mt={"4"} fontWeight={"500"} fontSize={"12px"}>
                      Skills
                    </Heading>

                    <Box
                      textTransform={"capitalize"}
                      fontSize={"11px"}
                      borderBottom={" 2px solid dimgrey "}
                    >
                      my aname sa
                    </Box>
                    <Box
                      textTransform={"capitalize"}
                      fontSize={"11px"}
                      borderBottom={" 2px solid dimgrey "}
                    >
                      my aname sa
                    </Box>
                    <Box
                      textTransform={"capitalize"}
                      fontSize={"11px"}
                      borderBottom={" 2px solid dimgrey "}
                    >
                      my aname sa
                    </Box>
                    <Box
                      textTransform={"capitalize"}
                      fontSize={"11px"}
                      borderBottom={" 2px solid dimgrey "}
                    >
                      my aname sa
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
