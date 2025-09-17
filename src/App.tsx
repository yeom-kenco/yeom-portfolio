// src/App.tsx
// 섹션/프리미티브
import Hero from './sections/Hero';
import AboutMeSection from './sections/AboutMeSection';
import ToastViewport from './components/toast/ToastViewport';

// 상단 스티키 내비게이션
import StickyNav from './components/nav/StickyNav';

import EduExpSection from './sections/EduExpSection';
import ProjectsSection from './sections/ProjectsSection';
import 'devicon/devicon.min.css';
import TechStackSection from './sections/TechStackSection';
import ContactSection from './sections/ContactSection';

// 내비게이션에 사용할 섹션 정의(앵커 id + 라벨)
const sections = [
  { id: 'exp', label: '교육 및 경험' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  return (
    <>
      {/* 스크롤 이후 등장·고정되는 네비게이션 */}
      <StickyNav sections={sections} appearWithinId="top" pinAtId="about" />

      {/* 섹션-1: 도입부(히어로) */}
      <Hero />
      <AboutMeSection />
      <EduExpSection />
      <ProjectsSection />
      <TechStackSection />
      <ContactSection />

      <ToastViewport />
    </>
  );
}
