import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const archia = localFont({
  src: [
    {
      path: "../public/fonts/Archia-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Archia-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Archia-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Sober Ringtones - Uncringe your ringtones",
  description:
    "Humble and minimal ringtones for your phone calls and notifications",
  openGraph: {
    title: "Sober Ringtones - Uncringe your ringtones",
    description:
      "Humble and minimal ringtones for your phone calls and notifications",
    url: "https://sober-ringtones.wize.io",
    locale: "en_US",
    type: "website",
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
        {children}

        <script
          data-collect-dnt="true"
          async
          src="https://scripts.simpleanalyticscdn.com/latest.js"
        ></script>
      </body>
    </html>
  );
}
