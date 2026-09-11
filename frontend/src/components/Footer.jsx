import React from 'react';
import { SkinIcon, HeartIcon } from './Icons';

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#4A2E1E',
      color: '#F5EDE4',
      padding: '3.5rem 2rem',
      borderTop: '1px solid rgba(193, 105, 30, 0.28)',
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        maxWidth: '1280px',
        margin: '0 auto',
      }} className="footer-content">
        
        <div style={{ maxWidth: '300px', minWidth: '250px' }} className="footer-brand">
          <a href="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.12rem',
            fontWeight: 700,
            color: '#F5EDE4',
            textDecoration: 'none',
            marginBottom: '1rem',
          }}>
            <SkinIcon size={28} />
            <span>SkinCare by Aarzoo</span>
          </a>
          <p style={{ color: '#F5EDE4', opacity: 0.82, lineHeight: 1.7, fontSize: '0.875rem' }}>
            Personalized skin consulting combining topical skincare, skin nutrition, and
            lifestyle guidance to support long-term skin health.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 style={{ color: '#F5EDE4', marginBottom: '1rem' }}>Quick Links</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#about" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>About</a>
            <a href="#approach" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>How It Works</a>
            <a href="#faq" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>FAQ</a>
            <a href="#enroll" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>Before You Enroll</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 style={{ color: '#F5EDE4', marginBottom: '1rem' }}>Who I Work With</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="#clients" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>Acne-prone skin</a>
            <a href="#clients" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>Rosacea-prone skin</a>
            <a href="#clients" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>Pigmentation</a>
            <a href="#clients" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>Barrier & skin longevity</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4 style={{ color: '#F5EDE4', marginBottom: '1rem' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <a href="mailto:skincare.by.aarzoo@gmail.com" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>skincare.by.aarzoo@gmail.com</a>
            <a href="tel:+919217852889" style={{ color: '#F5EDE4', textDecoration: 'none', fontSize: '0.875rem' }}>+91 92178 52889</a>
            <p style={{ color: '#F5EDE4', fontSize: '0.875rem', marginTop: '0.5rem' }}>
              Include your order number when you write with questions.
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ 
        marginTop: '3rem', 
        paddingTop: '2rem', 
        borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
        color: '#F5EDE4',
        textAlign: 'center',
        fontSize: '0.875rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          Made with <HeartIcon size={16} style={{ color: '#C1691E' }} /> for healthy skin
        </div>
        <p>© 2026 SkinCare by Aarzoo. Educational wellness guidance — not a substitute for medical care.</p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-content {
            flex-direction: column !important;
            align-items: flex-start;
          }
          .footer-section {
            width: 100%;
          }
          .footer-brand {
            width: 100%;
            max-width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
}
