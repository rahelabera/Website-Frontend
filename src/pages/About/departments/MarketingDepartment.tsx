import { useEffect, useState } from "react";
import { Box, Heading, Text, Image, Flex, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import departmentHeadImage from "../../../assets/finance.png";
import { useTranslation } from "react-i18next";

// Create a motion component for the Image
const MotionImage = motion(Image);

const FinanceDepartment = () => {
  const { i18n } = useTranslation();
  // State for storing department data
  const [departmentData, setDepartmentData] = useState({
    name_am: "",
    name_en: "",
    description_en: "",
    description_am: "",
    head_name_en: "",
    head_name_am: "",
    head_email: "",
    image: "",
    head_image: "",
  });

  // Fetch department data from the backend
  useEffect(() => {
    const fetchDepartmentData = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.44:8000/api/departments/3"
          // "http://192.168.137.226:8000/api/departments/3"
        );
        setDepartmentData(response.data);
      } catch (error) {
        console.error("Error fetching department data", error);
      }
    };

    fetchDepartmentData();
  }, []);

  return (
    <Box px={[4, 6, 8, 10]} py={[8, 12, 16]} mt={[10, 20, 28]}>
      <Box
        bg="#FF7400"
        borderRadius="full"
        textAlign="center"
        py={4}
        px={8}
        mb={10}
      >
        <Heading as="h1" size="xl" color="white">
          {i18n.language === "am"
            ? departmentData.name_am
            : departmentData.name_en}
        </Heading>
      </Box>

      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <MotionImage
          src={departmentData.image}
          alt={
            i18n.language === "am"
              ? departmentData.name_am
              : departmentData.name_en
          }
          borderRadius="md"
          maxWidth={{ base: "100%", md: "45%" }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />

        <VStack
          align="start"
          spacing={4}
          mt={{ base: 4, md: 0 }}
          flexBasis={{ base: "100%", md: "45%" }}
        >
          <Text fontSize="md" textAlign="justify" mr={8}>
            {i18n.language === "am"
              ? departmentData.description_am
              : departmentData.description_en}
          </Text>

          <Box mt={8} textAlign="center">
            <Image
              src={departmentData.head_image || departmentHeadImage}
              alt={
                i18n.language === "am"
                  ? departmentData.head_name_am
                  : departmentData.head_name_en
              }
              borderRadius="full"
              boxSize="100px"
              mb={4}
            />
            <Text fontWeight="bold">
              {i18n.language === "am"
                ? departmentData.head_name_am
                : departmentData.head_name_en}
            </Text>
            <Text color="gray.600">
              Head of{" "}
              {i18n.language === "am"
                ? departmentData.name_am
                : departmentData.name_en}
            </Text>
            <Text color="blue.500">{departmentData.head_email}</Text>
          </Box>
        </VStack>
      </Flex>
    </Box>
  );
};

export default FinanceDepartment;
