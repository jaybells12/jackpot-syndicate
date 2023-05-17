import {
  Flex,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

export const ContactForm = (props: any) => {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <Flex direction={"column"} {...props}>
      <Flex>
        <FormControl isRequired as={"fieldset"}>
          <FormLabel as={"legend"}>First Name</FormLabel>
          <Input value={first} />
          <FormErrorMessage>{}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired as={"fieldset"}>
          <FormLabel as={"legend"}>Last Name</FormLabel>
          <Input value={last} />
          <FormErrorMessage>{}</FormErrorMessage>
        </FormControl>
      </Flex>
      <Flex>
        <FormControl isRequired as={"fieldset"}>
          <FormLabel as={"legend"}>Email</FormLabel>
          <Input value={email} />
          <FormErrorMessage>{}</FormErrorMessage>
        </FormControl>
        <FormControl isRequired as={"fieldset"}>
          <FormLabel as={"legend"}>Phone Number</FormLabel>
          <Input value={phone} />
          <FormErrorMessage>{}</FormErrorMessage>
        </FormControl>
      </Flex>
      <FormControl isRequired as={"fieldset"}>
        <FormLabel as={"legend"}>Subject</FormLabel>
        <Input value={subject} />
        <FormErrorMessage>{}</FormErrorMessage>
      </FormControl>
      <FormControl isRequired id={"message"} as={"fieldset"}>
        <FormLabel as={"legend"}>Message</FormLabel>
        <Input value={message} />
        <FormErrorMessage>{}</FormErrorMessage>
      </FormControl>
    </Flex>
  );
};
