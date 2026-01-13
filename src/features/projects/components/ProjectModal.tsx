import BaseModal from '../../../components/modals/BaseModal';
import TechIcons from './TechIcons';
import LinkChips from './LinkChips';
import { ProjectDetail } from '../types';

/**
 * [수정 포인트]
 * 1. 기존의 ul/li list-disc 스타일 제거
 * 2. Flexbox(flex, items-start)를 사용하여 불릿과 텍스트 영역 분리
 * 3. shrink-0 속성으로 불릿이 찌그러지지 않게 고정
 * 4. flex-1 속성으로 텍스트가 남은 공간을 모두 차지하며 정렬되도록 처리
 */

// 커스텀 불릿 컴포넌트 (메인 불릿)
const MainBullet = () => (
  <span className="shrink-0 w-1.5 h-1.5 mt-[0.6rem] rounded-full bg-slate-800 mx-3" />
);

// 서브 불릿 컴포넌트 (하위 항목용)
const SubBullet = () => (
  <span className="shrink-0 w-1 h-1 mt-[0.5rem] rounded-full bg-slate-400 mr-2.5" />
);

export default function ProjectModal({
  open,
  onClose,
  detail,
}: {
  open: boolean;
  onClose: () => void;
  detail?: ProjectDetail;
}) {
  return (
    <BaseModal isOpen={open} onClose={onClose} className="p-0">
      {!detail ? null : (
        <div className="p-6 md:p-12">
          {/* 큰 타이틀 */}
          <h2 className="whitespace-pre-wrap font-heading text-[clamp(22px,2.5vw,36px)] font-extrabold leading-tight text-ink">
            {detail.title}
          </h2>

          {/* 프로젝트 설명 */}
          <section className="mt-10">
            <p className="text-sm md:text-base font-body text-ink-muted">프로젝트 설명</p>
            <div className="max-w-2xl mt-3 font-bold space-y-1.5 text-[clamp(14px,1.1vw,16px)] text-ink">
              {detail.description.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          </section>

          {/* 기술스택 */}
          <section className="mt-8">
            <p className="text-sm font-body text-ink-muted">기술스택</p>
            <div className="mt-3">
              <TechIcons stacks={detail.stacks} />
            </div>
          </section>

          {/* 메타 (참여 인원 / 기간) */}
          {(detail.team || detail.period) && (
            <section className="mt-8 grid grid-cols-1 gap-4 text-ink md:grid-cols-3">
              <div>
                <p className="text-sm font-body text-ink-muted">참여 인원</p>
                <p className="mt-1 font-bold text-[clamp(14px,1.1vw,16px)]">{detail.team}</p>
              </div>
              <div>
                <p className="text-sm font-body text-ink-muted">기간</p>
                <p className="mt-1 font-bold text-[clamp(14px,1.1vw,16px)]">{detail.period}</p>
              </div>
            </section>
          )}

          {/* 관련 링크 */}
          {!!detail.links?.length && (
            <section className="mt-8">
              <p className="text-sm font-body text-ink-muted">관련 링크</p>
              <div className="mt-3 font-bold">
                <LinkChips links={detail.links} />
              </div>
            </section>
          )}

          {/* 구분선 */}
          <div className="my-8 h-px w-full bg-[#EAEAEA]" />

          {/* 상세 내용 */}
          <section className="mb-2">
            <h3 className="text-[clamp(18px,1.6vw,22px)] font-heading font-extrabold text-ink">
              상세 내용
            </h3>

            {/* 번호가 붙는 하위 섹션들(1., 2., 3. ...)을 순서대로 출력 */}
            <div className="mt-6 space-y-10">
              {detail.sections.map((sec, idx) => (
                <div key={idx}>
                  {/* 하위 섹션 제목: 예) '1. 프로젝트 개요' */}
                  <h4 className="text-[clamp(16px,1.4vw,20px)] font-heading font-extrabold text-ink mb-4">
                    {sec.title}
                  </h4>

                  {/* 케이스 1: "그룹 기반(2단계 목록)" */}
                  {sec.groups?.length ? (
                    <ul className="space-y-4">
                      {sec.groups.map((g, gi) => (
                        <li key={gi} className="flex items-start">
                          {/* 1. 메인 불릿 (Flex Item) */}
                          <MainBullet />

                          {/* 2. 텍스트 영역 (Flex Item - 남은 공간 차지) */}
                          <div className="flex-1">
                            {/* 소제목(굵게) */}
                            {/* span 대신 div 사용: heading 안에 태그(block요소)가 들어올 수 있으므로 */}
                            <div className="font-extrabold text-ink leading-relaxed">
                              {g.heading}
                            </div>

                            {/* 소제목의 하위 불릿들 */}
                            {g.items?.length ? (
                              <ul className="mt-2 space-y-2">
                                {g.items.map((it, ii) => (
                                  <li key={ii} className="flex items-start">
                                    {/* 서브 불릿 */}
                                    <SubBullet />
                                    {/* 서브 텍스트 */}
                                    <span className="flex-1 text-[clamp(14px,1.1vw,16px)] text-ink leading-relaxed">
                                      {it}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    /* 케이스 2: "단일 불릿 목록" (groups가 없고 bullets가 있을 때) */
                    !!sec.bullets?.length && (
                      <ul className="space-y-2">
                        {sec.bullets.map((b, i) => (
                          <li key={i} className="flex items-start">
                            {/* 메인 불릿 */}
                            <MainBullet />
                            {/* 텍스트 */}
                            <span className="flex-1 font-bold text-[clamp(14px,1.1vw,16px)] text-ink leading-relaxed">
                              {b}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </BaseModal>
  );
}
