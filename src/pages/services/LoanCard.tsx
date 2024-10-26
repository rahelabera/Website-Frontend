import React from "react";
import { Box, Heading, Text, Icon} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
// import { FaHome, FaBusinessTime, FaCar, FaUser, FaGraduationCap, FaCircle } from "react-icons/fa";

interface LoanCardProps {
  title: string;
  description: string;
  icon: any;
}

const moveOut = keyframes`
  from {
    transform: scale(0.5) translateY(50%);
    opacity: 0;
  }
  to {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
`;

const hoverAnimation = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    background-color: rgba(255, 255, 255, 0.9);
  }
  50% {
    transform: scale(1.1) rotate(5deg);
    background-color: rgba(255, 255, 255, 0.7);
  }
  100% {
    transform: scale(1.05) rotate(0deg);
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

const LoanCard: React.FC<LoanCardProps> = ({ title, description, icon }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      padding={4}
      textAlign="center"
      boxShadow="md"
      animation={`${moveOut} 0.5s ease-out forwards`}
      width="full"
      maxWidth="250px"
      height="300px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      backgroundColor="white"
      _hover={{
        animation: `${hoverAnimation} 0.6s ease-out forwards`,
        transform: "scale(1.1)",
        boxShadow: "lg",
        zIndex: 1
      }}
    >
      <Icon as={icon} boxSize={8} color="#FF7400" mb={2} />
      <Heading size="md" mb={2} color="#FF7400" noOfLines={1}>
        {title}
      </Heading>
      <Text noOfLines={3} fontSize="sm" textAlign="justify" mb={2}>
        {description}
      </Text>
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        backgroundColor="rgba(255, 255, 255, 0.9)"
        opacity="0"
        transition="opacity 0.3s"
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding={4}
        _hover={{
          opacity: 1,
        }}
      >
        <Text fontSize="sm" textAlign="justify" overflowY="auto">
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default LoanCard;