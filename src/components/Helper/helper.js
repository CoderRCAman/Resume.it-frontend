import React, { useEffect, useRef, useState } from "react";
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
import {
  EditIcon,
  ViewIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@chakra-ui/icons";

export default function Helper({ resume }) {
     return (
    <>
      
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
          ml={"4"}
          alignItems={"center"}
        >
          <Box
            display={"flex"}
            flex={"1"}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection={"column"} ml={"4"}>
              <Text fontSize={"lg"} fontWeight={"bold"}>
                {resume.fName + " " + resume.lName}
              </Text>
              <Text fontSize={"md"}>{resume.jobTitle}</Text>
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
          <Box flex={"1"} ml={"4"} justifyContent={"center"} mr={"1"}>
            <Heading fontSize={"15px"}> Profile</Heading>

            <Box textTransform={"capitalize"} fontSize={"12px"}>
              {resume.profileSummary}
            </Box>
            <Heading mt={"4"} fontSize={"15px"}>
              {" "}
              Experiences
            </Heading>

            <Box textTransform={"capitalize"} fontSize={"12px"}>
              {resume.experiences.map((exp, index) => {
                //need to append to next page??

                return <Box key={index} mb={2}>
                  <Text fontWeight={500}>
                    Worked as:{" "}
                    <span style={{ fontWeight: "400" }}> {exp.jobTitle}</span>
                    {" "} Under employer:{" "}
                    <span style={{ fontWeight: "400" }}>
                      {" "}
                      {exp.jobEmployer}
                    </span> 
                     {" "}In the county of:{" "}
                    <span style={{ fontWeight: "400" }}> {exp.jobCountry}</span>
                   {" "} In city:{" "}
                    <span style={{ fontWeight: "400" }}> {exp.jobCity}</span>
                   {" "} Starting Date:{" "}
                    <span style={{ fontWeight: "400" }}> {exp.startDate}</span> 
                    {" "}Ending Date:{" "}
                    <span style={{ fontWeight: "400" }}> {exp.endDate}</span>
                  </Text>
                
                </Box>;
              })}
            </Box>
            <Box >
              <Heading mt={"4"} fontSize={"15px"}>
                Education
              </Heading>

              <Text fontSize={'13'}>
              {resume.education.edSchool},
                {resume.education.edDegree},
                {resume.education.edYear},
                {resume.education.edCity},
              </Text>
             
            </Box>
            <Box>
              <Heading mt={"4"} fontSize={"15px"}>
                {" "}
                Hobbies
              </Heading>

              <Box textTransform={"capitalize"} fontSize={"12px"}>
                {resume.hobbies}
              </Box>
            </Box>
            <Box>
              <Heading mt={"4"} fontSize={"15px"}>
                {" "}
                References
              </Heading>

              <Box textTransform={"capitalize"} fontSize={"12px"}>
                {resume.refrence}
              </Box>
            </Box>
          </Box>
          {/* right side box start */}
          <Box width={"30%"} ml={"2"} flexDirection={"column"}>
            <Heading fontSize={"13px"} fontWeight={"500"}>
              {" "}
              Details
            </Heading>
            <Box textTransform={"capitalize"} fontSize={"12px"}>
              {resume.address}
              <br />
              DOB: {resume.dob} <br />
              {resume.email} <br />
              {resume.phone}
            </Box>
            <Heading mt={"4"} fontWeight={"500"} fontSize={"13px"}>
              {resume.department}
            </Heading>

            <Box textTransform={"capitalize"} fontSize={"12px"}>
              {resume.specialisation.map((spec, index) => (
                <Text>{spec}</Text>
              ))}
            </Box>
            <Heading mt={"4"} fontWeight={"500"} fontSize={"13px"}>
              Skills
            </Heading>

            <Text fontSize={"13px"}>{resume.skills}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
