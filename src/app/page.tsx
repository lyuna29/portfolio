"use client";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Intro } from "./components/Intro";
import { SkillsSection } from "./components/Skills";
import { ProjectsSection } from "./components/Projects";
import { MeSection } from "./components/Me";

type SectionId = "about" | "skills" | "projects" | "me";

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (sectionId: SectionId) => {
    if (isScrolling) return;

    setIsScrolling(true);
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = window.innerWidth < 768 ? 120 : 80;
      const elementPosition = element.offsetTop - navHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });

      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
    setActiveSection(sectionId);
  };

  const handleWheelEvent = (e: WheelEvent) => {
    // 모바일에서는 wheel 이벤트 처리하지 않음
    if (window.innerWidth < 768) return;

    if (isScrolling) {
      e.preventDefault();
      return;
    }

    const sections = ["about", "skills", "projects", "me"];
    const currentIndex = sections.indexOf(activeSection);

    if (e.deltaY > 0 && currentIndex < sections.length - 1) {
      scrollToSection(sections[currentIndex + 1] as SectionId);
    } else if (e.deltaY < 0 && currentIndex > 0) {
      scrollToSection(sections[currentIndex - 1] as SectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = ["about", "skills", "projects", "me"];
      const navHeight = window.innerWidth < 768 ? 120 : 80;

      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= navHeight && rect.bottom > navHeight;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection as SectionId);
      }
    };

    // 데스크톱에서만 wheel 이벤트 리스너 추가
    if (window.innerWidth >= 768) {
      window.addEventListener("wheel", handleWheelEvent, { passive: false });
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (window.innerWidth >= 768) {
        window.removeEventListener("wheel", handleWheelEvent);
      }
    };
  }, [isScrolling, activeSection]);

  return (
    <main className="min-h-screen gradient-animation text-purple-900">
      <Header activeSection={activeSection} scrollToSection={scrollToSection} />
      <Intro scrollToSection={scrollToSection} />
      <SkillsSection />
      <ProjectsSection />
      <MeSection />
      <footer className="bg-white py-8 border-t border-purple-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-purple-600">
            © 임현아. Frontend Developer Portfolio
          </p>
        </div>
      </footer>
    </main>
  );
}
