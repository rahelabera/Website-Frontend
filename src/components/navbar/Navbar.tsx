import logo from "../../assets/amigos.png";
import {
  HStack,
  Image,
  Box,
  Link as ChakraLink,
  IconButton,
  Collapse,
  VStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactNode, useState } from "react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "./Navbar.css";

const DropdownItem = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Box display="block" py={2}>
      <ChakraLink
        as={NavLink}
        to={to}
        _hover={{ bg: "inherit", color: "#FF7400" }}
        color={isActive ? "#FF7400" : "#00008B"}
        onClick={onClick}
      >
        {children}
      </ChakraLink>
    </Box>
  );
};

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [departmentsOpen, setDepartmentsOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    if (dropdown !== "departments") {
      setDepartmentsOpen(false);
    }
    if (dropdown !== "news") {
      setNewsOpen(false);
    }
  };

  const toggleDepartments = () => {
    setDepartmentsOpen(!departmentsOpen);
  };
  const toggleNews = () => {
    setNewsOpen(!newsOpen);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setDepartmentsOpen(false);
    setNewsOpen(false);
    setIsOpen(false);
  };

  const isServicesActive = [
    "/services",
    "/services/saving",
    "/services/loan",
    "/services/small-life-insurance",
    "/services/training-and-consultancy",
  ].includes(location.pathname);

  const isInformationActive = [
    "/information-center/FAQ",
    "/information-center/news/announcement",
    "/information-center/news/job-post",
    "/information-center/news/events",
    "/information-center/testimonials",
  ].includes(location.pathname);

  const isAboutActive = [
    "/about-us/mission-and-vision",
    "/about-us/customer-review",
    "/about-us/departments/HR",
    "/about-us/departments/finance",
    "/about-us/departments/marketing",
    "/about-us/departments/ICT",
    "/about-us/departments/Audit",
    "/about-us/departments/Project-Management",
    "/about-us/departments/Loan-Process-and-Evaluation",
    "/about-us/departments/Loan-Collection",
    "/about-us/leadership-team",
    "/about-us/gallery",
    "/about-us",
  ].includes(location.pathname);

  return (
    <Box>
      <HStack className="mobile-hstack" display={{ base: "flex", md: "none" }}>
        <Image src={logo} width="200px" height="50px" />
        <Box display="flex" alignItems="center">
          <LanguageSwitcher />
          <IconButton
            aria-label="Toggle menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={() => setIsOpen(!isOpen)}
            background="#ffffff"
          />
        </Box>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Box display={{ base: "block", md: "none" }} className="mobile-box">
          <VStack align="start" spacing={4}>
            <DropdownItem to="/" onClick={closeAllDropdowns}>
              {t("navBar.home")}
            </DropdownItem>
            <Box>
              <Box
                as="button"
                _hover={{ bg: "inherit", color: "#FF7400" }}
                color={isAboutActive ? "#FF7400" : "#00008B"}
                onClick={() => toggleDropdown("about")}
                className="mobile-dropdown"
              >
                {t("navBar.about")}
              </Box>
              <Collapse in={activeDropdown === "about"}>
                <VStack align="start" pl={4}>
                  <DropdownItem
                    to="/about-us/customer-review"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.customerReview")}
                  </DropdownItem>
                  <DropdownItem
                    to="/about-us/mission-and-vision"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.missionAndVision")}
                  </DropdownItem>
                  <Box>
                    <Box
                      as="button"
                      _hover={{ bg: "inherit", color: "#FF7400" }}
                      onClick={toggleDepartments}
                      className="mobile-dropdown"
                    >
                      {t("navBar.departments")}
                    </Box>
                    <Collapse in={departmentsOpen}>
                      <VStack align="start" pl={4}>
                        <DropdownItem
                          to="/about-us/departments/finance"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.finance")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/HR"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.HR")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/marketing"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.marketing")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/ICT"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.ICT")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/Audit"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.audit")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/Project-Management"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.projectManagement")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/Loan-Process-and-Evaluation"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.loanProcess")}
                        </DropdownItem>
                        <DropdownItem
                          to="/about-us/departments/Loan-Collection"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.loanCollection")}
                        </DropdownItem>
                      </VStack>
                    </Collapse>
                  </Box>
                  <DropdownItem
                    to="/about-us/leadership-team"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.leadership")}
                  </DropdownItem>
                  <DropdownItem
                    to="/about-us/gallery"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.gallery")}
                  </DropdownItem>
                  <DropdownItem
                    to="/about-us/award"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.award")}
                  </DropdownItem>
                </VStack>
              </Collapse>
            </Box>

            <Box>
              <Box
                as="button"
                _hover={{ bg: "inherit", color: "#FF7400" }}
                color={isInformationActive ? "#FF7400" : "#00008B"}
                onClick={() => toggleDropdown("information")}
                className="mobile-dropdown"
              >
                {t("navBar.information")}
              </Box>
              <Collapse in={activeDropdown === "information"}>
                <VStack align="start" pl={4}>
                  <Box>
                    <Box
                      as="button"
                      _hover={{ bg: "inherit", color: "#FF7400" }}
                      onClick={toggleNews}
                      className="mobile-dropdown"
                    >
                      {t("navBar.news")}
                    </Box>
                    <Collapse in={newsOpen}>
                      <VStack align="start" pl={4}>
                        <DropdownItem
                          to="/information-center/news/announcement"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.announcement")}
                        </DropdownItem>
                        <DropdownItem
                          to="/information-center/news/job-post"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.jobPost")}
                        </DropdownItem>
                        <DropdownItem
                          to="/information-center/news/events"
                          onClick={closeAllDropdowns}
                        >
                          {t("navBar.events")}
                        </DropdownItem>
                      </VStack>
                    </Collapse>
                  </Box>
                  <DropdownItem
                    to="/information-center/testimonials"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.testimonials")}
                  </DropdownItem>
                  <DropdownItem
                    to="/information-center/FAQ"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.FAQ")}
                  </DropdownItem>
                </VStack>
              </Collapse>
            </Box>

            <Box>
              <Box
                as="button"
                _hover={{ bg: "inherit", color: "#FF7400" }}
                color={isServicesActive ? "#FF7400" : "#00008B"}
                onClick={() => toggleDropdown("services")}
                className="mobile-dropdown"
              >
                {t("navBar.services")}
              </Box>
              <Collapse in={activeDropdown === "services"}>
                <VStack align="start" pl={4}>
                  <DropdownItem
                    to="/services/saving"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.savingProducts")}
                  </DropdownItem>
                  <DropdownItem to="/services/loan" onClick={closeAllDropdowns}>
                    {t("navBar.loanProducts")}
                  </DropdownItem>
                  <DropdownItem
                    to="/services/training-and-consultancy"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.training")}
                  </DropdownItem>
                  <DropdownItem
                    to="/services/small-life-insurance"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.smallLifeInsurance")}
                  </DropdownItem>
                </VStack>
              </Collapse>
            </Box>
            <DropdownItem to="/membership" onClick={closeAllDropdowns}>
              {t("navBar.membership")}
            </DropdownItem>
            <DropdownItem to="/contact-us" onClick={closeAllDropdowns}>
              {t("navBar.contact")}
            </DropdownItem>
          </VStack>
        </Box>
      </Collapse>
      <Box className="pc-box" display={{ base: "none", md: "block" }} left="0">
        <HStack className="pc-hstack">
          <Image src={logo} width="200px" height="60px" />
          <HStack className="page-list" flex="1" spacing={4}>
            <ChakraLink
              as={NavLink}
              to="/"
              _hover={{ bg: "inherit", color: "#FF7400" }}
              color={location.pathname === "/" ? "#FF7400" : "#00008B"}
            >
              {t("navBar.home")}
            </ChakraLink>
            <Popover trigger="hover" placement="bottom-start" gutter={0}>
              <PopoverTrigger>
                <ChakraLink
                  as={NavLink}
                  to="/about-us"
                  _hover={{ bg: "inherit", color: "#FF7400" }}
                  color={isAboutActive ? "#FF7400" : "#00008B"}
                >
                  {t("navBar.about")}
                </ChakraLink>
              </PopoverTrigger>
              <PopoverContent width="235px" mt={0}>
                <PopoverBody className="dropdown-menu">
                  <DropdownItem to="/about-us/customer-review">
                    {t("navBar.customerReview")}
                  </DropdownItem>
                  <DropdownItem to="/about-us/mission-and-vision">
                    {t("navBar.missionAndVision")}
                  </DropdownItem>
                  <Popover trigger="hover" placement="right-start" gutter={0}>
                    <PopoverTrigger>
                      <Box className="pc-dropdown">
                        {t("navBar.departments")}
                      </Box>
                    </PopoverTrigger>
                    <PopoverContent width="235px" mt={0}>
                      <PopoverBody className="dropdown-menu">
                        <DropdownItem to="/about-us/departments/finance">
                          {t("navBar.finance")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/HR">
                          {t("navBar.HR")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/marketing">
                          {t("navBar.marketing")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/ICT">
                          {t("navBar.ICT")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/Audit">
                          {t("navBar.audit")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/Project-Management">
                          {t("navBar.projectManagement")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/Loan-Process-and-Evaluation">
                          {t("navBar.loanProcess")}
                        </DropdownItem>
                        <DropdownItem to="/about-us/departments/Loan-Collection">
                          {t("navBar.loanCollection")}
                        </DropdownItem>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <DropdownItem to="/about-us/leadership-team">
                    {t("navBar.leadership")}
                  </DropdownItem>
                  <DropdownItem to="/about-us/gallery">
                    {t("navBar.gallery")}
                  </DropdownItem>
                  <DropdownItem
                    to="/about-us/award"
                    onClick={closeAllDropdowns}
                  >
                    {t("navBar.award")}
                  </DropdownItem>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Popover trigger="hover" placement="bottom-start" gutter={0}>
              <PopoverTrigger>
                <ChakraLink
                  _hover={{ bg: "inherit", color: "#FF7400" }}
                  color={isInformationActive ? "#FF7400" : "#00008B"}
                >
                  {t("navBar.information")}
                </ChakraLink>
              </PopoverTrigger>
              <PopoverContent width="235px" mt={0}>
                <PopoverBody className="dropdown-menu">
                  <Popover trigger="hover" placement="right-start" gutter={0}>
                    <PopoverTrigger>
                      <Box className="pc-dropdown">{t("navBar.news")}</Box>
                    </PopoverTrigger>
                    <PopoverContent width="235px" mt={0}>
                      <PopoverBody className="dropdown-menu">
                        <DropdownItem to="/information-center/news/announcement">
                          {t("navBar.announcement")}
                        </DropdownItem>
                        <DropdownItem to="/information-center/news/job-post">
                          {t("navBar.jobPost")}
                        </DropdownItem>
                        <DropdownItem to="/information-center/news/events">
                          {t("navBar.events")}
                        </DropdownItem>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <DropdownItem to="/information-center/testimonials">
                    {t("navBar.testimonials")}
                  </DropdownItem>
                  <DropdownItem to="/information-center/FAQ">
                    {t("navBar.FAQ")}
                  </DropdownItem>
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Popover trigger="hover" placement="bottom-start" gutter={0}>
              <PopoverTrigger>
                <ChakraLink
                  as={NavLink}
                  to="/services"
                  _hover={{ bg: "inherit", color: "#FF7400" }}
                  color={isServicesActive ? "#FF7400" : "#00008B"}
                >
                  {t("navBar.services")}
                </ChakraLink>
              </PopoverTrigger>
              <PopoverContent width="235px" mt={0}>
                <PopoverBody className="dropdown-menu">
                  <DropdownItem to="/services/saving">
                    {t("navBar.savingProducts")}
                  </DropdownItem>
                  <DropdownItem to="/services/loan">
                    {t("navBar.loanProducts")}
                  </DropdownItem>
                  <DropdownItem to="/services/training-and-consultancy">
                    {t("navBar.training")}
                  </DropdownItem>
                  <DropdownItem to="/services/small-life-insurance">
                    {t("navBar.smallLifeInsurance")}
                  </DropdownItem>
                </PopoverBody>
              </PopoverContent>
            </Popover>
            <ChakraLink
              as={NavLink}
              to="/membership"
              _hover={{ bg: "inherit", color: "#FF7400" }}
              color={
                location.pathname === "/membership" ? "#FF7400" : "#00008B"
              }
            >
              {t("navBar.membership")}
            </ChakraLink>
            <ChakraLink
              as={NavLink}
              to="/contact-us"
              _hover={{ bg: "inherit", color: "#FF7400" }}
              color={
                location.pathname === "/contact-us" ? "#FF7400" : "#00008B"
              }
            >
              {t("navBar.contact")}
            </ChakraLink>
          </HStack>
          <LanguageSwitcher />
        </HStack>
      </Box>
    </Box>
  );
};

export default Navbar;
