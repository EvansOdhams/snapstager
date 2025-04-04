import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "src/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { theme } from "src/styles/theme";
import { Notifications } from "@mantine/notifications";
import { Header } from "src/components/Header/Header";
import { Footer } from "src/components/Footer/Footer";

const title = "Virtual Staging using AI";
const description =
  "Virtual Staging using AI for only $1 per image. Try for free and increase conversion rate. Highly realistic designs, developed by Sillicon Valley Engineer.";
// TODO: Update this image with the correct one
const ogimage = "https://snapstager.com/og-image.png";
const sitename = "snapstager.com";

export const metadata: Metadata = {
  title,
  metadataBase: new URL("https://snapstager.com"),
  description,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: ogimage,
    title,
    description,
    url: "https://snapstager.com",
    siteName: sitename,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ogimage,
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <ColorSchemeScript />
      </head>
      <body className="flex min-h-screen flex-col">
        <MantineProvider theme={theme}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Notifications position="bottom-right" />
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  );
}
