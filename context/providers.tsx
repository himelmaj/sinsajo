import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ThemeProvider } from "@/context/theme-provider";

const Providers = ({ children }: Readonly<{ children: React.ReactNode }>) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <NuqsAdapter >
                {children}
            </NuqsAdapter>
        </ThemeProvider>
    )
}

export default Providers