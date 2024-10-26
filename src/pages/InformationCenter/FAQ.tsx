import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import "./FAQ.css"; // Import the CSS file

// Define the type for FAQ items
interface FAQ {
  question_en: string;
  question_am: string;
  answer_en: string;
  answer_am: string;
}

const Faqs: React.FC = () => {
  const { t, i18n } = useTranslation(); // Get the current language
  const [faqItems, setFaqItems] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get("http://192.168.1.44:8000/api/faqs/");
        setFaqItems(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load FAQs.");
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  if (loading) {
    return <Text className="loading-message">Loading FAQs...</Text>;
  }

  if (error) {
    return <Box className="error-message">{error}</Box>;
  }

  return (
    <Box className="faq-container">
      <Heading as="h2" className="faq-heading">
        {t("FAQs")}
      </Heading>
      <Accordion allowMultiple>
        {faqItems.map((item, index) => (
          <AccordionItem key={index} mb={4}>
            <h2>
              <AccordionButton className="accordion-button">
                <Box flex="1" textAlign="left">
                  {i18n.language === "am" ? item.question_am : item.question_en}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel className="accordion-panel">
              <Text>
                {i18n.language === "am" ? item.answer_am : item.answer_en}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faqs;