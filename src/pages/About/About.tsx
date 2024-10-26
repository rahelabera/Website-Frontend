import { useState, useEffect, useRef } from "react";
import { Box, Container, Flex, Image, Text, Heading } from "@chakra-ui/react";
import AmigosWorkersImage from "../../assets/Amigos-workers.png";
import Icon1Image from "../../assets/icon1.png";
import Icon2Image from "../../assets/icon2.png";
import Icon3Image from "../../assets/icon3.png";
import Icon4Image from "../../assets/icon4.png";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const headerHeight = "200px";

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

    const duration = 2000; // Duration for the count-up effect in milliseconds
    const updateInterval = 20; // Update interval in milliseconds

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
    <Container
      maxW="container.xl"
      pt={[headerHeight, "16", "20"]}
      pb={[20, 24, 32]}
    >
      <Flex
        direction={["column", "column", "row"]}
        justify="space-between"
        align="center"
        mb={[8, 12, 16]}
      >
        <Box flex={1} mr={[0, 0, 8]}>
          <Heading as="h2" size="lg" mb={4} color="#FF7400">
            {t("about.title")}
          </Heading>
          <Text fontSize={["md", "lg", "lg"]} mb={4} textAlign="justify">
            {t("about.description")}
          </Text>
        </Box>
        <Image
          src={AmigosWorkersImage}
          boxSize={["300px", "400px", "500px"]}
          borderRadius="md"
          alt={t("about.amigosWorkers")}
          mt={[4, 4, 0]}
        />
      </Flex>

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

      <Box
        mt={[8, 12, 20]}
        mb={[8, 12, 16]}
        w="full"
        p={[4, 6, 8]}
        bg="white"
        borderRadius="md"
      >
        <Heading as="h2" size="lg" mb={4} color="#FF7400">
          {t("about.whyUs")}
        </Heading>
        <Text fontSize={["md", "lg", "lg"]} textAlign="justify">
          {t("about.description1")}
        </Text>
      </Box>

      <Box
        mt={[8, 12, 20]}
        mb={0}
        w="full"
        p={[4, 6, 8]}
        bg="white"
        borderRadius="md"
      >
        <Flex
          direction={["column", "column", "row"]}
          justify="space-between"
          align="start"
          gap={[4, 6, 8]}
        >
          {[
            {
              icon: Icon1Image,
              title: t("about.experts"),
              description: t("about.card1"),
            },
            {
              icon: Icon2Image,
              title: t("about.highlySkilled"),
              description: t("about.card2"),
            },
            {
              icon: Icon3Image,
              title: t("about.youGet"),
              description: t("about.card3"),
            },
            {
              icon: Icon4Image,
              title: t("about.properAccounts"),
              description: t("about.card4"),
            },
          ].map((item, index) => (
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
              minH="250px"
            >
              <Box mb={2} display="flex" justifyContent="center">
                <Image
                  src={item.icon}
                  boxSize={["40px", "50px", "60px"]}
                  borderRadius="md"
                />
              </Box>
              <Heading as="h3" size="md" mb={2} color="#FF7400">
                {item.title}
              </Heading>
              <Text fontSize={["md", "lg", "lg"]} mb={4} textAlign="justify">
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Container>
  );
};

export default About;
