import "@/styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import Background from "@/components/layout/background";
import Providers from "@/context/providers";
import { NeueBitBold, Mondwest, poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Sinsajo",
  description: "Sinsajo is a social media platform where you can share your thoughts, photos, and videos with your friends and family.",
  robots: "index",
  authors: [
    {
      name: "Himel Majumder",
      url: "https://himelmaj.vercel.app",
    },
    {
      name: "Sinsajo",
      url: "https://sinsajo.vercel.app",
    },
    {
      name: "Himel Studio Team",
      url: "https://himel.studio",
    }
  ],
  keywords: ["sinsajo", "social media", "platform", "share", "thoughts", "photos", "videos", "friends", "family"],
  twitter: {
    card: "summary_large_image",
    site: "@himel.studio",
    creator: "@hhhhimel",
    title: "Sinsajo",
    description: "Sinsajo is a social media platform where you can share your thoughts, photos, and videos with your friends and family.",
    images: [
      {
        url: "https://sinsajo.vercel.app/screenshot.jpg",
        alt: "Sinsajo",
      },
    ],
    siteId: "sinsajo.vercel.app",
    creatorId: "@hhhhimel",
  },
  openGraph: {
    title: "Sinsajo",
    description: "Sinsajo is a social media platform where you can share your thoughts, photos, and videos with your friends and family.",
    url: "https://sinsajo.vercel.app",
    type: "website",
    images: [
      {
        url: "https://sinsajo.vercel.app/screenshot.jpg",
        alt: "Sinsajo",
      },
    ],
    siteName: "Sinsajo",
    locale: "en_US",
  },
  manifest: "/manifest.json",
};

// const poppins = Poppins({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   variable: "--font-poppins",
// });

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.variable, "antialiased bg-background ", Mondwest.className, NeueBitBold.className)}>
        <Providers>
          <Background />
          {children}
          <Toaster position="bottom-right" toastOptions={{
            className: '',
            style: {
              border: '1px solid hsl(var(--border))',
              padding: '16px',
              backgroundColor: 'hsl(var(--card))',
              color: 'hsl(var(--card-foreground))',
              borderRadius: '0rem',
            },
          }}
          />
        </Providers>
      </body>
    </html>
  );
}
