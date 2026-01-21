import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import BookDemo from './components/BookDemo';
import ContactPage from './components/ContactPage';
import ServicesPage from './components/ServicesPage';
import AboutPage from './components/AboutPage';
import MobileAppDevelopment from './components/MobileAppDevelopment';
import FullStackDevelopment from './components/FullStackDevelopment';
import AIDevelopment from './components/AIDevelopment';
import FinTechPage from './components/FinTechPage';
import HealthTechPage from './components/HealthTechPage';
import EdTechPage from './components/EdTechPage';
import ECommercePage from './components/ECommercePage';
import StartupsPage from './components/StartupsPage';
import SMEsPage from './components/SMEsPage';
import EnterprisesPage from './components/EnterprisesPage';
import AgenciesPage from './components/AgenciesPage';
import CustomSolutionsPage from './components/CustomSolutionsPage';
import SaaSDevelopmentPage from './components/SaaSDevelopmentPage';
import DigitalPlatformsPage from './components/DigitalPlatformsPage';
import IntegrationServicesPage from './components/IntegrationServicesPage';
import BlockChainDevelopment from './components/BlockChainDevelopment';
import UIUXDesign from './components/UIUXDesign';
import SoftwareProductDevelopment from './components/SoftwareProductDevelopment';
import PrivacyPage from './components/PrivacyPage';
import TermsPage from './components/TermsPage';
import ScrollToTop from './components/ScrollToTop';
import ReactNodePage from './components/ReactNodePage';
import ReactNativePage from './components/ReactNativePage';
import JavaScriptTypeScriptPage from './components/JavaScriptTypeScriptPage';
import PythonDevelopmentPage from './components/PythonDevelopmentPage';
import CloudSolutionsPage from './components/CloudSolutionsPage';
import ITRecruitmentPage from './components/ITRecruitmentPage';
import ITConsultationPage from './components/ITConsultationPage';
import TechSupportPage from './components/TechSupportPage';
import DigitalTransformationPage from './components/DigitalTransformationPage';
import MaintenanceSupportPage from './components/MaintenanceSupportPage';
import OurStoryPage from './components/OurStoryPage';
import OurTeamPage from './components/OurTeamPage';
import MissionVisionPage from './components/MissionVisionPage';
import CareersPage from './components/CareersPage';
import PortfolioPage from './components/PortfolioPage';
import CaseStudiesPage from './components/CaseStudiesPage';
import BlogPage from './components/BlogPage';
import PricingPage from './components/PricingPage';
import HelpCenterPage from './components/HelpCenterPage';
import DocumentationPage from './components/DocumentationPage';
import APIReferencePage from './components/APIReferencePage';
import ContactSupportPage from './components/ContactSupportPage';
import './styles/App.css';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <Services />
    <About />
  </>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
         <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/services" element={<ServicesPage />} />
           <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
           <Route path="/full-stack-development" element={<FullStackDevelopment />} />
           <Route path="/ai-development" element={<AIDevelopment />} />
           <Route path="/fintech" element={<FinTechPage />} />
           <Route path="/healthtech" element={<HealthTechPage />} />
           <Route path="/edtech" element={<EdTechPage />} />
           <Route path="/ecommerce" element={<ECommercePage />} />
           <Route path="/startups" element={<StartupsPage />} />
           <Route path="/smes" element={<SMEsPage />} />
           <Route path="/enterprises" element={<EnterprisesPage />} />
           <Route path="/agencies" element={<AgenciesPage />} />
           <Route path="/custom-solutions" element={<CustomSolutionsPage />} />
           <Route path="/saas-development" element={<SaaSDevelopmentPage />} />
           <Route path="/digital-platforms" element={<DigitalPlatformsPage />} />
           <Route path="/integration-services" element={<IntegrationServicesPage />} />
           <Route path="/blockchain-development" element={<BlockChainDevelopment />} />
           <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route path="/software-product-development" element={<SoftwareProductDevelopment />} />
          <Route path="/react-nodejs" element={<ReactNodePage />} />
          <Route path="/react-native" element={<ReactNativePage />} />
          <Route path="/javascript-typescript" element={<JavaScriptTypeScriptPage />} />
          <Route path="/python-development" element={<PythonDevelopmentPage />} />
          <Route path="/cloud-solutions" element={<CloudSolutionsPage />} />
          <Route path="/it-recruitment" element={<ITRecruitmentPage />} />
          <Route path="/it-consultation" element={<ITConsultationPage />} />
          <Route path="/tech-support" element={<TechSupportPage />} />
          <Route path="/digital-transformation" element={<DigitalTransformationPage />} />
          <Route path="/maintenance-support" element={<MaintenanceSupportPage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/our-team" element={<OurTeamPage />} />
          <Route path="/mission-vision" element={<MissionVisionPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/api-reference" element={<APIReferencePage />} />
          <Route path="/contact-support" element={<ContactSupportPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/privacy" element={<PrivacyPage />} />
           <Route path="/terms" element={<TermsPage />} />
           <Route path="/demo" element={<BookDemo />} />
         </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 