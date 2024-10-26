import React from "react";
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  VStack,
  Container,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SmallLifeInsurance: React.FC = () => {
  return (
    <Container maxW="container.md" py={8} mt={20}>
      <Box boxShadow="lg" p={8} borderRadius="md">
        <Stack spacing={6}>
          <Box textAlign="center">
            <Heading as="h1" size="xl" color="#FF7400">
              Small Life Insurance
            </Heading>
            <Text fontSize="lg" mt={2} fontWeight="bold">
              Affordable protection for you and your loved ones.
            </Text>
          </Box>

          <VStack spacing={4} align="stretch">
            <Text fontSize="md">
              Our Small Life Insurance plan offers peace of mind with flexible
              coverage options tailored to your needs.
            </Text>
            <Text fontSize="md">
              Secure your family's future with cost-effective solutions and
              comprehensive support.
            </Text>
          </VStack>

          {/* Details Section */}
          <VStack spacing={4} align="stretch">
            <Text fontSize="lg" fontWeight="bold">
              Coverage Options
            </Text>
            <Text fontSize="md">
              Choose from a range of plans designed to fit your lifestyle and
              budget.
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Eligibility Criteria
            </Text>
            <Text fontSize="md">
              Available to individuals aged 18 to 65. No medical exam required
              for basic coverage.
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Pricing Information
            </Text>
            <Text fontSize="md">
              Starting as low as $10 per month. Contact us for a personalized
              quote.
            </Text>
          </VStack>

          {/* Links to Other Pages */}
          <VStack spacing={4} align="stretch">
            <RouterLink to="/information-center/faq">
              <Text fontSize="md" color="#FF7400">
                Visit our FAQ page for more information.
              </Text>
            </RouterLink>
            <RouterLink to="/information-center/testimonials">
              <Text fontSize="md" color="#FF7400">
                Read Testimonials.
              </Text>
            </RouterLink>
          </VStack>

          {/* Call to Action */}
          <VStack spacing={4}>
            <Button
              colorScheme="orange"
              variant="solid"
              _hover={{ bg: "#00008B" }}
              size="lg"
              fontSize={["md", "lg", "xl"]}
              as={RouterLink}
              to={"/membership"}
            >
              Apply Now
            </Button>
            <Text fontSize="md">
              Reach out to our insurance specialists at{" "}
              <a href="mailto:_amigos.sacco@gmail.com">
                _amigos.sacco@gmail.com
              </a>{" "}
              or call 8511.
            </Text>
          </VStack>
        </Stack>
      </Box>
    </Container>
  );
};

export default SmallLifeInsurance;
