import { CorsaLegendsPageShell } from '@/components/corsalegends/wiki-navigation';
import { Footer } from '@/components/layout/footer';
import { Navbar } from '@/components/layout/navbar';
import type { ReactNode } from 'react';

export default function CorsaLegendsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#08090B]">
      <Navbar scroll={true} />
      <main className="flex-1">
        <CorsaLegendsPageShell>{children}</CorsaLegendsPageShell>
      </main>
      <Footer />
    </div>
  );
}
