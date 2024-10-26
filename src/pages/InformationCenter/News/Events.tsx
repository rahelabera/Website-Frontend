// Calendar.tsx
import React from "react";
import {
  Box,
  Checkbox,
  Heading,
  VStack,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

interface Event {
  date: string;
  name: string;
  forContent: boolean;
  forEvent: boolean;
}

const events = {
  September: [
    {
      date: "5th",
      name: "International Day of Charity",
      forContent: true,
      forEvent: false,
    },
    {
      date: "11th",
      name: "Ethiopian New Year",
      forContent: true,
      forEvent: false,
    },
    { date: "15th", name: "Mawlid", forContent: true, forEvent: false },
    {
      date: "21th",
      name: "World Gratitude Day/ Members Day",
      forContent: true,
      forEvent: false,
    },
    {
      date: "27th",
      name: "Meskel Festival",
      forContent: true,
      forEvent: false,
    },
  ],
  October: [
    { date: "6th", name: "Irrecha Festival", forContent: true, forEvent: true },
    {
      date: "14th",
      name: "International SACCO Day",
      forContent: true,
      forEvent: true,
    },
    {
      date: "17th",
      name: "International Credit Union Day",
      forContent: true,
      forEvent: true,
    },
  ],
  // Add other months here
};

const Events: React.FC = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        bg="blue.500"
        color="white"
        p={2}
      >
        AMIGOS SACCO
      </Heading>
      <Text fontSize="xl" textAlign="center" bg="orange.300" p={2}>
        Eventful Days of the Year
      </Text>

      {Object.entries(events).map(([month, events]) => (
        <Box key={month} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Heading as="h3" size="md" bg="yellow.300" p={2}>
            {month}
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Date</Th>
                <Th>Name of the Event</Th>
                <Th>For Content</Th>
                <Th>For Event</Th>
              </Tr>
            </Thead>
            <Tbody>
              {events.map((event, index) => (
                <Tr key={index}>
                  <Td>{event.date}</Td>
                  <Td>{event.name}</Td>
                  <Td>
                    <Checkbox isChecked={event.forContent} isReadOnly />
                  </Td>
                  <Td>
                    <Checkbox isChecked={event.forEvent} isReadOnly />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      ))}
    </VStack>
  );
};

export default Events;
