'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState('general');

  const sections = [
    { id: 'general', title: 'General Terms', icon: '📋' },
    { id: 'privacy', title: 'Privacy Policy', icon: '🔒' },
    { id: 'usage', title: 'Usage Guidelines', icon: '📖' },
    { id: 'content', title: 'Content Policy', icon: '📝' },
    { id: 'liability', title: 'Liability', icon: '⚖️' },
    { id: 'contact', title: 'Contact Info', icon: '📞' }
  ];

  const content = {
    general: [
      {
        title: 'Acceptance of Terms',
        content: 'By accessing and using this News Hub platform, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
      },
      {
        title: 'Modification of Terms',
        content: 'We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through a notice on our website. Your continued use of the service after such modifications constitutes acceptance of the updated terms.'
      },
      {
        title: 'Account Registration',
        content: 'To access certain features, you may be required to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.'
      }
    ],
    privacy: [
      {
        title: 'Information Collection',
        content: 'We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us. This may include your name, email address, and any other information you choose to provide.'
      },
      {
        title: 'Information Usage',
        content: 'We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new features. We do not sell, trade, or otherwise transfer your personal information to third parties.'
      },
      {
        title: 'Data Security',
        content: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
      },
      {
        title: 'Cookies and Tracking',
        content: 'We use cookies and similar tracking technologies to enhance your experience, analyze usage patterns, and personalize content. You can control cookie settings through your browser preferences.'
      }
    ],
    usage: [
      {
        title: 'Acceptable Use',
        content: 'You agree to use our platform only for lawful purposes and in accordance with these terms. You must not use the service to transmit any material that is defamatory, offensive, or otherwise objectionable.'
      },
      {
        title: 'Prohibited Activities',
        content: 'You may not: attempt to gain unauthorized access to our systems, interfere with the proper working of the platform, use automated tools to access the service, or engage in any activity that could harm our infrastructure.'
      },
      {
        title: 'User Conduct',
        content: 'Be respectful of other users and their opinions. Harassment, hate speech, and discriminatory behavior will not be tolerated. We reserve the right to suspend or terminate accounts that violate these guidelines.'
      }
    ],
    content: [
      {
        title: 'Content Ownership',
        content: 'Users retain ownership of content they create and submit. By posting content, you grant us a non-exclusive, worldwide license to use, display, and distribute your content in connection with our services.'
      },
      {
        title: 'Content Standards',
        content: 'All content must be accurate, original, and comply with applicable laws. Content that is misleading, plagiarized, or violates intellectual property rights is prohibited and will be removed.'
      },
      {
        title: 'Content Moderation',
        content: 'We reserve the right to review, edit, or remove any content that violates our policies. We may also suspend or terminate accounts of users who repeatedly violate our content guidelines.'
      },
      {
        title: 'Copyright and DMCA',
        content: 'If you believe your copyrighted work has been used without permission, please contact us with a detailed DMCA notice. We will respond to legitimate copyright infringement claims in accordance with applicable law.'
      }
    ],
    liability: [
      {
        title: 'Limitation of Liability',
        content: 'To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.'
      },
      {
        title: 'Disclaimer of Warranties',
        content: 'Our service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted, secure, or error-free, or that defects will be corrected.'
      },
      {
        title: 'Indemnification',
        content: 'You agree to indemnify and hold harmless our company, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the service or violation of these terms.'
      }
    ],
    contact: [
      {
        title: 'Contact Information',
        content: 'For questions about these Terms & Conditions, please contact us at: legal@newshub.com or write to us at: News Hub Legal Department, 123 Main Street, City, State 12345.'
      },
      {
        title: 'Support',
        content: 'For technical support or general inquiries, please email: support@newshub.com or use our contact form on the website. We typically respond within 24-48 hours.'
      },
      {
        title: 'Legal Notices',
        content: 'All legal notices should be sent to: legal@newshub.com. We will respond to legal inquiries within 5 business days.'
      }
    ]
  };

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem 0'
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ 
            color: '#fff', 
            fontSize: '3rem', 
            fontWeight: 800,
            marginBottom: '1rem',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)'
          }}>
            Terms & <span style={{ 
              background: 'linear-gradient(45deg, #ff6b6b, #ff4081)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Conditions</span>
          </h1>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '1.2rem',
            maxWidth: 600,
            margin: '0 auto',
            lineHeight: 1.6
          }}>
            Please read these terms carefully before using our News Hub platform. 
            By using our service, you agree to be bound by these terms.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '0.5rem',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              style={{
                background: activeSection === section.id 
                  ? 'rgba(255,255,255,0.2)' 
                  : 'rgba(255,255,255,0.1)',
                color: '#fff',
                border: 'none',
                borderRadius: 25,
                padding: '0.75rem 1.5rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
              onMouseOver={e => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'rgba(255,255,255,0.15)';
                  e.target.style.transform = 'translateY(-2px)';
                }
              }}
              onMouseOut={e => {
                if (activeSection !== section.id) {
                  e.target.style.background = 'rgba(255,255,255,0.1)';
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            >
              <span style={{ fontSize: '1.1rem' }}>{section.icon}</span>
              {section.title}
            </button>
          ))}
        </div>

        {/* Content Section */}
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          borderRadius: 20,
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ marginBottom: '2rem' }}>
            <h2 style={{ 
              color: '#333', 
              fontSize: '2rem', 
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <span style={{ fontSize: '2.5rem' }}>
                {sections.find(s => s.id === activeSection)?.icon}
              </span>
              {sections.find(s => s.id === activeSection)?.title}
            </h2>
            <div style={{ 
              height: '3px', 
              background: 'linear-gradient(90deg, #0070f3, #ff4081)',
              borderRadius: '2px',
              width: '100px'
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {content[activeSection].map((item, index) => (
              <div key={index} style={{
                background: 'rgba(0,112,243,0.05)',
                borderRadius: 12,
                padding: '1.5rem',
                border: '1px solid rgba(0,112,243,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={e => {
                e.target.style.background = 'rgba(0,112,243,0.08)';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 25px rgba(0,112,243,0.15)';
              }}
              onMouseOut={e => {
                e.target.style.background = 'rgba(0,112,243,0.05)';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
              >
                <h3 style={{ 
                  color: '#0070f3', 
                  fontSize: '1.3rem', 
                  marginBottom: '1rem',
                  fontWeight: 600
                }}>
                  {item.title}
                </h3>
                <p style={{ 
                  color: '#555', 
                  fontSize: '1rem', 
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 16,
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <p style={{ 
            color: 'rgba(255,255,255,0.9)', 
            fontSize: '1rem',
            marginBottom: '1rem'
          }}>
            Last updated: December 2024
          </p>
          <p style={{ 
            color: 'rgba(255,255,255,0.8)', 
            fontSize: '0.9rem'
          }}>
            © 2024 News Hub. All rights reserved. | 
            <Link href="/user/userProfile" style={{ 
              color: 'rgba(255,255,255,0.9)', 
              textDecoration: 'none',
              marginLeft: '0.5rem'
            }}>
              Back to Profile
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 