import React from "react";
import {
  Flex,
  Stack,
  Box,
  Heading,
  Text,
  Icon,
  Input,
  Avatar,
  FormControl,
  FormLabel,
  Textarea,
  Select,
  Image,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
import { EditIcon, ViewIcon, StarIcon } from "@chakra-ui/icons";
export default function helperNew({resume}) {
  return (
    <Box
      height={"90vh"}
      width={"70vh"}
      margin={"auto"}
      backgroundColor={"white"}
      p={"4"}
    >
      <Box
        display={"flex"}
        flexDirection={"row"}
        p={"2"}
        alignItems={"center"}
        backgroundColor={"#80ccff"}
      >
        <Image
          height={"80px"}
          width={"80px"}
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
            <Text fontSize={"lg"} fontWeight={"bold"} maxWidth={"300px"}> 
              {resume.fName ? resume.fName +" "+ resume.lName :
                "User Name"
              }
            </Text>
            <Text fontSize={"md"} maxWidth={"300px"}>{resume.jobTitle}</Text>
            <Box maxW={"200px"} textTransform={"capitalize"} fontSize={"10px"} >
              {resume.address}
            </Box>
          </Box>
          <Image
            height={"50px"}
            width={"50px"}
            name="aec"
            src="https://www.aec.ac.in/static/media/logo.675b2dd6.png"
            opacity={"0.8"}
            
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
            my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d sdjnsand d
            sdasidsad isad sd asdasdnnsds das sdsdsd sadassd sdasdas
          </Box>
        </Box>
        <Box flex={"1"} ml={"4"} justifyContent={"center"} mr={"1"}>
          <Heading fontSize={"15px"}> Profile</Heading>

          <Box textTransform={"capitalize"} fontSize={"12px"}>
            my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d sdjnsand d
            sdasidsad isad sd asdasdnnsds das dsfdsfdsf df dsfds fdsfds fsd ds
            fdsf dsfdsf
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
            top={'40%'}
            
           
            
          />

          <Box textTransform={"capitalize"} fontSize={"12px"}>
            my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d sdjnsand d
            sdasidsad isad sd asdasdnnsds das sdsdsd sadassd sdasdas
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
            my aname asdasdis dasdsd sdsadms dsa dd a dasd sd a d sdjnsand d
            sdasidsad isad sd asdasdnnsds das sdsdsd sadassd sdasdas
          </Box>
        </Box>

        {/* right side box start */}
      </Flex>
    </Box>
  );
}
