import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mohamed Thahir S — Full Stack Developer",
  description:
    "Portfolio of Mohamed Thahir S, a Computer Science Engineering student building full-stack applications, data analytics platforms, and practical digital solutions.",
  keywords: [
    "Mohamed Thahir",
    "Mohamed Thahir S",
    "THAHIR",
    "Full Stack Developer",
    "Java Developer",
    "Python Developer",
    "Data Analytics",
    "SQL",
    "BigQuery",
    "Power BI",
    "Tableau",
    "ServiceNow",
    "Coimbatore Developer",
    "ETL Pipeline",
  ],
  authors: [{ name: "Mohamed Thahir S", url: "mailto:thahirmohamed212@gmail.com" }],
  creator: "Mohamed Thahir S",
  openGraph: {
    title: "Mohamed Thahir S — Full Stack Developer",
    description:
      "Computer Science Engineering student building practical software, analytics platforms, and scalable digital experiences.",
    url: "https://thahir.dev",
    siteName: "Mohamed Thahir S Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Thahir S — Full Stack Developer",
    description:
      "Computer Science Engineering student building practical software, analytics platforms, and scalable digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-background text-editorial-white antialiased selection:bg-mustard selection:text-black overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
