import { useState, useEffect } from "react";
import { Hero } from "./components/Hero";
import { Philosophy } from "./components/Philosophy";
import { About } from "./components/About";
import { WhosItFor } from "./components/WhosItFor";
import { GroupCourse } from "./components/GroupCourse";
import { WhatWillHappen } from "./components/WhatWillHappen";
import { Schedule } from "./components/Schedule";
import { WhyTenSessions } from "./components/WhyTenSessions";
import { Benefits } from "./components/Benefits";
import { Testimonials } from "./components/Testimonials";
import { ClientQuotes } from "./components/ClientQuotes";
import { CallToAction } from "./components/CallToAction";
import { Contact } from "./components/Contact";
import { CookieConsent } from "./components/CookieConsent";
import { GroupRulesPage } from "./components/GroupRulesPage";
import { SEOHead } from "./components/SEOHead";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'rules'>('home');

  useEffect(() => {
    const handleNavigateToRules = () => {
      setCurrentPage('rules');
    };

    window.addEventListener('navigate-to-rules', handleNavigateToRules);
    
    return () => {
      window.removeEventListener('navigate-to-rules', handleNavigateToRules);
    };
  }, []);

  if (currentPage === 'rules') {
    return (
      <>
        <SEOHead 
          title="Правила психотерапевтичної групи | Юлія Сторожевська"
          description="Правила участі в груповій психотерапії - етичні норми, конфіденційність, безпека учасників. Умови роботи в терапевтичній групі."
          keywords="правила групової терапії, психотерапевтична група, етичні норми, конфіденційність, групова психотерапія, Юлія Сторожевська"
          canonicalUrl="https://yulia-storozhevska.com/group-rules"
          currentPage="rules"
        />
        <GroupRulesPage onBack={() => setCurrentPage('home')} />
      </>
    );
  }

  return (
    <>
      <SEOHead currentPage="home" />
      <div className="min-h-screen bg-stone-50/50">
        <Hero />
        <Philosophy />
        <About />
        <WhosItFor />
        <GroupCourse />
        <WhatWillHappen />
        <Schedule />
        <WhyTenSessions />
        <Benefits />
        <Testimonials />
        <ClientQuotes />
        <CallToAction onRulesClick={() => setCurrentPage('rules')} />
        <Contact />
        <CookieConsent />
      </div>
    </>
  );
}