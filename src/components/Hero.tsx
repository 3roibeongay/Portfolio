import React from 'react';

export const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `
          radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.07), transparent 45%),
          radial-gradient(circle at 90% 80%, rgba(59, 130, 246, 0.07), transparent 45%),
          linear-gradient(rgba(255, 255, 255, 0.012) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.012) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 56px 56px, 56px 56px',
        backgroundPosition: '0 0, 0 0, center center, center center',
      }}
    >
      {/* Decorative Glow Bubbles */}
      <div className="glow-bubble glow-bubble-1"></div>
      <div className="glow-bubble glow-bubble-2"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '800px', textAlign: 'left' }}>

          {/* Main Title */}
          <h1
            className="animate-fade-in delay-1"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              lineHeight: 1.1,
              fontWeight: 700,
              marginBottom: '20px',
              letterSpacing: '-0.03em',
            }}
          >
            <span className="text-gradient-rainbow">Digital Portfolio</span>
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in delay-2"
            style={{
              color: 'var(--text-secondary)',
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              lineHeight: 1.6,
              marginBottom: '40px',
              maxWidth: '650px',
              marginInline: '0',
            }}
          >
            Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
          </p>

          {/* Call-to-Actions */}
          <div
            className="animate-fade-in delay-3"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
              Dự án của tôi
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
          }
          70% {
            transform: scale(1);
            box-shadow: 0 0 0 6px rgba(16, 185, 129, 0);
          }
          100% {
            transform: scale(0.95);
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </section>
  );
};
