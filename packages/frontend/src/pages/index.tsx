import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>LuxSalon Automation Platform</title>
        <meta name="description" content="Welcome to LuxSalon Automation Platform" />
      </Head>
      <main
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 60%, #2b2b2b 100%)',
          color: '#f8d27a',
          fontFamily: 'Arial, sans-serif',
          padding: '24px'
        }}
      >
        <section
          style={{
            maxWidth: '680px',
            width: '100%',
            border: '1px solid rgba(248, 210, 122, 0.35)',
            borderRadius: '16px',
            padding: '40px 32px',
            background: 'rgba(0, 0, 0, 0.35)',
            textAlign: 'center',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.35)'
          }}
        >
          <h1 style={{ fontSize: '2.2rem', marginBottom: '14px' }}>Welcome to LuxSalon</h1>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.6, margin: 0, color: '#f3e4b4' }}>
            Your automation platform for smarter salon operations, elevated customer journeys,
            and seamless growth.
          </p>
        </section>
      </main>
    </>
  );
}
