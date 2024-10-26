import React from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./JobPost.css"; // Import the CSS file

interface JobPost {
  title_en: string;
  title_am: string;
  location_en: string;
  location_am: string;
  type: string;
  posted: string;
  description_en: string;
  description_am: string;
  details_en: string;
  details_am: string;
}

const JobPostPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedJob, setSelectedJob] = React.useState<JobPost | null>(null);
  const [jobPosts, setJobPosts] = React.useState<JobPost[]>([]);

  React.useEffect(() => {
    axios
      .get("http://192.168.1.44:8000/api/jobs/")
      // .get("http://192.168.137.226:8000/api/jobs/")
      .then((response) => {
        setJobPosts(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleCardClick = (job: JobPost) => {
    setSelectedJob(job);
    onOpen();
  };

  return (
    <Box>
      <Box className="background">
        <Heading as="h1" size="2xl" mb={4} className="heading">
          {t("jobOpportunities")}
        </Heading>
        <Text fontSize="lg" className="subheading">
          {t("joinUs")}
        </Text>
      </Box>

      <Box p={[4, 6, 8, 10]} mx="auto" maxW="1200px">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
        >
          {jobPosts.map((job, index) => (
            <Box
              key={index}
              className="job-card"
              onClick={() => handleCardClick(job)}
            >
              <Heading as="h3" size="md" mb={2}>
                {i18n.language === "en" ? job.title_en : job.title_am}
              </Heading>
              <Text fontSize="sm" color="gray.500" mb={1}>
                {t("location")}:{" "}
                {i18n.language === "en" ? job.location_en : job.location_am}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={1}>
                {t("type")}: {job.type}
              </Text>
              <Text fontSize="sm" color="gray.500" mb={1}>
                {t("posted")}: {job.posted}
              </Text>
              <Text fontSize="sm">
                {i18n.language === "en"
                  ? job.description_en
                  : job.description_am}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {i18n.language === "en"
              ? selectedJob?.title_en
              : selectedJob?.title_am}
          </ModalHeader>
          <ModalCloseButton className="close-button" />
          <ModalBody>
            <Text fontWeight="bold">{t("description")}:</Text>
            <Text mb={4}>
              {i18n.language === "en"
                ? selectedJob?.details_en
                : selectedJob?.details_am}
            </Text>
            <Text fontWeight="bold">{t("contactInfo")}:</Text>
            <Text>info@amigossacco.com</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default JobPostPage;
