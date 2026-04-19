import React from 'react';

const skills = [
  'ניהול תורים חכם',
  'יומן צוות בזמן אמת',
  'תזכורות אוטומטיות ללקוחות',
  'ביטולים ודחיות בלחיצה',
  'סליקת אשראי מאובטחת',
  'חשבוניות וקבלות דיגיטליות',
  'ניהול מלאי מוצרים',
  'התראות חוסר במלאי',
  'ניהול לקוחות ו-CRM',
  'כרטיס לקוח עם היסטוריית טיפולים',
  'פילוח קהלים לשיווק',
  'קמפיינים ב-WhatsApp',
  'SMS שיווקי ואישורי תור',
  'קמפיינים באימייל',
  'קופונים ומבצעים דינמיים',
  'מועדון לקוחות ונקודות',
  'ניהול מנויים וחבילות',
  'ניהול ספקים ורכש',
  'ניהול עמלות עובדים',
  'ניהול משמרות ונוכחות',
  'ניהול סניפים מרובים',
  'דוחות הכנסות יומיים',
  'דוחות רווחיות לפי שירות',
  'דוחות ביצועי צוות',
  'דשבורד KPI בזמן אמת',
  'הזמנות אונליין 24/7',
  'טפסים דיגיטליים לפני טיפול',
  'גלריית לפני/אחרי',
  'אוטומציות שירות לקוחות',
  'אימות תורים חכם',
  'אינטגרציה לפייסבוק ואינסטגרם',
  'ניהול הרשאות משתמשים',
  'סטטיסטיקות מתקדמות'
];

const pageStyle: React.CSSProperties = {
  minHeight: '100vh',
  margin: 0,
  fontFamily: 'Arial, sans-serif',
  background: 'radial-gradient(circle at top, #272015, #0f0f0f 55%)',
  color: '#f8d778',
  padding: '24px'
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: '12px',
  maxWidth: '1200px',
  margin: '24px auto'
};

const cardStyle: React.CSSProperties = {
  border: '1px solid #c8a74a',
  borderRadius: '12px',
  padding: '14px',
  background: 'linear-gradient(180deg, #1a1a1a, #101010)',
  color: '#fff2cc',
  boxShadow: '0 0 0 1px rgba(200,167,74,0.2) inset'
};

export default function Home() {
  return (
    <main dir="rtl" style={pageStyle}>
      <section style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ marginBottom: '8px' }}>Luxsalon Automation Platform</h1>
        <p style={{ marginTop: 0, color: '#f3e7c2' }}>
          מערכת ניהול יוקרתית בעיצוב Golden-Black עם 33 מיומנויות לסלון מודרני
        </p>
      </section>

      <section style={gridStyle}>
        {skills.map((skill, index) => (
          <article key={skill} style={cardStyle}>
            <strong>{index + 1}.</strong> {skill}
          </article>
        ))}
      </section>

      <a
        href="https://wa.me/972500000000"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          background: '#d4af37',
          color: '#111',
          textDecoration: 'none',
          fontWeight: 700,
          borderRadius: '999px',
          padding: '12px 18px',
          border: '1px solid #f8d778'
        }}
      >
        WhatsApp
      </a>
    </main>
  );
}
