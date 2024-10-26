import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import amigosLogo from "../../assets/amigos.png";
import { useTranslation } from "react-i18next";
import "./footer.css";

interface FooterListProps {
  title: string;
  items?: { label: string; href?: string }[];
}

const FooterList: React.FC<FooterListProps> = ({ title, items }) => {
  return (
    <Box textAlign={{ base: "center", md: "justify" }} mb={4} mr={4} ml={10}>
      <Heading as="h5" fontSize="lg" mb={2}>
        {title}
      </Heading>
      {items ? (
        <List styleType="none" py={0} mx={0}>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item.href ? (
                <Link href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ) : (
                <p>{item.label}</p>
              )}
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No items</p>
      )}
    </Box>
  );
};

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <Box maxW="full" mx="auto" p={4} mt={10}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={4}
          textAlign="justify"
        >
          <GridItem>
            <FooterList
              title={t("footer.title1")}
              items={[
                { label: t("footer.description1") },
                { label: t("footer.description2") },
                { label: t("footer.description3") },
                { label: t("footer.description4") },
              ]}
            />
          </GridItem>
          <GridItem>
            <FooterList
              title={t("footer.title2")}
              items={[
                { label: t("footer.day1") },
                { label: t("footer.time1") },
                { label: t("footer.day2") },
                { label: t("footer.time2") },
              ]}
            />
          </GridItem>
          <GridItem>
            <FooterList
              title={t("footer.title3")}
              items={[
                { label: t("footer.product1"), href: "services/saving" },
                { label: t("footer.product2"), href: "services/loan" },
                { label: t("footer.training"), href: "services/training-and-consultancy" },
                { label: t("footer.insurance"), href: "/" },

              ]}
            />
          </GridItem>
          <GridItem>
            <FooterList
              title={t("footer.title4")}
              items={[
                { label: t("footer.reach1"), href: "#" },
                { label: t("footer.reach2"), href: "#" },
                { label: t("footer.reach3"), href: "#" },
              ]}
            />
          </GridItem>
        </Grid>
        <Flex
          justify="space-between"
          align="center"
          py={4}
          flexWrap="wrap"
          marginX={6}
        >
          <Box className="footer-logo" mb={4}>
            <img src={amigosLogo} alt="Amigos Logo" width="200" height="50" />
          </Box>
          <Box textAlign="center" mb={4} mx={4}>
            <p>&copy; {currentYear} {t("footer.amigos")}</p>
          </Box>
          <Box mt={-3} ml={{ base: "20", md: "6" }}>
            <Flex justify="center" align="center" gap={4}>
              <Link
                href="https://ow.ly/8Hhh50QKGt8"
                target="_blank"
                className="footer-icon"
              >
                <FontAwesomeIcon icon={faTelegram} />
              </Link>
              <Link
                href="https://ow.ly/9Gw050QKGt7"
                target="_blank"
                className="footer-icon"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Link>
              <Link
                href="https://ow.ly/QZa350QKGta"
                target="_blank"
                className="footer-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/amigos-saving-and-credit-"
                target="_blank"
                className="footer-icon"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link
                href="https://ow.ly/mJgK50QKGth"
                target="_blank"
                className="footer-icon"
              >
                <FontAwesomeIcon icon={faTiktok} />
              </Link>
              <Link
                href="https://www.youtube.com/@amigossacco6689"
                target="_blank"
                className="footer-icon"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
};

export default Footer;