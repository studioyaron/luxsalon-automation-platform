import Head from 'next/head';

const skills = [
  'ניהול יומן תורים חכם',
  'תזכורות אוטומטיות ב-WhatsApp',
  'אישור/דחיית תורים בלחיצה',
  'ניהול לקוחות VIP',
  'כרטיס לקוח דיגיטלי מלא',
  'תיעוד היסטוריית טיפולים',
  'המלצות טיפוח מותאמות אישית',
  'שיווק חוזר ללקוחות לא פעילים',
  'קמפיינים אוטומטיים לחגים',
  'מבצעי יום הולדת אוטומטיים',
  'ניהול חבילות טיפולים',
  'מכירת שוברים דיגיטליים',
  'ניהול מלאי חכם',
  'התראות חוסר במוצרים',
  'ניהול עמדות ועובדים',
  'חישוב עמלות אוטומטי',
  'דוחות הכנסות יומיים',
  'דוחות חודשיים מתקדמים',
  'דשבורד ביצועים בזמן אמת',
  'פילוח לקוחות לפי התנהגות',
  'קליטת לידים מהמדיה החברתית',
  'אינטגרציית Meta Lead Ads',
  'ניתוב פניות אוטומטי לצוות',
  'בוט מענה ראשוני ללקוחות',
  'תסריטי מכירה לשיחות נכנסות',
  'ניהול ביקורות וחוות דעת',
  'איסוף דירוג לקוח אוטומטי',
  'ניהול הרשאות לפי תפקיד',
  'הפקת חשבוניות וקבלות',
  'סליקה מאובטחת מרובת ערוצים',
  'ניהול סניפים מרובים',
  'זיהוי לקוחות חוזרים אוטומטי',
  'תחזיות עומסים ותכנון משמרות'
];

const whatsappNumber = '972500000000';

const metaConfig = {
  appId: process.env.NEXT_PUBLIC_META_APP_ID || 'META_APP_ID_PLACEHOLDER',
  accessToken: process.env.NEXT_PUBLIC_META_ACCESS_TOKEN || 'META_ACCESS_TOKEN_PLACEHOLDER'
};

export default function HomePage() {
  return (
    <>
      <Head>
        <title>LuxSalon | אוטומציה חכמה לסלון יוקרתי</title>
        <meta
          name="description"
          content="פלטפורמת LuxSalon עם 33 מיומנויות אוטומציה לסלון יופי, כולל WhatsApp ועיצוב יוקרתי שחור-זהב."
        />
      </Head>

      <main className="page" dir="rtl">
        <section className="hero">
          <p className="eyebrow">LuxSalon Automation Platform</p>
          <h1>33 מיומנויות חכמות לניהול סלון ברמה אחרת</h1>
          <p className="subtitle">
            מערכת אוטומציה מלאה לסלוני יופי עם חוויית לקוח יוקרתית, תפעול מהיר ושיווק מדויק.
          </p>
          <a className="whatsapp" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">
            שלחו לנו הודעה ב-WhatsApp
          </a>
        </section>

        <section className="skills" aria-label="רשימת 33 מיומנויות LuxSalon">
          {skills.map((skill, index) => (
            <article key={skill} className="card">
              <span className="index">{String(index + 1).padStart(2, '0')}</span>
              <h2>{skill}</h2>
            </article>
          ))}
        </section>

        <footer className="footer">
          <p>
            מצב אינטגרציית Meta: פעיל עם ערכי placeholder בלבד ({metaConfig.appId} /{' '}
            {metaConfig.accessToken}) – ללא תלות במפתחות אמיתיים בשלב זה.
          </p>
        </footer>
      </main>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: radial-gradient(circle at top, #2c2413 0%, #0a0a0a 45%, #000 100%);
          color: #f6e8b1;
          font-family: 'Assistant', 'Heebo', Arial, sans-serif;
          padding: 24px;
        }

        .hero {
          max-width: 980px;
          margin: 0 auto 28px;
          border: 1px solid #7f6421;
          border-radius: 24px;
          padding: 28px;
          background: linear-gradient(135deg, rgba(16, 16, 16, 0.95), rgba(36, 27, 9, 0.85));
          box-shadow: 0 16px 42px rgba(0, 0, 0, 0.45);
        }

        .eyebrow {
          margin: 0;
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          color: #b7912e;
          text-transform: uppercase;
        }

        h1 {
          margin: 12px 0;
          font-size: clamp(2rem, 3vw, 3rem);
          line-height: 1.2;
          color: #f7d57a;
          text-shadow: 0 0 22px rgba(247, 213, 122, 0.22);
        }

        .subtitle {
          margin: 0 0 20px;
          color: #f5f0dc;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .whatsapp {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: linear-gradient(100deg, #f7d57a, #b98e2b);
          color: #171204;
          font-weight: 800;
          text-decoration: none;
          padding: 12px 22px;
          border: 1px solid #ffdf8f;
        }

        .skills {
          max-width: 1180px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 14px;
        }

        .card {
          margin: 0;
          border-radius: 16px;
          border: 1px solid #8f6f25;
          background: linear-gradient(160deg, rgba(12, 12, 12, 0.96), rgba(32, 24, 8, 0.82));
          padding: 16px;
          min-height: 110px;
        }

        .index {
          color: #dcb655;
          font-size: 0.85rem;
          font-weight: 700;
        }

        h2 {
          margin: 8px 0 0;
          font-size: 1.05rem;
          line-height: 1.45;
          color: #fff6d8;
        }

        .footer {
          max-width: 1180px;
          margin: 20px auto 0;
          color: #c4a153;
          font-size: 0.86rem;
        }
      `}</style>
    </>
  );
}
