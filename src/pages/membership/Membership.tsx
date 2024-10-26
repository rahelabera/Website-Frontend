import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  UnorderedList,
  ListItem,
  Input,
  RadioGroup,
  Radio,
  Button,
  FormErrorMessage,
  FormControl,
  FormLabel,
  Stack,
  useToast
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import membershipIcon1 from "../../assets/membershipIcon1.png";
import membershipIcon2 from "../../assets/membershipIcon2.png";
import membershipIcon3 from "../../assets/membershipIcon3.png";
import backgroundMembership from "../../assets/background-membership.png";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';

const schema = z.object({
  firstName: z.string().min(1, { message: "membership.error1" }),
  lastName: z.string().min(1, { message: "membership.error2" }),
  phone: z.string().min(10, { message: "membership.error3" }),
  email: z.string().email({ message: "membership.error4" }),
  savingAccount: z.string().min(1, { message: "membership.error5" }),
  loanAccount: z.string().min(1, { message: "membership.error6" }),
  receipt: z.instanceof(FileList).refine((fileList) => fileList.length > 0, {
    message: "membership.error7",
  }),
});

type FormData = z.infer<typeof schema>;

const Membership = () => {
  const { t } = useTranslation();
  const toast = useToast();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      savingAccount: '',
      loanAccount: '',
    },
  });

  const receipt = watch("receipt");

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append('first_name', data.firstName);
      formData.append('last_name', data.lastName);
      formData.append('phone', data.phone);
      formData.append('email', data.email);
      formData.append('saving_account', data.savingAccount);
      formData.append('loan_account', data.loanAccount);
      formData.append('receipt', data.receipt[0]);
  
      await axios.post('http://192.168.1.44:8000/api/api/membership/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      toast({
        title: t("contact.toastSuccessTitle"),
        description: t("contact.toastSuccessMessage"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Reset the form
      reset();
    } catch (error) {
      console.error(error);
      toast({
        title: t("contact.toastErrorTitle"),
        description: t("contact.toastErrorMessage"),
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Box flexGrow="1" padding={4} position="relative" maxW="full" pt={20} pb={10}>
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height={{ base: "32%", md: "30%" }}
          overflow="hidden"
          zIndex={-1}
        >
          <Box
            _before={{
              content: '""',
              backgroundImage: `url(${backgroundMembership})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(5px) brightness(0.5)",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
            height="100%"
            width="100%"
          />
        </Box>
        <Box position="relative" zIndex={1} flex={1} flexDirection="column" justifyContent="center" alignItems="center">
          <Heading as="h1" size="xl" mb={4} mt={105} textAlign="center" color="#FF7400">
            {t("membership.heading1")}
          </Heading>
          <Heading as="h2" size="lg" mb={8} textAlign="center" color="#FF7400">
            {t("membership.heading2")}
          </Heading>
          <Flex justify="space-between" gap={8} mt={20} flexWrap="wrap">
            <Box flex={1} minW={{ base: "100%", md: "30%" }}>
              <Box display="flex" justifyContent="center" mb={4}>
                <Image src={membershipIcon1} boxSize="50px" borderRadius="md" />
              </Box>
              <Text fontSize="lg" textAlign="center" color="#FF7400">
                {t("membership.heading3")}
              </Text>
            </Box>
            <Box flex={1} minW={{ base: "100%", md: "30%" }}>
              <Box display="flex" justifyContent="center" mb={4}>
                <Image src={membershipIcon2} boxSize="50px" borderRadius="md" />
              </Box>
              <Text fontSize="lg" textAlign="center" color="#FF7400">
                {t("membership.heading4")}
              </Text>
            </Box>
            <Box flex={1} minW={{ base: "100%", md: "30%" }}>
              <Box display="flex" justifyContent="center" mb={4}>
                <Image src={membershipIcon3} boxSize="50px" borderRadius="md" />
              </Box>
              <Text fontSize="lg" textAlign="center" color="#FF7400">
                {t("membership.heading5")}
              </Text>
            </Box>
          </Flex>
        </Box>
        <Flex
          justify={{ base: "center", md: "space-between" }}
          gap={20}
          mt={20}
          flexWrap="wrap"
          position="relative"
          zIndex={2}
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box
            flex={1}
            p={6}
            ml={{ md: 4, base: 1 }}
            bg="white"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="md"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
            }}
            minW={{ base: "100%", md: "45%" }}
            mb={4}
            mt={30}
            position="relative"
            zIndex={1}
          >
            <Heading as="h2" size="lg" mb={4} color="#FF7400">
              {t("membership.title1")}
            </Heading>
            <Text fontSize="lg" mb={4}>
              {t("membership.description1")}
            </Text>
            <UnorderedList>
              <ListItem>{t("membership.list1")}</ListItem>
              <ListItem>{t("membership.list2")}</ListItem>
              <ListItem>{t("membership.list3")}</ListItem>
              <ListItem>{t("membership.list4")}</ListItem>
            </UnorderedList>
          </Box>
          <Box
            flex={1}
            p={6}
            mr={4}
            mt={{ base: 4, md: 30 }}
            bg="white"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
            borderRadius="md"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
            }}
            minW={{ base: "100%", md: "45%" }}
            mb={4}
            position="relative"
            zIndex={1}
          >
            <Heading as="h2" size="lg" mb={4} color="#FF7400">
              {t("membership.title2")}
            </Heading>
            <Text fontSize="lg" mb={4}>
              {t("membership.description2")}
            </Text>
            <UnorderedList>
              <ListItem>{t("membership.list5")}</ListItem>
              <ListItem>{t("membership.list6")}</ListItem>
              <ListItem>{t("membership.list7")}</ListItem>
              <ListItem>{t("membership.list8")}</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
        <Box
          p={6}
          bg="white"
          boxShadow="md"
          borderRadius="md"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          maxW="500px"
          width="100%"
          mx="auto"
          position="relative"
          zIndex={1}
          mt={4}
        >
          <FormControl isInvalid={!!errors.firstName}>
            <FormLabel color="#FF7400">
              {t("membership.firstName")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Input placeholder={t("membership.firstNamePlaceholder")} {...register("firstName")} borderColor="#00008B" />
            <FormErrorMessage>
              {errors.firstName && t(`${errors.firstName.message}`)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.lastName}>
            <FormLabel color="#FF7400">
              {t("membership.lastName")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Input placeholder={t("membership.lastNamePlaceholder")} {...register("lastName")} borderColor="#00008B" />
            <FormErrorMessage>
              {errors.lastName && t(`${errors.lastName.message}`)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.phone}>
            <FormLabel color="#FF7400">
              {t("membership.phone")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Input placeholder={t("membership.phonePlaceholder")} {...register("phone")} borderColor="#00008B" />
            <FormErrorMessage>
              {errors.phone && t(`${errors.phone.message}`)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel color="#FF7400">
              {t("membership.email")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Input placeholder={t("membership.emailPlaceholder")} {...register("email")} borderColor="#00008B" />
            <FormErrorMessage>
              {errors.email && t(`${errors.email.message}`)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.savingAccount}>
            <FormLabel color="#FF7400">
              {t("membership.savingAccount")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Controller
              name="savingAccount"
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} borderColor="#00008B">
                  <Stack direction="column">
                    <Radio value="Time Deposit">{t("membership.timeDeposit")}</Radio>
                    <Radio value="Children Account">{t("membership.childrenAccount")}</Radio>
                    <Radio value="Business Saving">{t("membership.businessSaving")}</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            <FormErrorMessage>
              {errors.savingAccount && t(`${errors.savingAccount.message}`)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.loanAccount}>
            <FormLabel color="#FF7400">
              {t("membership.loanAccount")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Controller
              name="loanAccount"
              control={control}
              render={({ field }) => (
                <RadioGroup {...field} borderColor="#00008B">
                  <Stack direction="column">
                    <Radio value="Business Loan">{t("membership.businessLoan")}</Radio>
                    <Radio value="Vehicle Loan">{t("membership.vehicleLoan")}</Radio>
                    <Radio value="Home Loan">{t("membership.homeLoan")}</Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            <FormErrorMessage>
              {errors.loanAccount && t(`${errors.loanAccount.message}`)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.receipt}>
            <FormLabel color="#FF7400">
              {t("membership.receipt")} <Text as="span" color="red"> *</Text>
            </FormLabel>
            <Box display="flex" alignItems="center">
              <Button
                as="label"
                htmlFor="receipt-upload"
                colorScheme="orange"
                cursor="pointer"
                mr={4}
                _hover={{
                  bg: "#00008B",
                }}
              >
                {t("membership.chooseFile")}
              </Button>
              <Text>
                {receipt && receipt.length > 0
                  ? receipt[0].name
                  : t("membership.noFileChosen")}
              </Text>
            </Box>
            <Input
              type="file"
              id="receipt-upload"
              {...register("receipt")}
              style={{ display: "none" }}
            />
            <FormErrorMessage>
              {errors.receipt && t(`${errors.receipt.message}`)}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={6}
            type="submit"
            colorScheme="orange"
            _hover={{
              transform: "translateY(-5px)",
              boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)",
              transition: "all 0.3s ease-in-out",
              bg: "#00008B",
            }}
          >
            {t("membership.submit")}
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Membership;