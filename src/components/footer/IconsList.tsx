import React from "react";
import { Box, Link, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTelegram,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTiktok,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import './IconsList.css';

const IconsList: React.FC = () => {
  return (
    <Box className="icons-box">
      <Flex direction="column" align="center" gap={4}>
        <Link href="https://ow.ly/8Hhh50QKGt8" target="_blank" className="icon-link">
          <FontAwesomeIcon icon={faTelegram} size="2x" />
        </Link>
        <Link href="https://ow.ly/9Gw050QKGt7" target="_blank" className="icon-link">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </Link>
        <Link href="https://ow.ly/QZa350QKGta" target="_blank" className="icon-link">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
        <Link href="https://www.linkedin.com/company/amigos-saving-and-credit-" target="_blank" className="icon-link">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </Link>
        <Link href="https://ow.ly/mJgK50QKGth" target="_blank" className="icon-link">
          <FontAwesomeIcon icon={faTiktok} size="2x" />
        </Link>
        <Link href="https://www.youtube.com/@amigossacco6689" target="_blank" className="icon-link">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </Link>
      </Flex>
    </Box>
  );
};

export default IconsList;