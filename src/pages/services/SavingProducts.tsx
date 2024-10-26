import {
  Box,
  Heading,
  SimpleGrid,
  Button,
  Text,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import calculator from "../../assets/calculator.png";
import car from "../../assets/car2.png";
import child from "../../assets/child.png";
import tree from "../../assets/tree.png";
import business from "../../assets/business.png";
import time from "../../assets/time.png";
import { useEffect, useState, useRef } from "react";

const cards = [
  {
    image: time,
    title: "savingProducts.timeDeposit",
    text: "savingProducts.card1",
  },
  {
    image: calculator,
    title: "savingProducts.voluntarySaving",
    text: "savingProducts.card2",
  },
  {
    image: child,
    title: "savingProducts.childrenSaving",
    text: "savingProducts.card3",
  },
  {
    image: tree,
    title: "savingProducts.houseSaving",
    text: "savingProducts.card4",
  },
  {
    image: business,
    title: "savingProducts.businessSaving",
    text: "savingProducts.card5",
  },
  {
    image: car,
    title: "savingProducts.vehicleSaving",
    text: "savingProducts.card6",
  },
];

const Services = () => {
  const { t } = useTranslation();
  const gridColumns = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  const stats = [
    { value: 10, label: t("savingProducts.yearsExperience") },
    { value: 10000000, label: t("savingProducts.maxLoan") },
    { value: 80, label: t("savingProducts.staff") },
    { value: 1000000000, label: t("savingProducts.disbursed") },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000;
    const updateInterval = 20;

    const steps = duration / updateInterval;
    const increments = stats.map((stat) => Math.max(stat.value / steps, 1));

    const intervals = stats.map((_, index) =>
      setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[index] < stats[index].value) {
            newCounts[index] += increments[index];
            if (newCounts[index] > stats[index].value) {
              newCounts[index] = stats[index].value;
            }
          }
          return newCounts;
        });
      }, updateInterval)
    );

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, [hasStarted, stats]);

  return (
    <>
      <Box mb={2} p={[4, 6, 8]} mt={[25, 30, 38]}>
        <Heading
          textAlign="center"
          color="#FF7400"
          mb={[5, 7, 10]}
          mt={[10, 12, 14]}
        >
          {t("savingProducts.title")}
        </Heading>
        <Text
          fontSize={["md", "lg", "xl"]}
          textAlign="center"
          mb={[5, 7, 10]}
          mt={[5, 7, 10]}
        >
          {t("savingProducts.description")}
        </Text>
      </Box>

      <SimpleGrid columns={gridColumns} spacing={[5, 7, 10]} mb={2}>
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
            </Box>
          </Box>
        ))}
      </SimpleGrid>

      <Box
        ref={statsRef}
        mt={[8, 12, 20]}
        mb={[8, 12, 16]}
        w="full"
        p={[4, 6, 8]}
        bg="white"
        boxShadow="md"
        borderRadius="md"
      >
        <Flex
          direction={["column", "row"]}
          justify="space-between"
          align="center"
          gap={[4, 8]}
        >
          {stats.map((item, index) => (
            <Box
              key={index}
              flex={1}
              boxShadow="md"
              p={4}
              borderRadius="md"
              bg="white"
              _hover={{
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
                boxShadow: "lg",
              }}
              textAlign="center"
              minH="150px"
            >
              <Text
                fontSize={["2xl", "3xl", "3xl"]}
                fontWeight="bold"
                mb={2}
                color="#FF7400"
              >
                {Math.round(counts[index]).toLocaleString()}+
              </Text>
              <Text fontSize={["md", "lg", "lg"]} color="gray.600">
                {item.label}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>

      <Box mb={2} p={4} mt={[100, 120, 150]} alignItems="center">
        <Heading
          textAlign="center"
          color="#FF7400"
          mb={[5, 7, 10]}
          mt={[10, 12, 14]}
        >
          {t("savingProducts.title2")}
        </Heading>
        <Text
          fontSize={["lg", "xl", "2xl"]}
          fontWeight="bold"
          textAlign="center"
          mb={[5, 7, 10]}
          mt={[5, 7, 10]}
        >
          {t("savingProducts.description2")}
        </Text>
        <Box display="flex" justifyContent="center">
          <Button
            as={Link}
            to={"/membership"}
            colorScheme="orange"
            variant="solid"
            _hover={{ bg: "#00008B" }}
            fontSize={["md", "lg", "xl"]}
          >
            {t("savingProducts.button")}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Services;
