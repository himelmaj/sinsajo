import { ModeToggle } from "@/components/layout/mode-toggle";
import type React from "react";
import Image from "next/image";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      <section className="hidden w-1/2 items-center justify-center bg-gray-100 dark:bg-black lg:flex">
        <Image
          src="/images/login-hero.gif"
          alt="Sinsajo"
          width={400}
          height={400}
          className="grayscale pointer-events-none"
          priority
          unoptimized
        />
      </section>

      <main className="flex w-full flex-col bg-background lg:w-1/2 px-4 py-4">
        <header className="flex justify-end pb-4">
          <ModeToggle  />
        </header>

        <section className="flex flex-1 items-center justify-center">
          <div className="px-4 sm:px-6 md:px-0">{children}</div>
        </section>

        <footer className="py-4 text-center text-xs uppercase text-muted-foreground">
          Sinsajo &copy; {new Date().getFullYear()} Created by himelmaj
        </footer>
      </main>
    </div>
  );
};

export default AuthLayout;