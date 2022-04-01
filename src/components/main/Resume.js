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
import React, { useState,useRef } from "react";
import { DeleteIcon, ViewIcon, AddIcon,DownloadIcon } from "@chakra-ui/icons";
import Helper from "../../components/Helper/helper";
import { generatePdf } from "../Helper/DownloadPDF";
export default function Resume() {
  const [specialisations, setSpecialisations] = useState([]);
  const [resume, setResume] = useState({
    fName: "",
    lName: "",
    jobTitle: "",
    email: "",
    phone: "",
    address: "",
    dob: "",
    profileSummary: "",
    experiences: [],
    skills: "",
    department: "",
    specialisation: [],
    education: {},
    hobbies: "",
    refrence: "",
  });
  const specialisation = {
    "Computer Application": [
      "Web development",
      "Machine Learning",
      "Artificial Intelligence",
      "Android Development",
    ],
    CSE: [
      "Web development",
      "Machine Learning",
      "Artificial Intelligence",
      "Android Development",
    ],
    ETE: [
      "Nano Electronics",
      "Electro Physics",
      "Micro System",
      "Network System",
    ],
    Mechanical: [
      "Fluid Mechanics",
      "Machine Design",
      "Solid Mechanics",
      "Thermal Engineering",
      "Material Engineering and Processing",
    ],
    Civil: [
      "Structural Engineering",
      "Geo Technical Engineering",
      "Marine Engineering",
    ],
  };

  const onChangeHandler = (e) => {
    setResume({ ...resume, [e.target.name]: e.target.value });
  };
 
  const handleExperience = (e) => {
    e.preventDefault();
    const jobTitle = e.target[0].value;
    const jobEmployer = e.target[1].value;
    const jobCity = e.target[2].value;
    const jobCountry = e.target[3].value;
    const startDate = e.target[4].value;
    const endDate = e.target[5].value;
    if (
      jobCity &&
      jobEmployer &&
      jobTitle &&
      jobCountry &&
      startDate 
    ) {
      setResume({
        ...resume,
        experiences: resume.experiences.concat({
          jobTitle,
          jobEmployer,
          jobCity,
          jobCountry,
          startDate,
          endDate,
        }),
      });
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      e.target[3].value = "";
      e.target[5].value = "";
      e.target[4].value = "";
    }
  };

  const handleSpecialisation = (e) => {
    e.preventDefault();
    const enteredSpecialisation = e.target[0].value;
    if (!enteredSpecialisation) return;
    setResume({
      ...resume,
      specialisation: resume.specialisation.concat(enteredSpecialisation),
    });
    e.target[0].value = "";
  };
  const handleEducation = (e) => {
    e.preventDefault();
    console.log(e);
    const edSchool = e.target[0].value;
    const edDegree = e.target[1].value;
    const edYear = e.target[2].value;
    const edCity = e.target[3].value;
    if (edSchool && edDegree && edYear && edCity) {
      setResume({
        ...resume,
        education: {
          edSchool: edSchool,
          edDegree: edDegree,
          edYear: edYear,
          edCity: edCity,
        },
      });
    }
  };
  const deleteExp = (index) => {
    setResume({
      ...resume,
      experiences: resume.experiences.filter((elem, ind) => ind != index),
    });
  };
  const deleteSpec = (index) => {
    setResume({
      ...resume,
      specialisation: resume.specialisation.filter((elem, ind) => ind != index),
    });
  };
  return (
    <Flex height={"100vh"} overflow={["auto","hidden"]} flexDirection={['column','row']} >
      <Box
        display={"flex"}
        flexDirection={"column"}
        flex={"1"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"#006778"}
      >
        <Box alignSelf={"flex-end"} mb={2} textColor={"#fff"} margin={"auto"}>
          <ViewIcon mr={2} />
          Preview
        </Box> 
        <Helper resume={resume}  />

        <Box onClick={()=>generatePdf(resume)} >
        <DownloadIcon color={'#fff'} h={7} w={7} cursor={'pointer'}/>
        </Box> 
       
      </Box> 



      <Box
        height={"100%"}
        overflowY={"auto"}
        display={"flex"}
        flex={"1"}
        alignItem={"center"}
        justifyContent={"center"}
        mt={"5"}
      >
        <Stack
          alignSelf={"flex-start"}
          alignItems={"center"}
          justifyContent={"center"}
          mb={"10"}
        >
          <Heading>RESUME</Heading>
          <Box alignSelf={"flex-start"} display={"flex"} flexDir={"row"}>
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input
                name="fName"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              />
            </FormControl>
            <FormControl ml={"2"}>
              <FormLabel>Last Name</FormLabel>
              <Input
                name="lName"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              />
            </FormControl>
          </Box>
          <Box alignSelf={"flex-start"}>
            <FormControl>
              <FormLabel>Job Title</FormLabel>
              <Input
                name="jobTitle"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
                w={"100%"}
              />
            </FormControl>
          </Box>

          <Box alignSelf={"flex-start"} display={"flex"} flexDir={"row"}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              />
            </FormControl>
            <FormControl ml={"2"}>
              <FormLabel>Phone</FormLabel>
              <Input
                name="phone"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              />
            </FormControl>
          </Box>
          <Box alignSelf={"flex-start"} display={"flex"} flexDir={"row"}>
            <FormControl>
              <FormLabel>Adress</FormLabel>
              <Textarea
                name="address"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              ></Textarea>
            </FormControl>
            <FormControl ml={"2"}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                name="dob"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              />
            </FormControl>
          </Box>

          <Box alignSelf={"flex-start"} w={"100%"}>
            <FormControl>
              <FormLabel>Profile Summary</FormLabel>
              <Text ml={1} color="#0093AB">
                Add some interesting eye catching things about you
              </Text>
              <Textarea
                rows={6}
                borderWidth={2}
                borderColor={"#DFDFDE"}
                name="profileSummary"
                onChange={onChangeHandler}
                placeholder="eg: Hardworking College Student seeking employment. Bringing forth a motivated attitude and a variety of powerful skills."
              ></Textarea>
            </FormControl>
          </Box>
          <Box alignSelf={"flex-start"} display="flex" flexDirection={"column"}>
            <Text fontWeight={"500"}>Experiences </Text>
            {resume.experiences.length > 0 ? (
              resume.experiences.map((exp, index) => (
                <Box
                  backgroundColor={"rgba(0, 103, 120, .6)"}
                  p={2}
                  justifyContent={"space-between"}
                >
                  <Box
                    backgroundColor={"rgba(0, 103, 120, .7)"}
                    p="4"
                    borderRadius={4}
                    display={"flex"}
                    justifyContent="space-between"
                  >
                    <Box>
                      <Text fontWeight={"bold"}>
                        Job Title:{" "}
                        <span style={{ color: "#fff", fontWeight: "normal" }}>
                          {exp.jobTitle}
                        </span>
                      </Text>
                      <Text fontWeight={"bold"}>
                        Job Employer:{" "}
                        <span style={{ color: "#fff", fontWeight: "normal" }}>
                          {exp.jobEmployer}
                        </span>
                      </Text>
                      <Text fontWeight={"bold"}>
                        Job City:{" "}
                        <span style={{ color: "#fff", fontWeight: "normal" }}>
                          {exp.jobCity}
                        </span>
                      </Text>
                      <Text fontWeight={"bold"}>
                        Job Country:{" "}
                        <span style={{ color: "#fff", fontWeight: "normal" }}>
                          {exp.jobCountry}
                        </span>
                      </Text>
                      <Text fontWeight={"bold"}>
                        Starting Date:{" "}
                        <span style={{ color: "#fff", fontWeight: "normal" }}>
                          {exp.startDate}
                        </span>
                      </Text>
                      <Text fontWeight={"bold"}>
                        Ending Date:{" "}
                        <span style={{ color: "#fff", fontWeight: "normal" }}>
                          {exp.endDate}
                        </span>
                      </Text>
                    </Box>
                    <DeleteIcon
                      onClick={() => {
                        deleteExp(index);
                      }}
                      cursor={"pointer"}
                      h="7"
                      w="7"
                    />
                  </Box>
                </Box>
              ))
            ) : (
              <></>
            )}
            <form onSubmit={handleExperience}>
              <Box backgroundColor={"rgba(183, 202, 219, 0.1)"} p={3}>
                <Box display={"flex"}>
                  <FormControl>
                    <FormLabel>Job Title</FormLabel>
                    <Input
                      name="job-title"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                  <FormControl ml={2}>
                    <FormLabel>Employer</FormLabel>
                    <Input
                      name="job-employer"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                </Box>
                <Box display={"flex"}>
                  <FormControl>
                    <FormLabel>City</FormLabel>
                    <Input
                      name="job-city"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                  <FormControl ml={2}>
                    <FormLabel>Country</FormLabel>
                    <Input
                      name="job-country"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                </Box>
                <Box display={"flex"}>
                  <FormControl>
                    <FormLabel>Start Date</FormLabel>
                    <Input
                      name="job-start"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                  <FormControl ml={2}>
                    <FormLabel>End Date</FormLabel>
                    <Input
                      name="job-end"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                </Box>
              </Box>
              <Button type="submit" mt={2} w="100%">
                Add <AddIcon ml={"2"} />
              </Button>
            </form>
          </Box>
          <Box alignSelf={"flex-start"}>
            <FormControl>
              <FormLabel>Skills</FormLabel>
              <Textarea
                name="skills"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
                mb={2}
              ></Textarea>
            </FormControl>
          </Box>
          <Box alignSelf={"flex-start"}>
            <Text fontWeight={"500"}>Select Department</Text>
            <Select
              borderWidth={2}
              borderColor={"#DFDFDE"}
              name="department"
              onChange={(e) => {
                const dept = e.target.value;
                if (dept === "Select") return;
                console.log(dept);
                setSpecialisations(specialisation[dept]);
                onChangeHandler(e);
              }}
            >
              <option size="md">Select</option>
              <option size="md">Computer Application</option>
              <option size="md">CSE</option>
              <option size="md">ETE</option>
              <option size="md">Mechanical</option>
              <option size="md">Civil</option>
            </Select>
          </Box>

          {specialisations.length > 0 && (
            <Box alignSelf={"flex-start"}>
              <Text ml={2} fontWeight={"500"}>
                Select Specialisations
              </Text>
              <Select
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={(e) => {
                  if (e.target.value === "select") return;
                  if (
                    resume.specialisation.find(
                      (elem) => elem === e.target.value
                    )
                  )
                    return;
                  setResume({
                    ...resume,
                    specialisation: resume.specialisation.concat(
                      e.target.value
                    ),
                  });
                }}
              >
                <option size="md">Select</option>
                {specialisations.map((val) => (
                  <option size="md">{val}</option>
                ))}
              </Select>
            </Box>
          )}
          {resume.specialisation.length > 0 ? (
            resume.specialisation.map((exp, index) => (
              <Box
                backgroundColor={"rgba(0, 103, 120, .6)"}
                p={2}
                w={"100%"}
                justifyContent={"space-between"}
              >
                <Box
                  backgroundColor={"rgba(0, 103, 120, .7)"}
                  p="4"
                  borderRadius={4}
                  display={"flex"}
                  justifyContent="space-between"
                >
                  <Box>
                    <Text fontWeight={"bold"}>
                      {" "}
                      <span style={{ color: "#fff", fontWeight: "normal" }}>
                        {exp}
                      </span>
                    </Text>
                  </Box>
                  <DeleteIcon
                    onClick={() => {
                      deleteSpec(index);
                    }}
                    cursor={"pointer"}
                    h="7"
                    w="7"
                  />
                </Box>
              </Box>
            ))
          ) : (
            <></>
          )}

          <Box alignSelf={"flex-start"} display="flex" flexDirection={"column"}>
            <Text color={"#8479E1"} fontWeight={500}>
              If you have more than one specialisation/Not listed above?
            </Text>
            <form onSubmit={handleSpecialisation}>
              <Input
                name="other-spec"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                mb={2}
              />
              <Button type="submit">
                Add <AddIcon ml={2} />
              </Button>
            </form>
          </Box>
          <Box alignSelf={"flex-start"}>
            <Text fontWeight={"500"}>Education Details</Text>
            <form onSubmit={handleEducation}>
              <Box backgroundColor={"rgba(183, 202, 219, 0.1)"} p={3}>
                <Box display={"flex"}>
                  <FormControl>
                    <FormLabel>School</FormLabel>
                    <Input
                      name="ed-school"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                  <FormControl ml={2}>
                    <FormLabel>Degree</FormLabel>
                    <Input
                      name="ed-degree"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                </Box>

                <Box display={"flex"}>
                  <FormControl>
                    <FormLabel>Passing Year</FormLabel>
                    <Input
                      name="ed-passing"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                  <FormControl ml={2}>
                    <FormLabel>City</FormLabel>
                    <Input
                      name="ed-city"
                      borderWidth={2}
                      borderColor={"#DFDFDE"}
                    />
                  </FormControl>
                </Box>
              </Box>
              <Button type="submit" w={"100%"} mt={2}>
                Add
              </Button>
            </form>
          </Box>
          <Box alignSelf={"flex-start"}>
            <FormControl>
              <FormLabel>Hobbies</FormLabel>
              <Textarea
                name="hobbies"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              ></Textarea>
            </FormControl>
          </Box>
          <Box alignSelf={"flex-start"}>
            <FormControl>
              <FormLabel>Refrences</FormLabel>
              <Textarea
                name="refrence"
                borderWidth={2}
                borderColor={"#DFDFDE"}
                onChange={onChangeHandler}
              ></Textarea>
            </FormControl>
          </Box>
        </Stack>
      </Box>
    </Flex>
  );
}
