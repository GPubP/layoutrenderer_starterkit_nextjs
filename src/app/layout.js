export const metadata = {
  title: 'Digipolis Starterkit NextJS',
  description: 'Starterkit NextJS - LayoutRenderer - Redactie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
