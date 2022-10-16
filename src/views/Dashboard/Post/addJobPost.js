// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link,
  Select,
  Text,
  Textarea,
  useColorModeValue,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

// Assets
import BgSignUp from "assets/img/BgSignUp.png";
import React from "react";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

function AddJobPost() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.700", "white");
  const bgColor = useColorModeValue("white", "gray.700");
  return (
    <Flex
      direction='column'
      alignSelf='center'
      justifySelf='center'
      overflow='hidden'>
      <Flex
        direction='column'
        textAlign='center'
        justifyContent='center'
        align='center'
        mt='6.5rem'
        mb='30px'>
      </Flex>
      <Flex alignItems='center' justifyContent='center' mb='60px' mt='20px'>
        <Flex
          direction='column'
          w='845px'
          background='transparent'
          borderRadius='15px'
          p='40px'
          mx={{ base: "100px" }}
          bg={bgColor}
          boxShadow='0 20px 27px 0 rgb(0 0 0 / 5%)'>

          <FormControl>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
            Job Description
            </FormLabel>
            <Textarea
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              placeholder='Enter Job Description'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Experience Type
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              placeholder='Select Experience Type'>
              <option value='option1'>0-2 Year</option>
              <option value='option1'>2-5 Year</option>
              <option value='option1'>5+ Year</option>
            </Select>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Opening Position
            </FormLabel>
            <Input
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              type='text'
              placeholder='Enter Opening Position'
              mb='24px'
              size='lg'
            />
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
             Number of Vacancy
            </FormLabel>
            <NumberInput
              defaultValue={1} min={1} max={1000}
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>

            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Qualification Required
            </FormLabel>
            <Select
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              mb='24px'
              size='lg'
              placeholder='Select Qualification'>
              <option value='option1'>10th</option>
              <option value='option1'>12th</option>
              <option value='option1'>ITI</option>
              <option value='option2'>Diploma</option>
              <option value='option3'>Under Graduate</option>
              <option value='option3'>Post Graduate</option>
            </Select>
            <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
              Other Details
            </FormLabel>
            <Textarea
              fontSize='sm'
              ms='4px'
              borderRadius='15px'
              placeholder='Enter Job Description'
              mb='24px'
              size='lg'
            />
            <Button
              type='submit'
              bg='teal.300'
              fontSize='15px'
              color='white'
              fontWeight='bold'
              w='100%'
              h='45'
              mb='24px'
              _hover={{
                bg: "teal.200",
              }}
              _active={{
                bg: "teal.400",
              }}>
              Add Post
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default AddJobPost;
