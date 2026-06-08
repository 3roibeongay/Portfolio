import React from 'react';
import type { Project } from '../types';

const PROJECTS_DATA: Project[] = [
  {
    id: '1',
    title: 'Thao tác cơ bản với tệp tin và thư mục',
    description: 'Rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp tin và thư mục một cách thành thạo trên hệ điều hành Windows (có thể điều chỉnh cho macOS/Linux).',
  },
  {
    id: '2',
    title: 'Tìm kiếm và đánh giá thông tin học thuật',
    description: 'Phát triển kỹ năng tìm kiếm và đánh giá thông tin học thuật từ các nguồn đáng tin cậy.',
    href: 'https://drive.google.com/file/d/1jjnThWx0hygMA8EgPtmp4wF1EMeAeXee/view?usp=sharing',
  },
  {
    id: '3',
    title: 'Viết Prompt hiệu quả cho các tác vụ học tập',
    description: 'Phát triển kỹ năng viết prompt hiệu quả để tận dụng tối đa khả năng của các mô hình ngôn ngữ lớn trong học tập.',
    href: 'https://drive.google.com/file/d/1IO_ljdHWi7YOUx35pgTwCxF6qyAyn3bc/view?usp=sharing',
  },
  {
    id: '4',
    title: 'Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm',
    description: 'Thành thạo các công cụ hợp tác trực tuyến và thể hiện năng lực quản lý, điều phối cá nhân trong dự án nhóm.',
  },
  {
    id: '5',
    title: 'Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung',
    description: 'Thành thạo việc sử dụng các công cụ AI tạo sinh để hỗ trợ quá trình sáng tạo nội dung số.',
  },
  {
    id: '6',
    title: 'Sử dụng AI có trách nhiệm trong học tập và nghiên cứu',
    description: 'Phát triển kỹ năng sử dụng AI có trách nhiệm và đạo đức trong học tập và nghiên cứu.',
    href: 'https://drive.google.com/file/d/17QVQOUEZ_IsxMpW4qKx9Y_EdxW-DdwLR/view?usp=sharing',
  },
];

export const Projects: React.FC = () => {

  // Helper to render a placeholder SVG tailored to the project's title
  const renderProjectPlaceholder = (project?: Project) => {
    const title = project?.title ?? '';
    const t = title.toLowerCase();
    let type: 'search' | 'prompt' | 'ai' | 'collab' | 'files' | 'web' = 'web';
    if (t.includes('tìm kiếm') || t.includes('thông tin') || t.includes('tìm')) type = 'search';
    else if (t.includes('prompt') || t.includes('prompt')) type = 'prompt';
    else if (t.includes('ai') || t.includes('ai tạo') || t.includes('ai')) type = 'ai';
    else if (t.includes('hợp tác') || t.includes('nhóm') || t.includes('cộng tác')) type = 'collab';
    else if (t.includes('tệp') || t.includes('tập tin') || t.includes('file')) type = 'files';

    const titleTrunc = title.length > 36 ? title.slice(0, 33) + '...' : title;

    // Base SVG frame shared across types
    return (
      <svg viewBox="0 0 400 220" width="100%" height="100%" style={{ background: '#0a0e17', display: 'block' }}>
        <defs>
          <pattern id="grid-project" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.015)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="400" height="220" fill="url(#grid-project)" />
        <rect x="20" y="20" width="360" height="180" rx="8" fill="#111827" stroke="rgba(255,255,255,0.03)" />

        {/* Icon area */}
        <g transform="translate(120,50)">
          {type === 'search' && (
            <g>
              <circle cx="60" cy="40" r="30" fill="none" stroke="rgba(59,130,246,0.25)" strokeWidth="3" />
              <line x1="85" y1="65" x2="110" y2="90" stroke="rgba(59,130,246,0.25)" strokeWidth="6" strokeLinecap="round" />
            </g>
          )}

          {type === 'prompt' && (
            <g>
              <rect x="20" y="20" width="120" height="60" rx="8" fill="rgba(99,102,241,0.06)" stroke="rgba(99,102,241,0.18)" />
              <path d="M 40 80 L 56 64 L 56 80 Z" fill="rgba(99,102,241,0.06)" />
              <rect x="40" y="34" width="80" height="8" rx="4" fill="rgba(255,255,255,0.08)" />
              <rect x="40" y="50" width="56" height="6" rx="3" fill="rgba(255,255,255,0.04)" />
            </g>
          )}

          {type === 'ai' && (
            <g>
              <circle cx="20" cy="40" r="8" fill="rgba(16,185,129,0.18)" />
              <circle cx="60" cy="20" r="8" fill="rgba(59,130,246,0.18)" />
              <circle cx="100" cy="40" r="8" fill="rgba(139,92,246,0.18)" />
              <line x1="28" y1="38" x2="52" y2="24" stroke="rgba(255,255,255,0.06)" />
              <line x1="68" y1="24" x2="92" y2="38" stroke="rgba(255,255,255,0.06)" />
            </g>
          )}

          {type === 'collab' && (
            <g>
              <circle cx="50" cy="40" r="14" fill="rgba(255,255,255,0.04)" />
              <circle cx="90" cy="40" r="14" fill="rgba(255,255,255,0.03)" />
              <rect x="26" y="60" width="36" height="10" rx="4" fill="rgba(255,255,255,0.02)" />
              <rect x="86" y="60" width="36" height="10" rx="4" fill="rgba(255,255,255,0.02)" />
            </g>
          )}

          {type === 'files' && (
            <g>
              <rect x="24" y="30" width="120" height="64" rx="6" fill="rgba(245,158,11,0.03)" stroke="rgba(245,158,11,0.08)" />
              <rect x="24" y="24" width="40" height="12" rx="3" fill="rgba(245,158,11,0.06)" />
              <rect x="80" y="46" width="44" height="8" rx="3" fill="rgba(255,255,255,0.04)" />
            </g>
          )}

          {type === 'web' && (
            <g>
              <rect x="8" y="8" width="164" height="92" rx="6" fill="rgba(16,185,129,0.02)" stroke="rgba(16,185,129,0.06)" />
              <rect x="16" y="18" width="144" height="12" rx="4" fill="rgba(255,255,255,0.06)" />
              <rect x="24" y="40" width="80" height="10" rx="4" fill="rgba(255,255,255,0.04)" />
            </g>
          )}
        </g>

        {/* Title caption */}
        <text x="32" y="200" fill="var(--text-secondary)" fontSize="12" fontFamily="var(--font-body)">{titleTrunc}</text>
      </svg>
    );
  };

  return (
    <section id="projects">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <h2>Các dự án</h2>
          <p>Các dự án đã thực hiện trong khuôn khổ chương trình học</p>
        </div>

        {/* Grid List */}
        <div className="grid-3">
          {PROJECTS_DATA.map((project) => (
            <article
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                padding: 0,
              }}
            >
              {/* Top Frame Graphics (Blank/Placeholder Wireframes) */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border-color)',
                  background: '#0a0e17',
                  position: 'relative',
                }}
              >
                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', width: '100%', height: '100%', textDecoration: 'none', color: 'inherit' }}
                    aria-label={`Open ${project.title} folder in Google Drive`}
                  >
                    {renderProjectPlaceholder(project)}
                    <span
                      style={{
                        position: 'absolute',
                        top: 12,
                        right: 12,
                        background: 'rgba(11, 15, 25, 0.85)',
                        color: 'var(--text-primary)',
                        padding: '6px 10px',
                        borderRadius: 8,
                        fontSize: '0.8rem',
                        border: '1px solid var(--border-color)',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                      }}
                    >
                      Xem thư mục
                    </span>
                  </a>
                ) : (
                  renderProjectPlaceholder(project)
                )}
              </div>

              {/* Project details content */}
              <div
                style={{
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  textAlign: 'left',
                }}
              >
                {/* Project Title */}
                <h3 style={{ fontSize: '1.25rem', marginBottom: '10px', fontWeight: 600 }}>
                  {project.title}
                </h3>

                {/* Project Description */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: 8, flexGrow: 1 }}>
                  {project.description}
                </p>
                {/* textual Drive link removed per request; preview badge remains clickable */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
