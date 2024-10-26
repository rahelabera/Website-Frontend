import React from "react";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Text,
  Icon,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaMobileAlt,
  FaPhone,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

// Define the validation schema using Zod
const schema = z.object({
  name: z.string().min(1, { message: "contact.formError1" }),
  email: z.string().email({ message: "contact.formError2" }),
  message: z.string().min(1, { message: "contact.formError3" }),
});

type FormData = z.infer<typeof schema>;

const ContactUs: React.FC = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      await axios.post("http://192.168.1.44:8000/api/contact/submit/", data);
      // await axios.post("http://192.168.137.226:8000/api/contact/submit/", data);
      toast({
        title: t("contact.toastSuccessTitle"),
        description: t("contact.toastSuccessMessage"),
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      reset(); // Reset the form to default values after successful submission
    } catch (error) {
      console.error(error);
      toast({
        title: t("contact.toastErrorTitle"),
        description: t("contact.toastErrorMessage"),
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  const onError = () => {
    toast({
      title: t("contact.toastErrorTitle"),
      description: t("contact.toastErrorMessage"),
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box p={5} mt={150} maxW="5xl" mx="auto">
      <Box
        p={10}
        boxShadow="lg"
        borderRadius="md"
        bg="white"
        border="1px solid #ccc"
      >
        <Text fontSize="3xl" fontWeight="bold" mb={4} color="#FF7400">
          {t("contact.title")}
        </Text>
        <Text mb={2} fontWeight="bold">
          {t("contact.happy")}
        </Text>
        <Text mb={10}>{t("contact.description")}</Text>
        <Flex direction={{ base: "column", md: "row" }} gap={10}>
          <Box flex="1">
            <FormControl mb={4} isInvalid={!!errors.name}>
              <FormLabel>
                {t("contact.name")}{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </FormLabel>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <Input {...field} placeholder={t("contact.enterName")} />
                )}
              />
              <FormErrorMessage>
                {errors.name && t(`${errors.name.message}`)}
              </FormErrorMessage>
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.email}>
              <FormLabel>
                {t("contact.email")}{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </FormLabel>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Input
                    type="email"
                    {...field}
                    placeholder={t("contact.emailPlaceholder")}
                  />
                )}
              />
              <FormErrorMessage>
                {errors.email && t(`${errors.email.message}`)}
              </FormErrorMessage>
            </FormControl>

            <FormControl mb={4} isInvalid={!!errors.message}>
              <FormLabel>
                {t("contact.message")}{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </FormLabel>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder={t("contact.enterMessage")}
                  />
                )}
              />
              <FormErrorMessage>
                {errors.message && t(`${errors.message.message}`)}
              </FormErrorMessage>
            </FormControl>

            <Button
              bg="#FF7400"
              color="white"
              _hover={{ bg: "#00008B" }}
              onClick={handleSubmit(onSubmit, onError)}
              width="full"
            >
              {t("contact.submit")}
            </Button>
          </Box>

          <Box flex="1">
            <Box mb={4}>
              <Flex align="center">
                <Icon as={FaMapMarkerAlt} w={6} h={6} mr={2} color="#FF7400" />
                <Text fontWeight="bold">{t("contact.address")}</Text>
              </Flex>
              <Text
                mt={1}
                ml={10}
                mr={{ base: 0, md: 200 }}
                textAlign="justify"
              >
                {t("contact.ourAddress")}
              </Text>
            </Box>
            <Box mb={4}>
              <Flex align="center">
                <Icon as={FaEnvelope} w={6} h={6} mr={2} color="#FF7400" />
                <Text fontWeight="bold">{t("contact.emailUs")}</Text>
              </Flex>
              <Text mt={1} ml={10}>
                <a href="mailto:amigos.sacco@gmail.com">
                  amigos.sacco@gmail.com
                </a>
              </Text>
            </Box>
            <Box mb={4}>
              <Flex align="center">
                <Icon as={FaMobileAlt} w={6} h={6} mr={2} color="#FF7400" />
                <Text fontWeight="bold">{t("contact.mobile")}</Text>
              </Flex>
              <Text mt={1} ml={10}>
                <a href="tel:+251930086830">+251-930086830</a>
              </Text>
            </Box>
            <Box mb={4}>
              <Flex align="center">
                <Icon as={FaPhone} w={6} h={6} mr={2} color="#FF7400" />
                <Text fontWeight="bold">{t("contact.phone")}</Text>
              </Flex>
              <Text mt={1} ml={10}>
                <a href="tel:8511">8511</a>
              </Text>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUs;
