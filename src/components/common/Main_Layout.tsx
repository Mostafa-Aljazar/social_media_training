'use client';
import { AppShell } from '@mantine/core';
import { useHeadroom } from '@mantine/hooks';
import Header from './Header';
import Navbar from './Navbar';
import Aside from './aside/Aside';
import Footer from './Footer';
import Floating_Add_Post from './Floating_Add_Post';

export default function Mantine_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pinned = useHeadroom({ fixedAt: 70 });

  return (
    <AppShell
      layout='alt'
      header={{ height: 60, collapsed: !pinned, offset: false }}
      footer={{ height: 40, collapsed: !pinned, offset: false }}
      navbar={{ width: 220, breakpoint: 'md' }}
      aside={{
        width: 250,
        breakpoint: 'lg',
        collapsed: { desktop: false, mobile: true },
      }}
      className='w-full min-h-screen'
    >
      <Header />

      <Navbar />

      <AppShell.Main mt={60}>{children}</AppShell.Main>

      <Aside />

      <Footer />

      <Floating_Add_Post />
    </AppShell>
  );
}
