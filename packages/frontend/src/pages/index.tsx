import Head from 'next/head';

const skills = [
  'ניהול תורים חכם',
  'סליקה ותשלומים מאובטחים',
  'ניהול לקוחות ו-CRM',
  'תזכורות אוטומטיות ב-SMS ו-WhatsApp',
  'צ׳אט בוטים להזמנות ושירות',
  'דוחות ואנליטיקה בזמן אמת',
  'אינטגרציות למערכות חיצוניות'
];

export default function Home() {
  return (
    <>
      <Head>
        <title>LuxSalon | פלטפורמת אוטומציה לסלונים</title>
        <meta
          name="description"
          content="LuxSalon - מערכת מלאה לניהול סלון, תורים, לקוחות ואוטומציות עסקיות."
        />
      </Head>

      <main className="page" dir="rtl">
        <section className="hero">
          <p className="tag">LuxSalon Automation Platform</p>
          <h1>הבית הדיגיטלי של הסלון שלך</h1>
          <p className="subtitle">
            פלטפורמה חכמה לניהול העסק, אוטומציות שירות וצמיחה — במקום אחד.
          </p>
        </section>

        <section className="skills">
          <h2>היכולות שמובילות את LuxSalon</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #f8f5ff 0%, #f3f9ff 100%);
          color: #1a1a1a;
          padding: 40px 20px;
        }
        .hero,
        .skills {
          max-width: 920px;
          margin: 0 auto;
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0 8px 30px rgba(22, 46, 84, 0.08);
          padding: 28px;
        }
        .skills {
          margin-top: 20px;
        }
        .tag {
          color: #6c5ce7;
          font-weight: 700;
          margin: 0 0 8px;
        }
        h1 {
          margin: 0;
          font-size: 2rem;
          color: #2d2b55;
        }
        .subtitle {
          margin-top: 12px;
          line-height: 1.7;
          color: #4b4a66;
        }
        h2 {
          margin-top: 0;
          color: #2d2b55;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        li {
          background: #f4f2ff;
          border: 1px solid #e3ddff;
          border-radius: 12px;
          padding: 12px 14px;
          color: #332f63;
          font-weight: 600;
        }
      `}</style>
    </>
  );
}
