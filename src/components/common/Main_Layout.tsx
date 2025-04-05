'use client';
import { AppShell } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import Navbar from './Navbar';
import Aside from './aside/Aside';
import Header from './Header';

export default function Mantine_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 70 });

  return (
    <AppShell
      layout='alt'
      header={{ height: 60, collapsed: !pinned, offset: false }}
      navbar={{ width: 220, breakpoint: 'md', collapsed: { mobile: !opened } }}
      aside={{
        width: 250,
        breakpoint: 'lg',
        collapsed: { desktop: false, mobile: true },
      }}
      className='w-full min-h-screen'
    >
      <Header opened={opened} toggle={toggle} />

      <Navbar toggle={toggle} />

      <AppShell.Main mt={60}>{children}</AppShell.Main>

      <Aside />
    </AppShell>
  );
}
