'use client';
import { AppShell } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import Header from './header/Header';
import Navbar from './Navbar';
import Aside from './aside/Aside';
import Footer from './Footer';
import Floating_Add_Post from './Floating_Add_Post';
import { ROUTES } from '@/content/routes';
import { usePathname } from 'next/navigation';

export default function Mantine_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pinned = useHeadroom({ fixedAt: 70 });
  const pathname = usePathname();

  return (
    <AppShell
      layout='alt'
      header={{ height: 60, collapsed: !pinned, offset: false }}
      footer={{ height: 40, collapsed: !pinned, offset: false }}
      navbar={{ width: { base: 170, lg: 220 }, breakpoint: 'md' }}
      aside={{
        width: { base: 0, lg: !pathname.includes(ROUTES.MESSAGES) ? 250 : 0 },
        breakpoint: 'lg',
        collapsed: { desktop: false, mobile: true },
      }}
      className='w-full min-h-screen'
    >
      <Header />

      <Navbar />

      <AppShell.Main
        // pt={pathname.includes(ROUTES.MESSAGES) ? 0 : 60}
        className='w-full'
      >
        {children}
      </AppShell.Main>

      <Aside />
      <Footer />
      {/* {!pathname.includes(ROUTES.MESSAGES) && <Aside />} */}
      {/* {!pathname.includes(ROUTES.MESSAGES) && <Footer />} */}
    </AppShell>
  );
}
