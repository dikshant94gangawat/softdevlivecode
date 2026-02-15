import React, { useEffect } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/index.css';
import '../src/styles/App.css';
// Component-level CSS imports have been moved into each component as CSS Modules.
import { useRouter } from 'next/router';

// Legacy component CSS (non-module) kept for backwards compatibility.
import '../src/components/APIReferencePage 2.css';
import '../src/components/APIReferencePage.css';
import '../src/components/About.css';
import '../src/components/AboutPage.css';
import '../src/components/AgenciesPage.css';
import '../src/components/BlockChainDevelopment 2.css';
import '../src/components/BlockChainDevelopment.css';
import '../src/components/BlogPage 2.css';
import '../src/components/BlogPage.css';
import '../src/components/BookDemo.css';
import '../src/components/CareersPage 2.css';
import '../src/components/CareersPage.css';
import '../src/components/CaseStudiesPage 2.css';
import '../src/components/CaseStudiesPage.css';
import '../src/components/CloudSolutionsPage 2.css';
import '../src/components/CloudSolutionsPage.css';
import '../src/components/Contact.css';
import '../src/components/ContactPage.css';
import '../src/components/ContactSupportPage 2.css';
import '../src/components/ContactSupportPage.css';
import '../src/components/CustomSolutionsPage 2.css';
import '../src/components/CustomSolutionsPage.css';
import '../src/components/DigitalPlatformsPage 2.css';
import '../src/components/DigitalPlatformsPage.css';
import '../src/components/DigitalTransformationPage 2.css';
import '../src/components/DigitalTransformationPage.css';
import '../src/components/DocumentationPage 2.css';
import '../src/components/DocumentationPage.css';
import '../src/components/ECommercePage.css';
import '../src/components/EdTechPage.css';
import '../src/components/EnterprisesPage 2.css';
import '../src/components/EnterprisesPage.css';
import '../src/components/FinTechPage 2.css';
import '../src/components/FinTechPage.css';
import '../src/components/Footer.css';
import '../src/components/FullStackDevelopment.css';
import '../src/components/Header.css';
import '../src/components/HealthTechPage.css';
import '../src/components/HelpCenterPage 2.css';
import '../src/components/HelpCenterPage.css';
import '../src/components/Hero-mobile 2.css';
import '../src/components/Hero-mobile.css';
import '../src/components/Hero.css';
import '../src/components/ITConsultationPage 2.css';
import '../src/components/ITConsultationPage.css';
import '../src/components/ITRecruitmentPage 2.css';
import '../src/components/ITRecruitmentPage.css';
import '../src/components/IndustriesPage.css';
import '../src/components/IntegrationServicesPage 2.css';
import '../src/components/IntegrationServicesPage.css';
import '../src/components/JavaScriptTypeScriptPage 2.css';
import '../src/components/JavaScriptTypeScriptPage.css';
import '../src/components/MaintenanceSupportPage 2.css';
import '../src/components/MaintenanceSupportPage.css';
import '../src/components/MissionVisionPage 2.css';
import '../src/components/MissionVisionPage.css';
import '../src/components/Mobile-Cards-Enhancement 2.css';
import '../src/components/Mobile-Cards-Enhancement.css';
import '../src/components/MobileAppDevelopment 2.css';
import '../src/components/MobileAppDevelopment.css';
import '../src/components/OurStoryPage 2.css';
import '../src/components/OurStoryPage.css';
import '../src/components/OurTeamPage 2.css';
import '../src/components/OurTeamPage.css';
import '../src/components/PortfolioPage 2.css';
import '../src/components/PortfolioPage.css';
import '../src/components/PricingPage 2.css';
import '../src/components/PricingPage.css';
import '../src/components/PrivacyPage 2.css';
import '../src/components/PrivacyPage.css';
import '../src/components/PythonDevelopmentPage 2.css';
import '../src/components/PythonDevelopmentPage.css';
import '../src/components/ReactNativePage 2.css';
import '../src/components/ReactNativePage.css';
import '../src/components/ReactNodePage 2.css';
import '../src/components/ReactNodePage.css';
import '../src/components/SMEsPage.css';
import '../src/components/SaaSDevelopmentPage.css';
import '../src/components/Services.css';
import '../src/components/ServicesPage.css';
import '../src/components/SignIn.css';
import '../src/components/SoftwareProductDevelopment.css';
import '../src/components/StartupsPage.css';
import '../src/components/TechSupportPage 2.css';
import '../src/components/TechSupportPage.css';
import '../src/components/TermsPage.css';
import '../src/components/UIUXDesign 2.css';
import '../src/components/UIUXDesign.css';
function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

