import './globals.css';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';

import { ThemeProvider } from './contexts/ThemeContext';

const archia = localFont({
  src: [
    {
      path: '../public/fonts/Archia-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Archia-Thin.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/Archia-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Sober Ringtones - Minimal ringtones for ringtone haters',
  description:
    'Minimal ringtones for people who hate ringtones. On Sober Ringtones you can find a humble and cringe-free ringtone for your phone calls and notifications.',
  openGraph: {
    title: 'Sober Ringtones - Minimal ringtones for ringtone haters',
    description:
      'Minimal ringtones for people who hate ringtones. On Sober Ringtones you can find a humble and cringe-free ringtone for your phone calls and notifications.',
    url: 'https://sober-ringtones.wize.io',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archia.className}>
        <ThemeProvider>{children}</ThemeProvider>

        <Script data-collect-dnt="true" src="https://scripts.simpleanalyticscdn.com/latest.js" />
      </body>
    </html>
  );
}
