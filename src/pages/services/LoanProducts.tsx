import React, { useState } from "react";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  Input,
  List,
  ListItem,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  ListIcon,
} from "@chakra-ui/react";
import {
  FaHome,
  FaBusinessTime,
  FaCar,
  FaUser,
  FaGraduationCap,
  FaCircle,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LoanCard from "./LoanCard";

const LoansLayout: React.FC = () => {
  const { t } = useTranslation();
  const [loanAmount, setLoanAmount] = useState(30000);
  const [months, setMonths] = useState(60);
  const [interestRate, setInterestRate] = useState(5.5);

  const calculateMonthlyPayment = (
    amount: number,
    rate: number,
    term: number
  ) => {
    const monthlyRate = rate / 100 / 12;
    const monthlyPayment =
      (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));
    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment(
    loanAmount,
    interestRate,
    months
  );
  const totalInterest = monthlyPayment * months - loanAmount;
  const totalCost = loanAmount + totalInterest;

  return (
    <>
      <Box
        mt={[3, 5, 8, 10]}
        padding={[4, 6, 8]}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="full"
          borderWidth="2px"
          borderColor="#FF7400"
          padding={4}
          textAlign="center"
          mb={6}
        >
          <Heading size="md" color="#FF7400">
            {t("loanProducts.title")}
          </Heading>
        </Box>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(3, 1fr)",
            "repeat(5, 1fr)",
          ]}
          gap={4}
          alignItems="center"
          justifyItems="center"
          width="100%"
        >
          {[
            {
              title: t("loanProducts.houseLoan"),
              description: t("loanProducts.card1"),
              icon: FaHome,
            },
            {
              title: t("loanProducts.businessLoan"),
              description: t("loanProducts.card2"),
              icon: FaBusinessTime,
            },
            {
              title: t("loanProducts.vehicleLoan"),
              description: t("loanProducts.card3"),
              icon: FaCar,
            },
            {
              title: t("loanProducts.personalLoan"),
              description: t("loanProducts.card4"),
              icon: FaUser,
            },
            {
              title: t("loanProducts.educationLoan"),
              description: t("loanProducts.card5"),
              icon: FaGraduationCap,
            },
          ].map((loan, index) => (
            <GridItem
              key={index}
              display="flex"
              justifyContent="center"
              width="100%"
            >
              <LoanCard
                title={loan.title}
                description={loan.description}
                icon={loan.icon}
              />
            </GridItem>
          ))}
        </Grid>
      </Box>
      <Box padding={[4, 6, 8]}>
        <Heading size="lg" textAlign="center" color="#FF7400" mb={5}>
          {t("loanProducts.LoanPackages")}
        </Heading>
        <Text textAlign="center" mb={10}>
          {t("loanProducts.description1")}
        </Text>
        <Table variant="simple" mb={10}>
          <Thead>
            <Tr>
              <Th textAlign="center" color="#ff7400">
                {t("loanProducts.totalDeposit")}
              </Th>
              <Th textAlign="center" color="#ff7400">
                {t("loanProducts.loanAmount")}
              </Th>
              <Th textAlign="center" color="#ff7400">
                {t("loanProducts.waitingPeriod")}
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr _hover={{ bg: "gray.100" }}>
              <Td textAlign="center">25%</Td>
              <Td textAlign="center">≦500,000</Td>
              <Td textAlign="center">4 {t("loanProducts.months")}</Td>
            </Tr>
            <Tr _hover={{ bg: "gray.100" }}>
              <Td textAlign="center">30%</Td>
              <Td textAlign="center">≦1,000,000</Td>
              <Td textAlign="center">3.5 {t("loanProducts.months")}</Td>
            </Tr>
            <Tr _hover={{ bg: "gray.100" }}>
              <Td textAlign="center">35%</Td>
              <Td textAlign="center">≦2,000,000</Td>
              <Td textAlign="center">3 {t("loanProducts.months")}</Td>
            </Tr>
            <Tr _hover={{ bg: "gray.100" }}>
              <Td textAlign="center">40%</Td>
              <Td textAlign="center">≦3,000,000</Td>
              <Td textAlign="center">2.5 {t("loanProducts.months")}</Td>
            </Tr>
            <Tr _hover={{ bg: "gray.100" }}>
              <Td textAlign="center">45%</Td>
              <Td textAlign="center">≦4,000,000</Td>
              <Td textAlign="center">2 {t("loanProducts.months")}</Td>
            </Tr>
            <Tr _hover={{ bg: "gray.100" }}>
              <Td textAlign="center">50%</Td>
              <Td textAlign="center">≦6,000,000</Td>
              <Td textAlign="center">1.5 {t("loanProducts.months")}</Td>
            </Tr>
          </Tbody>
        </Table>

        <Heading size="lg" textAlign="center" color="#FF7400" mb={5}>
          {t("loanProducts.collateralTypes")}
        </Heading>
        <List spacing={3} mb={10}>
          <ListItem pl={3}>
            <ListIcon as={FaCircle} color="#ff7400" boxSize="12px" />
            <Text as="span" color="#ff7400">
              {t("loanProducts.vehicles")}:
            </Text>{" "}
            {t("loanProducts.description2")}
          </ListItem>
          <ListItem pl={3}>
            <ListIcon as={FaCircle} color="#ff7400" boxSize="12px" />
            <Text as="span" color="#ff7400">
              {t("loanProducts.deposites")}:
            </Text>{" "}
            {t("loanProducts.description3")}
          </ListItem>
          <ListItem pl={3}>
            <ListIcon as={FaCircle} color="#ff7400" boxSize="12px" />
            <Text as="span" color="#ff7400">
              {t("loanProducts.house")}:
            </Text>{" "}
            {t("loanProducts.description4")}
          </ListItem>
          <ListItem pl={3}>
            <ListIcon as={FaCircle} color="#ff7400" boxSize="12px" />
            <Text as="span" color="#ff7400">
              {t("loanProducts.companyShare")}:
            </Text>{" "}
            {t("loanProducts.description5")}
          </ListItem>
          <ListItem pl={3}>
            <ListIcon as={FaCircle} color="#ff7400" boxSize="12px" />
            <Text as="span" color="#ff7400">
              {t("loanProducts.salary")}:
            </Text>{" "}
            {t("loanProducts.description6")}
          </ListItem>
        </List>

        <Heading size="lg" textAlign="center" color="#FF7400" mb={5}>
          {t("loanProducts.loanCalculator")}
        </Heading>
        <Text mb={5} textAlign="center">
          {t("loanProducts.description7")}
        </Text>
        <Box
          borderWidth="1px"
          borderRadius="md"
          padding={4}
          boxShadow="md"
          width="full"
          maxWidth="400px"
          mx="auto"
        >
          <Box mb={4}>
            <Text>{t("loanProducts.loanAmount")}:</Text>
            <Input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </Box>
          <Box mb={4}>
            <Text>{t("loanProducts.noMonth")}:</Text>
            <Input
              type="number"
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
            />
          </Box>
          <Box mb={4}>
            <Text>{t("loanProducts.interestRate")}:</Text>
            <Input
              type="number"
              step="0.01"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
            />
          </Box>
          <Box mb={4}>
            <Text>{t("loanProducts.paymentMethod")}:</Text>
            <Select>
              <option value="endOfPeriod">
                {t("loanProducts.endOfPeriod")}
              </option>
              <option value="beginningOfPeriod">
                {t("loanProducts.beginningOfPeriod")}
              </option>
            </Select>
          </Box>
          <Box mb={4}>
            <Text>{t("loanProducts.monthlyPayment")}:</Text>
            <Text>{monthlyPayment.toFixed(2)}</Text>
          </Box>
          <Box mb={4}>
            <Text>{t("loanProducts.totalInterest")}:</Text>
            <Text>{totalInterest.toFixed(2)}</Text>
          </Box>
          <Box mb={4}>
            <Text>{t("loanProducts.totalPrincipalInterest")}:</Text>
            <Text>{totalCost.toFixed(2)}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default LoansLayout;
