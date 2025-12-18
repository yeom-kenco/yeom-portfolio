import { CertificateItem, TimelineItem } from '../types';
import sqldCert from '../../../assets/images/cert/sqld-cert.webp';
import sqldScore from '../../../assets/images/cert/sqld-score.webp';
import opicCert from '../../../assets/images/cert/opic-cert.webp';
import ipeCert from '../../../assets/images/cert/ipe-cert.webp';
import ipeScore from '../../../assets/images/cert/ipe-score.webp';
import ipeScore2 from '../../../assets/images/cert/ipe-score-2.webp';

export const eduAndExperience: TimelineItem[] = [
  {
    date: '2020 - 2025',
    title: '국민대학교',
    subtitle: '경영정보(경영학사), 인포메이션테크놀로지(공학사) 전공 성적 우수 졸업',
    bullets: [
      '웹클라이언트컴퓨팅, 캡스톤디자인, 데이터분석프로그래밍, HCI 개론을 통해 UI/UX 설계, 사용자 경험 중심의 개발, 프론트엔드 학습',
      'Java, 객체지향 프로그래밍, 데이터베이스, 웹클라이언트컴퓨팅, 고급프로그래밍을 통해 컴퓨터 공학 기반의 지식 학습',
      '경영정보학원론, 경영혁신과정보기술, 디지털비즈니스, 데이터분석프로그래밍 등을 통해 IT와 경영을 융합한 문제 해결 능력 향상',
    ],
  },
  {
    date: '2025.01 - 2025.08',
    title: '[LG 유플러스] 유레카 2기 프론트엔드 개발자',
    subtitle: '멀티캠퍼스 & LG U+ 공동 주관 SW 개발자 양성 과정 수료',
    bullets: [
      '백엔드의 이해, 리액트 등 실무에 직접적으로 필요한 역량 학습',
      '총 4개의 프로젝트를 통해 협업 능력 및 실무 능력 함양',
    ],
  },
  {
    date: '2025.09',
    title: '[부스트 코스] Connect On: 테크와 나를 잇다 (업무자동화)',
    subtitle: '네이버 커넥트 재단 부스트 코스 생성형 AI를 활용한 업무자동화 과정 수료',
    bullets: [
      '우수 학습자 선정',
      'ChatGPT, KreaAI, Genspark 등 최신 생성형 AI 툴을 활용해 데이터 분석·업무 자동화·웹앱 프로토타입 제작 실습',
      'AI를 활용한 생산성 향상과 프론트엔드 개발 적용 경험',
    ],
  },
  {
    date: '2025.09',
    title: '[kakao x goorm] 구름톤 in JEJU 15기',
    subtitle: '개발자/디자이너/기획자가 모여 3박 4일간 진행되는 해커톤 참여',
    bullets: [
      '"제주도민의 삶을 바꾸는 생활 인프라 개선"을 주제로 한 서비스 제작',
      '기획자, 디자이너, 백엔드 개발자와 협업 경험',
      'Vapor 디자인 시스템을 활용한 UI 개발 경험',
    ],
  },
];

export const awards: TimelineItem[] = [
  {
    date: '2020.12.24',
    title: '[최우수상] 경영정보학부 홈페이지 개발 경진대회',
    subtitle: '56명 중 상위 3명',
    bullets: [
      '처음 접해본 HTML, CSS, GitHub과 같은 기초적인 웹 스택으로 요구사항을 철저히 지킨 완성도 있는 결과물 도출',
    ],
  },
  {
    date: '2021.11.25',
    title: '[최우수상] 경영정보학부 3개 대학(국민x동국x명지) 연합 학술제',
    subtitle: 'MZ세대를 위한 초개인화 비즈니스 모델 및 경영 전략 제시',
    bullets: [
      'MZ세대가 자주 사용하는 카메라 필터 어플과 AI를 전략적으로 융합하여 UI/UX를 고려한 비즈니스 모델 제시',
    ],
  },
  {
    date: '2024.06.30',
    title: '[최우수상] 전공 캡스톤 경진대회',
    subtitle: '자율 주제 캡스톤 경진대회',
    bullets: [
      '‘한 방에 약속을 쉽게 잡는 방법’ 이라는 주제의 어플을 제시',
      '시장성, 사용성을 고려한 서비스와 목업 디자인 도출',
    ],
  },
  {
    date: '2025.08.12',
    title: '[우수상] 유레카 최종 융합 프로젝트 경진대회',
    subtitle: '멀티캠퍼스 & LG U+ 공동 주관 SW 개발자 양성 과정 프로젝트',
    bullets: [
      '통신사 멤버십 혜택을 쉽고 스마트하게 탐색하는 지도 기반 플랫폼 구현',
      '디자인/프론트엔드 담당',
    ],
  },
];

export const certificates: CertificateItem[] = [
  {
    date: '2024.06.21',
    name: 'SQLD (SQL Developer)',
    images: [sqldCert, sqldScore],
    detailsLinkLabel: '취득 정보 자세히 보기',
  },
  {
    date: '2024.09.13',
    name: 'OPIc / 영어 IM2',
    images: [opicCert],
    detailsLinkLabel: '취득 정보 자세히 보기',
  },
  {
    date: '2024.10.20',
    name: '정보처리기사',
    images: [ipeCert, ipeScore, ipeScore2],
    detailsLinkLabel: '취득 정보 자세히 보기',
  },
];
