import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2>About Me</h2>
        </div>

        {/* Content Layout */}
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Left - Profile Image */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
              }}
            >
              {/* Glow ring behind the image */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-4px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--accent-emerald), var(--accent-blue))',
                  opacity: 0.3,
                  filter: 'blur(16px)',
                }}
              />
              <img
                src="https://scontent.fhan5-6.fna.fbcdn.net/v/t39.30808-1/571279392_2255683908271454_4498002895880553572_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx1156x1156&ctp=s200x200&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEKYRoKemqtitlsFVj4ggqDTPleSOXLYJdM-V5I5ctgl1uCZcCXYO_PjrmMmhVyMMiOmHk7_hsRid1pMtBZS-p7&_nc_ohc=J2ZlRvJshGsQ7kNvwHKCu4E&_nc_oc=AdokTjGuzXH_0uHf6GA6GP0YoTwFtZrkIdebbu2tOTCHjZnsNC0-bLW_9tIKT5sEbyM&_nc_zt=24&_nc_ht=scontent.fhan5-6.fna&_nc_gid=K7Y3dPXqNWrSx2FiBDnwVQ&_nc_ss=7b2a8&oh=00_Af_cr0e1iO-RXWh1YKO2cNtxRfYg_HWo3F3IkAJlXcYVfw&oe=6A2BF30E"
                alt="Profile"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  border: '3px solid var(--border-color)',
                  boxShadow: 'var(--shadow-lg)',
                }}
              />
            </div>
          </div>

          {/* Right - Personal Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '4px' }}>Nguyễn Hoàng Gia Huy</h3>
              <p style={{ color: 'var(--accent-emerald)', fontSize: '0.95rem', fontWeight: 500, marginBottom: '16px' }}>
                Sinh viên năm 1, ngành Công nghệ Kỹ thuật Điện tử - Viễn thông tại Đại học Công nghệ - Đại học Quốc gia Hà Nội
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>
                Họ và tên: Nguyễn Hoàng Gia Huy
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>
                Trường: Đại học Công Nghệ - ĐH Quôc gia Hà Nội
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>
                Ngành: Công nghệ Kỹ thuật Điện tử - Viễn thông
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>  
                Mã sinh viên: 25022267
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '12px' }}>
                Mã lớp học phần: VNU1001_E252007
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
