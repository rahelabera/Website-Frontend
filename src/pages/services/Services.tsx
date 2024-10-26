import {
  Box,
  Heading,
  SimpleGrid,
  Button,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import services4 from "../../assets/services4.png";

const cards = [
  {
    image: services1,
    title: "services.savingsAccounts",
    text: "services.card1",
    route: "/services/saving",
  },
  {
    image: services2,
    title: "services.loan",
    text: "services.card2",
    route: "/services/loan",
  },
  {
    image: services3,
    title: "services.insuranceServices",
    text: "services.card3",
    route: "/insurance-products",
  },
  {
    image: services4,
    title: "services.memberServices",
    text: "services.card4",
    route: "/member-services",
  },
];

const Services = () => {
  const { t } = useTranslation();
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 4 });

  return (
    <>
      <Box mb={2} p={[4, 6, 8]} mt={[5, 8, 10]}>
        <Heading
          textAlign="center"
          color="#FF7400"
          mb={[5, 7, 10]}
          mt={[10, 12, 14]}
        >
          {t("services.title1")}
        </Heading>
        <Text
          fontSize={["md", "lg", "xl"]}
          textAlign="center"
          mb={[5, 7, 10]}
          mt={[5, 7, 10]}
        >
          {t("services.description1")}
        </Text>
      </Box>
      <SimpleGrid columns={gridColumns} spacing={[5, 7, 10]} mb={2} mx={8}>
        {cards.map((card, index) => (
          <Box
            key={index}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.3s, box-shadow 0.3s"
            _hover={{
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            <Image
              src={card.image}
              alt={card.title}
              w="full"
              h={[200, 250, 300]}
              objectFit="cover"
            />

            <Box p={[4, 5, 6]}>
              <Heading size="md" mb={4} color="#FF7400">
                {t(card.title)}
              </Heading>
              <Text mb={4} textAlign="justify">
                {t(card.text)}
              </Text>
              {card.route && (
                <Button
                  as={Link}
                  to={card.route}
                  colorScheme="orange"
                  variant="solid"
                  _hover={{ bg: "#00008B" }}
                >
                  {t("home.readMore")}
                </Button>
              )}
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Services;
