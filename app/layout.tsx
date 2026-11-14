
import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://apxtechnologies.dev";

const siteTitle =
  "APX Technologies | Изработка на уебсайтове и уеб платформи";

const siteDescription =
  "APX Technologies създава модерни уебсайтове, онлайн магазини, уеб приложения и дигитални платформи за бизнеса. Индивидуален дизайн, функционалност и професионални решения.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "APX Technologies",
      alternateName: "Alpha Pro X BG",
      url: siteUrl,
      logo: `${siteUrl}/favicon.ico`,
      description: siteDescription,
      founder: {
        "@type": "Person",
        name: "Myumyun Gyuldzhyu",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+359899277511",
        contactType: "customer service",
        availableLanguage: ["Bulgarian"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "APX Technologies",
      description: siteDescription,
      inLanguage: "bg-BG",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | APX Technologies",
  },

  description: siteDescription,

  keywords: [
    "APX Technologies",
    "изработка на уебсайтове",
    "изработка на сайтове",
    "уеб дизайн",
    "уеб разработка",
    "изработка на онлайн магазини",
    "уеб приложения",
    "уеб платформи",
    "дигитални решения",
    "професионални уебсайтове",
    "Next.js",
    "React",
  ],

  authors: [
    {
      name: "Myumyun Gyuldzhyu",
    },
  ],

  creator: "Myumyun Gyuldzhyu",
  publisher: "APX Technologies",
  applicationName: "APX Technologies",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "APX Technologies",
    locale: "bg_BG",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
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
            __html: JSON.stringify(jsonLd).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
