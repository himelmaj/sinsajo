import "@/styles/globals.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import { Poppins } from "next/font/google";
import Background from "@/components/layout/background";
import Providers from "@/context/providers";

export const metadata: Metadata = {
  title: "Sinsajo",
  description: "Sinsajo is a social media platform where you can share your thoughts, photos, and videos with your friends and family.",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.variable, "antialiased")}>
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
