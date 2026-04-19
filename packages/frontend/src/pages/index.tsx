import React from 'react';

type Skill = {
  name: string;
  description: string;
};

const firstFiveSkills: Skill[] = [
  { name: 'ניהול תורים חכם', description: 'קביעת תורים אוטומטית עם תזכורות ללקוחות בזמן אמת.' },
  { name: 'ניהול לקוחות', description: 'שמירת פרופילי לקוחות, היסטוריית ביקורים והעדפות שירות.' },
  { name: 'אוטומציות שיווק', description: 'שליחת קמפיינים ממוקדים לפי התנהגות והרגלי רכישה.' },
  { name: 'דוחות עסקיים', description: 'תצוגת ביצועים יומית, שבועית וחודשית לקבלת החלטות מהירה.' },
  { name: 'מעקב צוות', description: 'ניהול משימות צוות, נוכחות ויעדי ביצוע במקום אחד.' },
];

export default function HomePage(): JSX.Element {
  return (
    <main
      style={{
        minHeight: '100vh',
        margin: 0,
        padding: '48px 20px',
        backgroundColor: '#f7f4fb',
        color: '#2f2a3a',
        fontFamily: 'Arial, sans-serif',
      }}
      dir="rtl"
    >
      <header style={{ maxWidth: 900, margin: '0 auto 24px auto' }}>
        <h1 style={{ margin: 0, fontSize: '2rem' }}>ברוכים הבאים לפלטפורמה של LuxSalon</h1>
        <p style={{ marginTop: 12, fontSize: '1.1rem' }}>
          התחילו כאן כדי להכיר במהירות את חמש היכולות הראשונות של המערכת.
        </p>
      </header>

      <section aria-label="רשימת יכולות ראשונות" style={{ maxWidth: 900, margin: '0 auto' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
          {firstFiveSkills.map((skill) => (
            <li key={skill.name}>
              <article
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 12,
                  padding: 16,
                  boxShadow: '0 6px 18px rgba(58, 35, 88, 0.08)',
                }}
              >
                <h2 style={{ margin: '0 0 8px 0', fontSize: '1.15rem' }}>{skill.name}</h2>
                <p style={{ margin: 0, lineHeight: 1.5 }}>{skill.description}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
