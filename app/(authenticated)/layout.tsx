import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>

        <main className="flex-1 p-4">
          {children}
        </main>

      </SidebarInset>
    </SidebarProvider>
  )
}
