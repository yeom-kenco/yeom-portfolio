import BaseModal from '../../../components/modals/BaseModal';
import TechIcons from './TechIcons';
import LinkChips from './LinkChips';
import { ProjectDetail } from '../types';

/**
 * 스크린샷 레이아웃을 그대로 반영:
 * - 상단: 큰 타이틀
 * - "프로젝트 설명" / 설명 단락
 * - "기술스택" / devicon 아이콘 줄
 * - "참여 인원" / "기간" 2열 메타
 * - "관련 링크" 칩
 * - 구분선
 * - "상세 내용" 섹션: 1,2,3,4 번호 제목 + 불릿
 */
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
        <div className="p-6 md:p-8">
          {/* 큰 타이틀 */}
          <h2 className="whitespace-pre-wrap font-heading text-[clamp(22px,2.5vw,36px)] font-extrabold leading-tight text-ink">
            {detail.title}
          </h2>

          {/* 프로젝트 설명 */}
          <section className="mt-8">
            <p className="text-sm font-semibold text-ink-muted">프로젝트 설명</p>
            <div className="mt-3 space-y-1.5 text-[clamp(14px,1.1vw,16px)] text-ink">
              {detail.description.map((d, i) => (
                <p key={i}>{d}</p>
              ))}
            </div>
          </section>

          {/* 기술스택 */}
          <section className="mt-8">
            <p className="text-sm font-semibold text-ink-muted">기술스택</p>
            <div className="mt-3">
              <TechIcons stacks={detail.stacks} />
            </div>
          </section>

          {/* 메타 (참여 인원 / 기간) */}
          {(detail.team || detail.period) && (
            <section className="mt-8 grid grid-cols-1 gap-4 text-ink md:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-ink-muted">참여 인원</p>
                <p className="mt-1 text-[clamp(14px,1.1vw,16px)]">{detail.team}</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink-muted">기간</p>
                <p className="mt-1 text-[clamp(14px,1.1vw,16px)]">{detail.period}</p>
              </div>
            </section>
          )}

          {/* 관련 링크 */}
          {!!detail.links?.length && (
            <section className="mt-8">
              <p className="text-sm font-semibold text-ink-muted">관련 링크</p>
              <div className="mt-3">
                <LinkChips links={detail.links} />
              </div>
            </section>
          )}

          {/* 구분선 */}
          <div className="my-8 h-px w-full bg-[#EAEAEA]" />

          {/* 상세 내용 */}
          <section className="mb-2">
            <h3 className="text-[clamp(18px,1.6vw,22px)] font-extrabold text-brand-purple">
              상세 내용
            </h3>

            <div className="mt-4 space-y-8">
              {detail.sections.map((sec, idx) => (
                <div key={idx}>
                  <h4 className="text-[clamp(16px,1.4vw,20px)] font-extrabold text-brand-purple">
                    {sec.title}
                  </h4>
                  <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[clamp(14px,1.1vw,16px)] text-ink">
                    {sec.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </BaseModal>
  );
}
