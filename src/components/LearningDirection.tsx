import React from 'react';

export const LearningDirection: React.FC = () => {
    return (
        <section id="learning-direction" style={{ position: 'relative', overflow: 'hidden' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="section-header">
                    <h2>Định hướng học tập & phát triển</h2>
                    <p>Những trọng tâm để nâng cao năng lực trong ngắn hạn và dài hạn.</p>
                </div>

                <div className="glass-card" style={{ padding: '24px' }}>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>
                        Tôi muốn tiếp tục xây dựng nền tảng kỹ thuật vững chắc, phát triển tư duy hệ thống và khả năng tự học để thích ứng với các công nghệ mới.
                        Mục tiêu là kết hợp kiến thức học thuật với thực hành dự án, từ đó mở rộng năng lực giải quyết vấn đề và làm việc trong môi trường chuyên nghiệp.
                    </p>

                    <ul style={{ paddingLeft: '18px', margin: 0, color: 'var(--text-primary)' }}>
                        <li style={{ marginBottom: '8px' }}>Xây dựng nền tảng kỹ thuật vững chắc, không ngừng trau dồi tư duy logic, nâng cao năng lực số để đáp ứng yêu cầu thực chiến của một kỹ sư công nghệ.</li>
                        <li style={{ marginBottom: '8px' }}>Rèn luyện khả năng đọc hiểu tài liệu, nghiên cứu và phản biện kỹ thuật.</li>
                        <li style={{ marginBottom: '8px' }}>Tích lũy thêm kinh nghiệm qua các dự án thực tế và kỹ năng cộng tác nhóm.</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};
