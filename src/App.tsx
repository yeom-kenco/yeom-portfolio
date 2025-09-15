// src/App.tsx
// 섹션/프리미티브
import Hero from './sections/Hero';
import Section from './primitives/Section';
import Container from './primitives/Container';
import { H2 } from './primitives/Heading';
import Text from './primitives/Text';

// 상단 스티키 내비게이션
import StickyNav from './components/nav/StickyNav';

// 내비게이션에 사용할 섹션 정의(앵커 id + 라벨)
const sections = [
  { id: 'exp', label: '교육 및 경험' },
  { id: 'projects', label: '프로젝트' },
  { id: 'skills', label: '기술' },
  { id: 'contact', label: 'Contact' },
];

// 아직 실제 컨텐츠가 없는 섹션은 플레이스홀더로 표시
function Placeholder({ id, title }: { id: string; title: string }) {
  return (
    <Section id={id} className="bg-surface">
      <Container>
        <H2 className="text-brand-purple">#{title}</H2>
        <Text muted>이 영역은 다음 단계에서 실제 컨텐츠로 채웁니다.</Text>
      </Container>
    </Section>
  );
}

export default function App() {
  return (
    <>
      {/* 스크롤 이후 등장·고정되는 네비게이션 */}
      <StickyNav sections={sections} appearWithinId="top" pinAtId="exp" />

      {/* 섹션-1: 도입부(히어로) */}
      <Hero />

      {/* 이후 섹션들(앵커만 우선 만들어 둠) */}
      {sections.map((s) => (
        <Placeholder key={s.id} id={s.id} title={s.label} />
      ))}
    </>
  );
}
