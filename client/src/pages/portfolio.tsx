import { useEffect } from "react";
import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/sections/hero-section";
import ExpertiseSection from "@/components/sections/expertise-section";
import ServicesSection from "@/components/sections/services-section";
import ProjectsSection from "@/components/sections/projects-section";
import VisualizationsSection from "@/components/sections/visualizations-section";
import RecognitionSection from "@/components/sections/recognition-section";
import TeamSection from "@/components/sections/team-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/ui/footer";

export default function Portfolio() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Fade in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="smooth-scroll">
      <Navigation />
      <HeroSection />
      <ExpertiseSection />
      <ServicesSection />
      <ProjectsSection />
      <VisualizationsSection />
      <RecognitionSection />
      {/* <TeamSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
