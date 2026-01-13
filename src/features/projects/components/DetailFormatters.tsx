// [디자인 시스템] 텍스트 하이라이터
export const TextHighlight = ({
  color,
  children,
}: {
  color: 'red' | 'blue' | 'green' | 'purple';
  children: string;
}) => {
  const styles = {
    red: 'bg-red-50 text-red-600', // Problem
    blue: 'bg-blue-50 text-blue-600', // Goal, Mission
    green: 'bg-emerald-50 text-emerald-600', // Action, Solution
    purple: 'bg-purple-50 text-purple-600', // Result, Outcome
  };

  return (
    <span className={`font-bold px-1 rounded-[2px] mr-1.5 ${styles[color]}`}>[{children}]</span>
  );
};

// [디자인 시스템] Notion 스타일 Callout (회고/배운점 강조 박스)
export const Callout = ({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-slate-50 border border-slate-200 rounded-md p-3.5 mt-2 text-sm text-slate-700 leading-relaxed shadow-sm">
    <div className="font-bold text-slate-900 mb-1.5 flex items-center gap-2 text-[15px]">
      <span className="text-lg">{icon}</span> {title}
    </div>
    <div className="text-slate-600 pl-7">{children}</div>
  </div>
);
