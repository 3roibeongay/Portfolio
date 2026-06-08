import React from 'react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background glow bubble */}
      <div className="glow-bubble glow-bubble-3"></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <div className="section-header">
          <h2>Mục tiêu</h2>
          <p>Mục tiêu mà Portfolio này đem lại</p>
        </div>

        <div className="glass-card" style={{ padding: '24px' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>
            Portfolio này được xây dựng nhằm tổng hợp và hệ thống hóa kiến thức từ 06 kỹ năng số quan trọng đã học. Đây không chỉ là không gian lưu trữ các dự án thành phần một cách khoa học để dễ dàng tra cứu, mà còn là công cụ trực quan để giới thiệu năng lực ứng dụng công nghệ và sử dụng AI có trách nhiệm của bản thân.
          </p>
        </div>
      </div>
    </section>
  );
};
