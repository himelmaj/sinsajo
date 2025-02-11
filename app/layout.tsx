import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/theme-provider";
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import { Poppins } from "next/font/google";
import Background from "@/components/layout/background";

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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NuqsAdapter >
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
          </NuqsAdapter>
        </ThemeProvider>
      </body>
    </html>
  );
}
