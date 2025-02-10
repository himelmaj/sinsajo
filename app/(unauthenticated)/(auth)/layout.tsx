import { ModeToggle } from "@/components/layout/mode-toggle"
import type React from "react"
import Spline from '@splinetool/react-spline/next';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden w-1/2 bg-gray-100 dark:bg-black lg:block">
      <Spline
        scene="https://prod.spline.design/Y-0O1EML4RbmhLtk/scene.splinecode" 
      />
      </div>

      <div className="flex w-full flex-col bg-background lg:w-1/2">
        <div className="flex h-full w-full flex-col px-4 py-4">
          <div className="flex justify-end pb-4">
            <ModeToggle />
          </div>

          <main className="flex flex-1 items-center justify-center">
            <div className="px-4 sm:px-6 md:px-0">{children}</div>
          </main>

          <footer className="py-4 text-center text-xs uppercase text-muted-foreground">
            Sinsajo &copy; {new Date().getFullYear()} Created by himelmaj
          </footer>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout

