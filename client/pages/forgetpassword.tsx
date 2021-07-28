import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React, { useState } from "react";
import SuccessfulModel from "../components/ForgetPassword/SuccessfulModel";
import { useForgetPasswordMutation } from "../generated/graphql";
import { URQLClient } from "../utils/createClient";

const forgetpassword = () => {
  const [, forgetPassword] = useForgetPasswordMutation();
  const [email, setEmail] = useState("");
  const { isOpen, onOpen } = useDisclosure();

  const forgetPasswordSubmitter = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const { data } = await forgetPassword({ email });
    if (data) {
      onOpen();
    }
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <form onSubmit={forgetPasswordSubmitter}>
        <Stack spacing={8} mx={"auto"} w="xl" maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Reset Your Password</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Enter Your Email</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Link color={"blue.400"} href="/authentication/login">
                    Oh!! Remember Your Password?
                  </Link>
                </Stack>
                <SuccessfulModel
                  email={email}
                  isOpen={isOpen}
                  onOpen={onOpen}
                />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Flex>
  );
};

export default withUrqlClient(URQLClient)(forgetpassword);