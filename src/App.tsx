import "./App.css";
import { GridItem, Grid, Box } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Membership from "./pages/membership/Membership";
import Services from "./pages/services/Services";
import { Route, Routes, } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./components/translations/i18n";
import CustomerReview from "./pages/About/CustomerReview";
import FinanceDepartment from "./pages/About/departments/FinanceDepartment";
import HRDepartment from "./pages/About/departments/HRDepartment";
import ICTDepartment from "./pages/About/departments/ICTDepartment";
import LoanProcessAndEvaluationDepartment from "./pages/About/departments/LoanProcessAndEvaluationDepartment"
import LoanCollectionDepartment from "./pages/About/departments/LoanCollectionDepartment"
import MarketingDepartment from "./pages/About/departments/MarketingDepartment";
import AuditDepartment from "./pages/About/departments/AuditDepartment";
import ProjectManagementDepartment from "./pages/About/departments/ProjectManagement";
import Gallery from "./pages/About/Gallery";
import LeadershipTeam from "./pages/About/LeadershipTeam";
import MissionAndVision from "./pages/About/MissionAndVision";
import LoanProducts from "./pages/services/LoanProducts";
import SavingProducts from "./pages/services/SavingProducts";
import PageWithTitle from "./components/PageWithTitle";
import AwardAndCertificate from './pages/About/AwardAndCertificate';
import './i18n';
import IconsList from "./components/footer/IconsList";
import ScrollToTop from "./components/ScrollTop";
import FAQ from "./pages/InformationCenter/FAQ";
import Testimonial from "./pages/InformationCenter/Testimonial";
import Announcement from "./pages/InformationCenter/News/Announcement";
import Events from "./pages/InformationCenter/News/Events";
import JobPost from "./pages/InformationCenter/News/JobPost";
import TrainingAndConsultancy from "./pages/services/TrainingAndConsultancy";
import SmallLifeInsurance from "./pages/services/SmallLifeInsurance";

function App() {
  return (
    <Grid
      templateAreas={`"slider" "main" "footer"`}
      templateRows={"auto 1fr 300px"}
      gap="1"
      height="100vh"
    >
      <ScrollToTop />
      <GridItem area="slider" position="relative"> 
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          zIndex="overlay"
          bg="rgba(255, 255, 255, 0.8)"
        >
          <Navbar />
        </Box>
      </GridItem>

      <GridItem area="main">
        <Routes>
          <Route path="/" element={<PageWithTitle title="Home - Amigos Website"><Home /></PageWithTitle>} />
          <Route path="/about-us" element={<PageWithTitle title="About Us - Amigos Website"><About /></PageWithTitle>} />
          <Route path="/about-us/customer-review" element={<PageWithTitle title="Customer Review - Amigos Website"><CustomerReview /></PageWithTitle>} />
          <Route path="/about-us/mission-and-vision" element={<PageWithTitle title="Mission and Vision - Amigos Website"><MissionAndVision /></PageWithTitle>} />
          <Route path="/about-us/departments/finance" element={<PageWithTitle title="Finance Department - Amigos Website"><FinanceDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/HR" element={<PageWithTitle title="HR Department - Amigos Website"><HRDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/marketing" element={<PageWithTitle title="Marketing Department - Amigos Website"><MarketingDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/ICT" element={<PageWithTitle title="ICT Department - Amigos Website"><ICTDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/Audit" element={<PageWithTitle title="Audit Department - Amigos Website"><AuditDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/Loan-Process-and-Evaluation" element={<PageWithTitle title="Loan Process & Evaluation Department - Amigos Website"><LoanProcessAndEvaluationDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/Loan-Collection" element={<PageWithTitle title="Loan Collection Department - Amigos Website"><LoanCollectionDepartment /></PageWithTitle>} />
          <Route path="/about-us/departments/Project-Management" element={<PageWithTitle title="Project Management Department - Amigos Website"><ProjectManagementDepartment /></PageWithTitle>} />
          <Route path="/about-us/leadership-team" element={<PageWithTitle title="Leadership Team - Amigos Website"><LeadershipTeam /></PageWithTitle>} />
          <Route path="/about-us/gallery" element={<PageWithTitle title="Gallery - Amigos Website"><Gallery /></PageWithTitle>} />
          <Route path="/services" element={<PageWithTitle title="Services - Amigos Website"><Services /></PageWithTitle>} />
          <Route path="/services/saving" element={<PageWithTitle title="Saving Products - Amigos Website"><SavingProducts /></PageWithTitle>} />
          <Route path="/services/loan" element={<PageWithTitle title="Loan Products - Amigos Website"><LoanProducts /></PageWithTitle>} />
          <Route path="/services/training-and-consultancy" element={<PageWithTitle title="Training & Consultancy - Amigos Website"><TrainingAndConsultancy /></PageWithTitle>} />
          <Route path="/services/small-life-insurance" element={<PageWithTitle title="Small Life Insurance - Amigos Website"><SmallLifeInsurance /></PageWithTitle>} />
          <Route path="/membership" element={<PageWithTitle title="Membership - Amigos Website"><Membership /></PageWithTitle>} />
          <Route path="/contact-us" element={<PageWithTitle title="Contact Us - Amigos Website"><Contact /></PageWithTitle>} />
          <Route path="/about-us/award" element={<PageWithTitle title="Award & Certificates - Amigos Website"><AwardAndCertificate /></PageWithTitle>} />
          <Route path="/information-center/FAQ" element={<PageWithTitle title="FAQ - Amigos Website"><FAQ/></PageWithTitle>} />
          <Route path="/information-center/news/announcement" element={<PageWithTitle title="Announcement - Amigos Website"><Announcement/></PageWithTitle>} />
          <Route path="/information-center/news/job-post" element={<PageWithTitle title="Job Post - Amigos Website"><JobPost/></PageWithTitle>} />
          <Route path="/information-center/news/events" element={<PageWithTitle title="Events - Amigos Website"><Events/></PageWithTitle>} />
          <Route path="/information-center/testimonials" element={<PageWithTitle title="Testimonials - Amigos Website"><Testimonial/></PageWithTitle>} />
        </Routes>
      </GridItem>

      <GridItem area="footer" bg="charcoal grey">
      <IconsList />
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
