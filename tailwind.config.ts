/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },

      // 🎨 Palette
      colors: {
        surface: {
          DEFAULT: '#FDFDFD', // white
          soft: '#F1F1F1', // light-gray
        },
        ink: {
          DEFAULT: '#393939', // black
          muted: '#848484', // dark-gray
        },
        brand: {
          purple: '#A091FF',
          lavender: '#C3A9FB',
          pink: '#E8B4EF',
        },
      },

      // Box shadows (spread 지원)
      boxShadow: {
        // x:0 y:0 blur:10 spread:1 color:#A091FF @55%
        'brand-glow': '0 0 10px 1px rgba(160,145,255,0.55)',
        // x:0 y:4 blur:12 color:#000 @10%
        elev: '0 4px 12px rgba(0,0,0,0.10)',
      },

      // Drop shadows (filter; spread 없음)
      dropShadow: {
        brand: '0 0 10px rgba(160,145,255,0.55)',
        elev: '0 4px 12px rgba(0,0,0,0.10)',
      },

      // 포커스 링에서 브랜드 컬러 쓰고 싶을 때
      ringColor: {
        brand: '#A091FF',
      },
    },
  },
  plugins: [],
};

/*
////사용 예시
// 배경/텍스트
<div className="bg-surface text-ink">...</div>
<div className="bg-surface-soft text-ink-muted">...</div>

// 브랜드 색
<button className="bg-brand-purple text-white">버튼</button>
<span className="text-brand-lavender">라벨</span>
<Badge className="bg-brand-pink/20 text-brand-pink">NEW</Badge>

// 섀도우 (box-shadow)
<Card className="shadow-elev">컨텐츠</Card>
<Button className="shadow-brand-glow">이력서 다운로드</Button>

// 드롭섀도우 (filter)
<Image className="drop-shadow-brand" />
<Fab className="drop-shadow-elev" />
*/
