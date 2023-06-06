import React from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/landing/header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import HeroBanner from "../../components/landing/heroBanner";
import FeatureSection from "../../components/landing/featureSection";
import AdditionalInfo from "../../components/landing/additionalInfoSection";
import SponsorSection from "../../components/landing/sponsorSection";
import ContactUsSection from "../../components/landing/contactUsSection";
import Footer from "../../components/landing/footer";
const Landing = () => {
  const history = useHistory();

  // const handleProfessor = () => {
  //   localStorage.setItem("type", "professor");
  //   history.push(`/home`);
  // };
  // const handleStudent = () => {
  //   localStorage.setItem("type", "student");
  //   history.push(`/home`);
  // };

  return (
    <>
      
      <Box sx={{ display: "flex" }}>
        <Header />
        <Box component="main" className="w-100">
          <HeroBanner />
          <FeatureSection />
          <AdditionalInfo />
          <SponsorSection />
          <ContactUsSection />
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Landing;
