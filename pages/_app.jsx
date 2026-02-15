import React, { useEffect } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../src/styles/index.css';
import '../src/styles/App.css';
// Temporary global imports to keep build stable while migrating to CSS Modules.
// These will be removed once all components are converted to CSS Modules.
import '../src/components/UIUXDesign.css';
import '../src/components/TermsPage.css';
import '../src/components/TechSupportPage.css';
import '../src/components/StartupsPage.css';
import '../src/components/SoftwareProductDevelopment.css';
import '../src/components/SignIn.css';
import '../src/components/ServicesPage.css';
import '../src/components/Services.css';
import '../src/components/SaaSDevelopmentPage.css';
import '../src/components/SMEsPage.css';
import '../src/components/ReactNodePage.css';
import '../src/components/ReactNativePage.css';
import '../src/components/PythonDevelopmentPage.css';
import '../src/components/PrivacyPage.css';
import '../src/components/PricingPage.css';
import '../src/components/PortfolioPage.css';
import '../src/components/OurTeamPage.css';
import '../src/components/OurStoryPage.css';
import '../src/components/MobileAppDevelopment.css';
import '../src/components/Mobile-Cards-Enhancement.css';
import '../src/components/MissionVisionPage.css';
import '../src/components/MaintenanceSupportPage.css';
import '../src/components/JavaScriptTypeScriptPage.css';
import '../src/components/IntegrationServicesPage.css';
import '../src/components/IndustriesPage.css';
import '../src/components/ITRecruitmentPage.css';
import '../src/components/ITConsultationPage.css';
import '../src/components/Hero.css';
import '../src/components/Hero-mobile.css';
import '../src/components/HelpCenterPage.css';
import '../src/components/HealthTechPage.css';
import '../src/components/Header.css';
import '../src/components/FullStackDevelopment.css';
import '../src/components/Footer.css';
import '../src/components/FinTechPage.css';
import '../src/components/EnterprisesPage.css';
import '../src/components/EdTechPage.css';
import '../src/components/ECommercePage.css';
import '../src/components/DocumentationPage.css';
import '../src/components/DigitalTransformationPage.css';
import '../src/components/DigitalPlatformsPage.css';
import '../src/components/CustomSolutionsPage.css';
import '../src/components/ContactSupportPage.css';
import '../src/components/ContactPage.css';
import '../src/components/Contact.css';
import '../src/components/CloudSolutionsPage.css';
import '../src/components/CaseStudiesPage.css';
import '../src/components/CareersPage.css';
import '../src/components/BookDemo.css';
import '../src/components/BlogPage.css';
import '../src/components/BlockChainDevelopment.css';
import '../src/components/AgenciesPage.css';
import '../src/components/AboutPage.css';
import '../src/components/About.css';
import '../src/components/APIReferencePage.css';
import '../src/components/AIDevelopment.css';
import '../src/components/ServicesPage.css';
import '../src/components/Services.css';
import { useRouter } from 'next/router';

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

