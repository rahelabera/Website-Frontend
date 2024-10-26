import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  VStack,
  Container,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./Testimonial.css"; // Import the CSS file

interface Testimonial {
  id: number;
  name_am: string;
  name_en: string;
  role_am: string;
  role_en: string;
  quote_am: string;
  quote_en: string;
  photo: string;
}

const Testimonials: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.44:8000/api/testimonials/"
        );
        setTestimonials(response.data);
        console.log("Fetched Testimonials:", response.data);
      } catch (err) {
        console.error("Failed to fetch testimonials:", err);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <Container maxW="container.md" className="container">
      <Heading as="h2" size="lg" className="heading">
        {t("testimonial.title")}
      </Heading>
      <VStack spacing={8} align="stretch">
        {testimonials.map((testimonial, index) => (
          <Box key={index} className="testimonial-box">
            <Text className="quote">
              "
              {i18n.language === "am"
                ? testimonial.quote_am
                : testimonial.quote_en}
              "
            </Text>
            <Text className="name-role">
              —{" "}
              {i18n.language === "am"
                ? testimonial.name_am
                : testimonial.name_en}
              ,{" "}
              {i18n.language === "am"
                ? testimonial.role_am
                : testimonial.role_en}
            </Text>
            <Image
              className="image"
              src={testimonial.photo} // Make sure this path is correctly used
              alt={`${testimonial.name_en}'s photo`}
            />
          </Box>
        ))}
      </VStack>
      <Box className="button-container">
        <Heading as="h3" size="md" className="button-heading">
          {t("testimonial.description1")}
        </Heading>
        <Text mb={4}>{t("testimonial.description2")}</Text>
        <Link to="/contact-us">
          <Button colorScheme="orange" mr={2}>
            {t("testimonial.button1")}
          </Button>
        </Link>
        <Link to="/services">
          <Button colorScheme="orange" variant="outline">
            {t("testimonial.button2")}
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Testimonials;
