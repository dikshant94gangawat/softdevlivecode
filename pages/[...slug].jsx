import React from 'react';
import { useRouter } from 'next/router';
import ServicesPage from '../src/components/ServicesPage';
import MobileAppDevelopment from '../src/components/MobileAppDevelopment';
import FullStackDevelopment from '../src/components/FullStackDevelopment';
import AIDevelopment from '../src/components/AIDevelopment';
import FinTechPage from '../src/components/FinTechPage';
import HealthTechPage from '../src/components/HealthTechPage';
import EdTechPage from '../src/components/EdTechPage';
import ECommercePage from '../src/components/ECommercePage';
import StartupsPage from '../src/components/StartupsPage';
import SMEsPage from '../src/components/SMEsPage';
import EnterprisesPage from '../src/components/EnterprisesPage';
import AgenciesPage from '../src/components/AgenciesPage';
import CustomSolutionsPage from '../src/components/CustomSolutionsPage';
import SaaSDevelopmentPage from '../src/components/SaaSDevelopmentPage';
import DigitalPlatformsPage from '../src/components/DigitalPlatformsPage';
import IntegrationServicesPage from '../src/components/IntegrationServicesPage';
import BlockChainDevelopment from '../src/components/BlockChainDevelopment';
import UIUXDesign from '../src/components/UIUXDesign';
import SoftwareProductDevelopment from '../src/components/SoftwareProductDevelopment';
import PrivacyPage from '../src/components/PrivacyPage';
import TermsPage from '../src/components/TermsPage';
import ReactNodePage from '../src/components/ReactNodePage';
import ReactNativePage from '../src/components/ReactNativePage';
import JavaScriptTypeScriptPage from '../src/components/JavaScriptTypeScriptPage';
import PythonDevelopmentPage from '../src/components/PythonDevelopmentPage';
import CloudSolutionsPage from '../src/components/CloudSolutionsPage';
import ITRecruitmentPage from '../src/components/ITRecruitmentPage';
import ITConsultationPage from '../src/components/ITConsultationPage';
import TechSupportPage from '../src/components/TechSupportPage';
import DigitalTransformationPage from '../src/components/DigitalTransformationPage';
import MaintenanceSupportPage from '../src/components/MaintenanceSupportPage';
import OurStoryPage from '../src/components/OurStoryPage';
import OurTeamPage from '../src/components/OurTeamPage';
import MissionVisionPage from '../src/components/MissionVisionPage';
import CareersPage from '../src/components/CareersPage';
import PortfolioPage from '../src/components/PortfolioPage';
import CaseStudiesPage from '../src/components/CaseStudiesPage';
import BlogPage from '../src/components/BlogPage';
import PricingPage from '../src/components/PricingPage';
import HelpCenterPage from '../src/components/HelpCenterPage';
import DocumentationPage from '../src/components/DocumentationPage';
import APIReferencePage from '../src/components/APIReferencePage';
import ContactSupportPage from '../src/components/ContactSupportPage';
import AboutPage from '../src/components/AboutPage';
import ContactPage from '../src/components/ContactPage';
import IndustriesPage from '../src/components/IndustriesPage';
import MobileAppDevelopment2 from '../src/components/MobileAppDevelopment';

const routeMap = {
  'services': ServicesPage,
  'mobile-app-development': MobileAppDevelopment,
  'full-stack-development': FullStackDevelopment,
  'ai-development': AIDevelopment,
  'fintech': FinTechPage,
  'healthtech': HealthTechPage,
  'edtech': EdTechPage,
  'ecommerce': ECommercePage,
  'startups': StartupsPage,
  'smes': SMEsPage,
  'enterprises': EnterprisesPage,
  'agencies': AgenciesPage,
  'custom-solutions': CustomSolutionsPage,
  'saas-development': SaaSDevelopmentPage,
  'digital-platforms': DigitalPlatformsPage,
  'integration-services': IntegrationServicesPage,
  'blockchain-development': BlockChainDevelopment,
  'uiux-design': UIUXDesign,
  'software-product-development': SoftwareProductDevelopment,
  'privacy': PrivacyPage,
  'terms': TermsPage,
  'react-nodejs': ReactNodePage,
  'react-native': ReactNativePage,
  'javascript-typescript': JavaScriptTypeScriptPage,
  'python-development': PythonDevelopmentPage,
  'cloud-solutions': CloudSolutionsPage,
  'it-recruitment': ITRecruitmentPage,
  'it-consultation': ITConsultationPage,
  'tech-support': TechSupportPage,
  'digital-transformation': DigitalTransformationPage,
  'maintenance-support': MaintenanceSupportPage,
  'our-story': OurStoryPage,
  'our-team': OurTeamPage,
  'mission-vision': MissionVisionPage,
  'careers': CareersPage,
  'portfolio': PortfolioPage,
  'case-studies': CaseStudiesPage,
  'blog': BlogPage,
  'pricing': PricingPage,
  'help-center': HelpCenterPage,
  'documentation': DocumentationPage,
  'api-reference': APIReferencePage,
  'contact-support': ContactSupportPage,
  'about': AboutPage,
  'contact': ContactPage,
  'industries': IndustriesPage,
};

export default function CatchAllPage({ pageKey }) {
  const PageComponent = routeMap[pageKey] || null;
  if (!PageComponent) {
    return <div style={{ padding: 40 }}><h1>Page not found</h1></div>;
  }
  return <PageComponent />;
}

export async function getServerSideProps({ params }) {
  const slug = params.slug || [];
  const pageKey = slug.join('/');
  return { props: { pageKey } };
}

