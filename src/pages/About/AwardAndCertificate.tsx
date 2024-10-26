import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Grid, Image, Skeleton, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useTranslation } from "react-i18next";

interface Award {
  name_en: string;
  name_am: string;
  date_received: string;
  awarding_body_en: string;
  awarding_body_am: string;
  description_en: string;
  description_am: string;
  photo: string;
}

interface Certificate {
  name_en: string;
  name_am: string;
  date_issued: string;
  issuing_organization_en: string;
  issuing_organization_am: string;
  description_en: string;
  description_am: string;
  photo: string;
}

const placeholderImage = "https://via.placeholder.com/150";

const AwardAndCertificatePage: React.FC = () => {
  const { i18n } = useTranslation();
  const [awards, setAwards] = useState<Award[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [awardsResponse, certificatesResponse] = await Promise.all([
          axios.get('http://192.168.1.44:8000/api/awards/'),
          axios.get('http://192.168.1.44:8000/api/certificates/')

          // axios.get('http://192.168.137.226:8000/api/awards/'),
          // axios.get('http://192.168.137.226:8000/api/certificates/')
        ]);
        setAwards(awardsResponse.data);
        setCertificates(certificatesResponse.data);
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Skeleton height="100vh" />;
  }

  return (
    <Box px={[4, 6, 8, 10]} py={[8, 12, 16]} mt={[10, 20, 28]}>
      <Heading as="h1" mb={4} color="#FF7400">
        {i18n.language === 'am' ? 'አስተያየት እና የማስታወቂያ አስገባብ' : 'Awards and Certificates'}
      </Heading>
      <Text fontSize="lg" mb={8}>
        {i18n.language === 'am' ? 'የእኛ እና የማስታወቂያዎች አስተያየት እና የማስታወቂያዎች!' : 'Our Achievements and Recognitions!'}
      </Text>

      <Box mb={8}>
        <Heading as="h2" size="lg" mb={4} color="#FF7400">
          {i18n.language === 'am' ? 'አስተያየቶች' : 'Awards'}
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {awards.length > 0 ? (
            awards.map((award, index) => (
              <Flex key={index} justify="center">
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  width="300px"
                  height="400px"
                >
                  <Box
                    width="100%"
                    height="60%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                    borderRadius="md"
                    mb={4}
                  >
                    <Image
                      src={award.photo || placeholderImage}
                      alt={award.name_en}
                      objectFit="contain"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Heading as="h3" size="md" mb={2}>
                    {i18n.language === 'am' ? award.name_am : award.name_en}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {i18n.language === 'am' ? `ቀን ተቀባብሏል: ${award.date_received}` : `Date Received: ${award.date_received}`}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {i18n.language === 'am' ? `የስራ ሰጪ: ${award.awarding_body_am}` : `Awarding Body: ${award.awarding_body_en}`}
                  </Text>
                  <Text mt={2}>
                    {i18n.language === 'am' ? award.description_am : award.description_en}
                  </Text>
                </Box>
              </Flex>
            ))
          ) : (
            <Text>{i18n.language === 'am' ? 'አንድም አስተያየት አልተገኘም' : 'No awards available'}</Text>
          )}
        </Grid>
      </Box>

      <Box>
        <Heading as="h2" size="lg" mb={4} color="#FF7400">
          {i18n.language === 'am' ? 'የማስታወቂያዎች' : 'Certificates'}
        </Heading>
        <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={6}>
          {certificates.length > 0 ? (
            certificates.map((certificate, index) => (
              <Flex key={index} justify="center">
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  p={4}
                  width="300px"
                  height="400px"
                >
                  <Box
                    width="100%"
                    height="60%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    overflow="hidden"
                    borderRadius="md"
                    mb={4}
                  >
                    <Image
                      src={certificate.photo || placeholderImage}
                      alt={certificate.name_en}
                      objectFit="contain"
                      width="100%"
                      height="100%"
                    />
                  </Box>
                  <Heading as="h3" size="md" mb={2}>
                    {i18n.language === 'am' ? certificate.name_am : certificate.name_en}
                  </Heading>
                  <Text fontSize="sm" color="gray.600">
                    {i18n.language === 'am' ? `ቀን እንደተሰጠ: ${certificate.date_issued}` : `Date Issued: ${certificate.date_issued}`}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {i18n.language === 'am' ? `የስራ ሰጪ: ${certificate.issuing_organization_am}` : `Issuing Organization: ${certificate.issuing_organization_en}`}
                  </Text>
                  <Text mt={2}>
                    {i18n.language === 'am' ? certificate.description_am : certificate.description_en}
                  </Text>
                </Box>
              </Flex>
            ))
          ) : (
            <Text>{i18n.language === 'am' ? 'አንድም የማስታወቂያ አልተገኘም' : 'No certificates available'}</Text>
          )}
        </Grid>
      </Box>
    </Box>
  );
};

export default AwardAndCertificatePage;