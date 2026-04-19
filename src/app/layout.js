export const metadata = {
  title: 'LuxSalon Platform',
  description: 'Luxsalon automation platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
