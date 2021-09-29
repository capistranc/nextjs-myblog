import {
  Flex,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  chakra,
  Button,
  Link,
  Spacer,
  Textarea,
  Stack,
  FormControl,
  Box,
  useToast,
  HTMLChakraProps,
  FormErrorMessage,
  useColorMode,
} from "@chakra-ui/react";
import { fgColor, bgColor } from "../../theme/colors";
import emailJS from "emailjs-com";

const ContactInfo = (props) => (
  <Box {...props}>
    <Logo />
    <Link href="mailto:contact@westendwebdesigns.com">
      contact@WestEndWebDesigns.com
    </Link>
    <Spacer />
    <Link href="tel:714-932-9998">(949) 735 - 5619</Link>
  </Box>
);

import { Logo } from "..";

import { EmailIcon, PhoneIcon, QuestionIcon } from "@chakra-ui/icons";
import { InLineLabel } from "../Input";
import { useForm } from "react-hook-form";
import React from "react";
import { AlertPop } from "../Popups/AlertPop";

emailJS.init(process.env.EmailJS_ID);

export const ContactForm = (props: HTMLChakraProps<"form">) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isSending, setSending] = React.useState(false);
  const { colorMode } = useColorMode();

  const toast = useToast();
  const onSubmit = async (data) => {
    setSending(true);
    try {
      const result = await emailJS.send(
        "contact_service",
        "contact_form",
        data,
      );

      if (result.status === 200) {
        toast({
          title: "Sent!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: `Failed to send: ${result.text}`,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (e) {
      toast({
        title: `Failed to send: ${e.status}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }

    setSending(false);
  };

  return (
    <chakra.form
      onSubmit={handleSubmit(onSubmit)}
      id="contact-form"
      display="block"
      margin="1rem auto"
      maxWidth="64rem"
      align="center"
      color={fgColor[colorMode]}
      bg={bgColor[colorMode]}
      {...props}
    >
      <Flex
        justify="space-evenly"
        align="center"
        direction={["column", "column", "row", "row"]}
        mb="4em"
      >
        <Heading p="4">Get in touch today!</Heading>

        <ContactInfo p="4" />
      </Flex>
      <Stack direction={["column", "column", "row", "row"]}>
        <FormControl isInvalid={errors.name}>
          <InLineLabel bg={props.bg}> Name </InLineLabel>
          <Input
            borderColor="gray.500"
            variant="outline"
            p="1.25em"
            id="name"
            placeholder="Jackie Chan"
            {...register("name")}
          />
          <Box h="2em">
            <FormErrorMessage d="inline">
              {errors.name && <AlertPop title={errors.name.message} />}
            </FormErrorMessage>
          </Box>
        </FormControl>

        <FormControl isInvalid={errors.company}>
          <InLineLabel bg={props.bg}>Company</InLineLabel>
          <Input
            borderColor="gray.500"
            variant="outline"
            p="1.25em"
            id="name"
            placeholder="West End Designs"
            {...register("company")}
          />
          <Box h="2em">
            <FormErrorMessage d="inline">
              {errors.company && <AlertPop title={errors.company.message} />}
            </FormErrorMessage>
          </Box>
        </FormControl>
      </Stack>

      <Stack direction={["column", "column", "row", "row"]}>
        <FormControl isInvalid={errors.email}>
          <InLineLabel bg={props.bg}>Email</InLineLabel>
          <InputGroup>
            <InputLeftElement children={<EmailIcon color="gray.300" />} />
            <Input
              id="email"
              type="email"
              borderColor="gray.500"
              placeholder="foobar@gmail.com"
              {...register("email", {
                minLength: {
                  value: 4,
                  message: "Minimum length should be 4",
                },
                pattern: {
                  message:
                    "Email must be formatted properly: ie JohnSnow@gmail.com",
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
              })}
            />
          </InputGroup>
          <Box h="2em">
            <FormErrorMessage display="inline">
              {errors.email && (
                <AlertPop height="100%" title={errors.email.message} />
              )}
            </FormErrorMessage>
          </Box>
        </FormControl>

        <FormControl isInvalid={errors.phone}>
          <InLineLabel bg={props.bg}>Phone</InLineLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input
              borderColor="gray.500"
              id="phone"
              type="tel"
              placeholder="+1 (949) 555 - 6192"
              {...register("phone", {
                minLength: {
                  value: 9,
                  message: "Phone Number should be at least 9 digits",
                },
              })}
            />
          </InputGroup>
          <Box h="2em">
            <FormErrorMessage d="inline">
              {errors.phone && errors.phone.message}
            </FormErrorMessage>
          </Box>
        </FormControl>
      </Stack>

      <Flex w="100%">
        <FormControl isInvalid={errors.question} isRequired>
          <InLineLabel bg={props.bg}>
            <QuestionIcon mx="1" />
            Message
          </InLineLabel>

          <Textarea
            p="4"
            borderColor="gray.500"
            minHeight="12rem"
            type="question"
            overflowY="scroll"
            placeholder={`I want to do the cha cha, come with me and let us do the cha cha. Maybe after we can do something else, maybe not. But for sure let's make time. I think it will be a lot of fun.`}
            {...register("question", {
              required: `This field is required`,
              minLength: {
                value: 30,
                message: "Minimum length should be 30",
              },
            })}
          />

          <Box h="2em">
            <FormErrorMessage d="inline">
              {errors.question && (
                <AlertPop display="inline" title={errors.question.message} />
              )}
            </FormErrorMessage>
          </Box>
        </FormControl>
      </Flex>
      <Button
        type="submit"
        width="60%"
        variant="solid"
        isLoading={isSubmitting}
        loadingText="Sending..."
        bg="gray.700"
      >
        Send
      </Button>
    </chakra.form>
  );
};
