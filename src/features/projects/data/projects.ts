import { Project } from '../types';

// ✅ 이미지 import
import portfolioThumb from '../../../assets/images/projects/thumbnail_portfolio.webp';
import itplaceThumb from '../../../assets/images/projects/thumbnail_itplace.webp';
import jobthoughtsThumb from '../../../assets/images/projects/thumbnail_jobthoughts.webp';
import umateThumb from '../../../assets/images/projects/thumbnail_umate.webp';
import netflixThumb from '../../../assets/images/projects/thumbnail_netflix.webp';

export const PROJECTS: Project[] = [
  {
    id: 'Portfolio',
    title: '포트폴리오 사이트',
    coverImg: portfolioThumb,
    summary:
      '나의 프로젝트, 경험, 성장을 한눈에 확인할 수 있도록 직접 디자인하고 개발한 포트폴리오 사이트',
    stacks: ['react', 'typescript', 'tailwindcss', 'framer'],
  },
  {
    id: 'Itplace',
    title: '통신사 멤버십 혜택 지도',
    coverImg: itplaceThumb,
    summary:
      'LG U+ 멤버십 사용자가 전국 제휴처를 지도 기반으로 탐색하고, 맞춤형 혜택 추천을 받을 수 있는 플랫폼',
    stacks: ['react', 'typescript', 'redux', 'kakaomap', 'gsap'],
  },
  {
    id: 'Jobthoughts',
    title: '진로 탐색 & 채용 연계 서비스',
    coverImg: jobthoughtsThumb,
    summary:
      '사용자의 성향과 가치관에 맞는 직업을 추천하고, 그 직업의 채용 공고까지 연결하는 진로 탐색 및 채용 연계 서비스',
    stacks: ['react', 'typescript', 'zustand', 'nivo', 'framer'],
  },
  {
    id: 'Umate',
    title: '통신사 요금제 추천 AI 챗봇 및 리뷰 서비스',
    coverImg: umateThumb,
    summary:
      '통신사 요금제를 쉽고 빠르게 탐색하고, AI 챗봇과의 대화를 통해 사용자에게 맞춤형 요금제를 추천하는 서비스',
    stacks: ['react', 'typescript', 'zustand', 'nivo', 'framer'],
  },
  {
    id: 'Netflix',
    title: '웹 아키텍처의 이해',
    coverImg: netflixThumb,
    summary:
      '넷플릭스 홈페이지와 유사하게 클론 코딩하며, API를 활용하는 방법과 웹 아키텍처를 이해하는 프로젝트',
    stacks: ['react', 'typescript', 'zustand', 'nivo', 'framer'],
  },
];
