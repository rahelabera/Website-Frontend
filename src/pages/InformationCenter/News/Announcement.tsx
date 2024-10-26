import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Grid,
  Image,
  VStack,
  Flex,
  Button,
  Skeleton,
} from "@chakra-ui/react";
import axios from "axios";
import "./Announcement.css";
interface Announcement {
  date: string;
  title_en: string | null;
  title_am: string | null;
  description_en: string | null;
  description_am: string | null;
  image: string | null;
}

const AnnouncementPage: React.FC = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [visibleAnnouncements, setVisibleAnnouncements] = useState(2);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(
          "http://192.168.1.44:8000/api/announcements/"
        );
        console.log("API Response:", response.data); // Log the API response
        setAnnouncements(response.data);
        console.log("Announcements state:", response.data); // Log the state
        setLoading(false);
      } catch (err) {
        setError("Failed to load announcements.");
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleLoadMore = () => {
    setVisibleAnnouncements((prev) => prev + 2);
  };

  if (loading) {
    return <Skeleton height="100vh" />;
  }

  if (error) {
    return (
      <Box p={4} color="red.500">
        {error}
      </Box>
    );
  }

  return (
    <Box className="announcementContainer">
      <VStack spacing={8} align="left">
        <Heading className="announcementHeading" as="h1">
          Announcements
        </Heading>
        <Text className="announcementSubheading">
          Latest Updates from Amigos Saving and Credit Coop
        </Text>

        <Grid className="announcementGrid">
          {announcements
            .slice(0, visibleAnnouncements)
            .map((announcement, index) => (
              <Box key={index} className="announcementCard">
                {announcement.image ? (
                  <Image
                    src={announcement.image}
                    alt={
                      announcement.title_en ||
                      announcement.title_am ||
                      "Announcement Image"
                    }
                    className="announcementImage"
                  />
                ) : (
                  <Text>No image available</Text>
                )}
                <Box className="announcementContent">
                  <Text className="announcementDate">{announcement.date}</Text>
                  <Heading className="announcementTitle" as="h3">
                    {announcement.title_en || announcement.title_am}
                  </Heading>
                  <Text className="announcementDescription">
                    {announcement.description_en || announcement.description_am}
                  </Text>
                </Box>
              </Box>
            ))}
        </Grid>

        {visibleAnnouncements < announcements.length && (
          <Flex mt={6} justify="center">
            <Button className="loadMoreButton" onClick={handleLoadMore}>
              Load More
            </Button>
          </Flex>
        )}
      </VStack>
    </Box>
  );
};

export default AnnouncementPage;
