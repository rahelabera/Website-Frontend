import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { FaGlobe, FaBook } from 'react-icons/fa'; // Importing icons from react-icons
import './LanguageSwitcher.css'; // Importing the CSS file

const LanguageSwitcher: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>("");

  useEffect(() => {
    // Retrieve the language from localStorage or default to the current language
    const savedLanguage = localStorage.getItem('currentLanguage') || i18n.language;
    setCurrentLanguage(savedLanguage);
    i18n.changeLanguage(savedLanguage);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('currentLanguage', lng); // Save to localStorage
  };

  const languages = [
    { code: "en", label: t("home.English"), icon: <FaGlobe className="icon" /> },
    { code: "am", label: t("home.Amharic"), icon: <FaBook className="icon" /> }, // Using icons from react-icons
  ];

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<ChevronDownIcon />}
          className="menu-button"
        >
          <Flex alignItems="center">
            {languages.find((lang) => lang.code === currentLanguage)?.icon}
            <span>
              {languages.find((lang) => lang.code === currentLanguage)?.label}
            </span>
          </Flex>
        </MenuButton>
        <MenuList className="menu-list">
          {languages.map((lang) => (
            <MenuItem
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="menu-item"
            >
              <Flex alignItems="center">
                <span className="icon">{lang.icon}</span> {/* Add icon class */}
                <span>
                  {lang.label}
                </span>
              </Flex>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
