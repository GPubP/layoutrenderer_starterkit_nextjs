export const metadata = {
  title: 'Digipolis Starterkit NextJS',
  description: 'Starterkit NextJS - LayoutRenderer - Redactie',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.antwerpen.be/core_branding_scss/6.5.0/main.min.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
