import { Inter, Space_Grotesk } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// Only for the "Powered by Lasan Labs" signature.
const spaceGrotesk = Space_Grotesk({ variable: "--font-space-grotesk", subsets: ["latin"], weight: ["600"] });

const description =
  "The sales CRM for growing teams: a drag-and-drop pipeline, lead scoring, contacts and companies, follow-ups and a live revenue dashboard, in one workspace. Set up for you by Lasan Labs.";

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Lasan Grow · The sales CRM for teams that close", template: "%s · Lasan Grow" },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: SITE.name,
    title: "Lasan Grow · The sales CRM for teams that close",
    description,
    locale: "en_IN",
  },
  twitter: { card: "summary_large_image", title: "Lasan Grow", description },
};

export const viewport = { themeColor: "#0f6cbd" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
