// src/App.tsx
import AboutMeSection from './sections/AboutMeSection';
import { Suspense, lazy } from 'react';

// 섹션/프리미티브
import Hero from './sections/Hero';
import ToastViewport from './components/toast/ToastViewport';

// 상단 스티키 내비게이션
import StickyNav from './components/nav/StickyNav';

// Lazy-loaded Sections
const ProjectsSection = lazy(() => import('./sections/ProjectsSection'));
const TechStackSection = lazy(() => import('./sections/TechStackSection'));
const EduExpSection = lazy(() => import('./sections/EduExpSection'));
const ContactSection = lazy(() => import('./sections/ContactSection'));

// 내비게이션에 사용할 섹션 정의(앵커 id + 라벨)
const sections = [
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술' },
  { id: 'exp', label: '교육 및 경험' },
  { id: 'contact', label: 'Contact' },
];

export default function App() {
  return (
    <>
      {/* 스크롤 이후 등장·고정되는 네비게이션 */}
      <StickyNav sections={sections} />

      {/* 섹션-1: 도입부(히어로) */}
      <Hero />

      {/* 섹션-2: 자기소개 */}
      <AboutMeSection />

      {/* 섹션-3: 프로젝트 */}
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 min-h-[700px] md:min-h-[900px] lg:min-h-[1000px] rounded-lg mb-20" />
        }
      >
        <ProjectsSection />
      </Suspense>

      {/* 섹션-4: 기술 스택 */}
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] rounded-lg mb-20" />
        }
      >
        <TechStackSection />
      </Suspense>

      {/* 섹션-5: 교육 및 경험 */}
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 min-h-[500px] md:min-h-[700px] lg:min-h-[800px] rounded-lg mb-20" />
        }
      >
        <EduExpSection />
      </Suspense>

      {/* 섹션-6: 연락 */}
      <Suspense
        fallback={
          <div className="animate-pulse bg-gray-200 min-h-[300px] md:min-h-[350px] lg:min-h-[400px] rounded-lg mb-20" />
        }
      >
        <ContactSection />
      </Suspense>

      <ToastViewport />
    </>
  );
}
