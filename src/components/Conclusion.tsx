import React from 'react';

export const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative glow */}
      <div className="glow-bubble glow-bubble-1" style={{ opacity: 0.3 }}></div>
      <div className="glow-bubble glow-bubble-2" style={{ opacity: 0.3 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            maxWidth: '100%',
            margin: '0',
            textAlign: 'left',
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
            }}
          >
            {' '}
            <span className="text-gradient-rainbow">Kết luận</span>{' '}
          </h2>

          {/* Lorem ipsum body */}
          <div
            style={{
              textAlign: 'left',
              padding: '0',
              marginBottom: '40px',
            }}
          >
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.97rem',
                lineHeight: 1.8,
                marginBottom: '24px',
              }}
            >
              Portfolio này khép lại chuỗi 06 nhiệm vụ cốt lõi của học phần, nhưng lại mở ra một hệ quy chiếu hoàn toàn mới trong cách tôi vận hành công việc. Đây không chỉ là câu chuyện về việc làm chủ các công cụ rời rạc, mà là quá trình xây dựng một nền tảng tư duy chuẩn xác cho chặng đường kỹ thuật phía trước.
            </p>
            <style>{`
              .conclusion-cards-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:12px;}
              @media (max-width:900px){ .conclusion-cards-grid{grid-template-columns:repeat(2,1fr);} }
              @media (max-width:600px){ .conclusion-cards-grid{grid-template-columns:1fr;} }
              .conclusion-cards-grid .glass-card{padding:18px;}
              .conclusion-cards-grid h3{font-size:1.15rem;margin:0 0 8px 0}
              @media (max-width:600px){ .conclusion-cards-grid h3{font-size:1.05rem;} }
            `}</style>

            <div className="conclusion-cards-grid">
              <article className="glass-card" style={{ padding: '18px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Tái thiết lập hệ sinh thái kỹ năng</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.6, marginBottom: '16px', marginTop: 0 }}>
                  Điểm tâm đắc nhất của tôi sau dự án là khả năng xâu chuỗi các công cụ thành một quy trình liền mạch: từ quản lý thư mục khoa học, thiết kế prompt đa tầng điều hướng AI, đến vận hành luồng dữ liệu nhóm từ xa. Những kỹ năng số này đã thực sự chuyển hóa thành phản xạ thực chiến.
                </p>
              </article>

              <article className="glass-card" style={{ padding: '18px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Đối diện với sự nhiễu loạn và Ranh giới thuật toán</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.6, marginBottom: '16px', marginTop: 0 }}>
                  Giữa thời đại AI sinh dữ liệu hàng loạt, thách thức lớn nhất là sự tỉnh táo để tránh "ảo giác" của máy móc. Việc bóc tách tài liệu và đối soát độc lập giúp tôi giữ vững đạo đức học thuật, đặt AI đúng vị trí một cộng sự kỹ thuật thay vì lệ thuộc như một cỗ máy sao chép.
                </p>
              </article>

              <article className="glass-card" style={{ padding: '18px' }}>
                <h3 style={{ marginTop: 0, marginBottom: '8px' }}>Tuyên ngôn cá nhân</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.97rem', lineHeight: 1.6, marginBottom: '16px', marginTop: 0 }}>
                  Công nghệ có thể liên tục biến thiên, nhưng tư duy hệ thống và tính nguyên bản trong nghiên cứu là trường tồn. Portfolio này đánh dấu tâm thế sẵn sàng của tôi: không tiêu thụ công nghệ thụ động, mà chủ động làm chủ công cụ, dữ liệu và chính tầm nhìn của mình.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
