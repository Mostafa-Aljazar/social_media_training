import '@mantine/core/styles.css';
import './globals.css';
import { ColorSchemeScript, mantineHtmlProps } from '@mantine/core';
import Providers from '@/providers/providers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Asmar Social Media',
  description: 'Next.js social media application project',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <Providers>
          <>{children}</>
        </Providers>
      </body>
    </html>
  );
}
