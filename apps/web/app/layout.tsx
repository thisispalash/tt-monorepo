import './globals.css';
import type { Metadata } from 'next';
import { Sour_Gummy } from 'next/font/google';

const sourGummy = Sour_Gummy({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-default',
});


export const metadata: Metadata = {
  title: 'Token Tuner',
  description: 'Can you follow the curve?',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`${sourGummy.variable} font-default`}>{children}</body>
    </html>
  );
}
