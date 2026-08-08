import type { Metadata } from "next";
import "./globals.css";
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "APX Technologies",
  alternateName: "Alpha Pro X BG",
  url: "https://apxtechnologies.dev",
  logo: "https://apxtechnologies/favicon.ico",
  description:
    "APX Technologies разработва модерни уебсайтове, уеб приложения и професионални дигитални решения за бизнеса.",
  founder: {
    "@type": "Person",
    name: "Myumyun Gyuldzhyu",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+359899277511",
    contactType: "customer service",
    email: "contact@apxtechnologies.dev",
    availableLanguage: ["Bulgarian", "English"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Стара Загора",
    addressCountry: "BG",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL("https://apxtechnologies.dev"),

  title: {
    default: "APX Technologies",
    template: "%s | APX Technologies",
  },

  description:
    "APX Technologies разработва модерни уебсайтове, уеб приложения и професионални дигитални решения за бизнеса.",

  keywords: [
    "APX Technologies",
    "Web Development",
    "Next.js",
    "React",
    "Web Design",
    "Business Website",
    "Portfolio",
    "Digital Agency",
  ],

  authors: [
    {
      name: "Myumyun Gyuldzhyu",
    },
  ],

  creator: "Myumyun Gyuldzhyu",
  applicationName: "APX Technologies",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "APX Technologies",
    description: "Premium Web Development & Digital Solutions",
    url: "https://apxtechnologies.dev",
    siteName: "APX Technologies",
    locale: "bg_BG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "APX Technologies",
    description: "Premium Web Development & Digital Solutions",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bg" suppressHydrationWarning>
     <body>
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(jsonLd),
    }}
  />
  {children}
</body>
    </html>
  );
}