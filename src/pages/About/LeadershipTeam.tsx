import React, { useEffect, useState } from "react";
import { Box, Heading, Image, Text, SimpleGrid, Spinner, Alert, AlertIcon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";
import { useTranslation } from "react-i18next";

const MotionBox = motion(Box);

interface Member {
  name_en: string;
  name_am: string;
  title_en: string;
  title_am: string;
  image: string;
}

interface Committee {
  id: number;
  name_en: string;
  name_am: string;
  members: Member[];
}

const renderPersonBox = ({
  name,
  title,
  imageSrc,
}: {
  name: string;
  title: string;
  imageSrc: string;
}) => (
  <MotionBox
    p={5}
    shadow="md"
    borderWidth="1px"
    borderRadius="md"
    borderColor="#FF7400"
    whileHover={{ scale: 1.05 }}
    textAlign="center"
    key={name} // Ensure 'name' is unique or consider using a unique identifier
  >
    <Image
      borderRadius="full"
      boxSize="150px"
      src={imageSrc}
      alt={name}
      mb={4}
    />
    <Text fontWeight="bold">{name}</Text>
    <Text>{title}</Text>
  </MotionBox>
);
const LeadershipTeam: React.FC = () => {
  const { i18n } = useTranslation();
  const [committees, setCommittees] = useState<Committee[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommittees = async () => {
      try {
        const response = await axios.get<Committee[]>("http://192.168.1.44:8000/api/committees/");
        // const response = await axios.get<Committee[]>("http://192.168.137.226:8000/api/committees/");
        setCommittees(response.data);
      } catch (error: any) {
        console.error("There was an error fetching the data!", error);
        setError(
          error.response?.data?.error ||
            "An error occurred while fetching data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCommittees();
  }, []);

  if (loading) {
    return (
      <Box p={10} mt={150} textAlign="center">
        <Spinner size="xl" />
        <Text mt={4}>Loading...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={10} mt={150}>
        <Alert status="error">
          <AlertIcon />
          {error}
        </Alert>
      </Box>
    );
  }

  return (
    <Box p={10} mt={150}>
      {committees.map((committee) => (
        <Box key={committee.id} mb={20}>
          <Box
            bg="#FF7400"
            borderRadius="full"
            textAlign="center"
            py={4}
            px={8}
            mb={10}
          >
            <Heading as="h1" size="xl" color="white">
              {i18n.language === "en"
                ? committee.name_en
                : committee.name_am}
            </Heading>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            {committee.members.map((member) =>
              renderPersonBox({
                name:
                  i18n.language === "en"
                    ? member.name_en
                    : member.name_am,
                title:
                  i18n.language === "en"
                    ? member.title_en
                    : member.title_am,
                imageSrc: member.image,
              })
            )}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  );
};

export default LeadershipTeam;