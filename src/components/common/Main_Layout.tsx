'use client';
import { logo } from '@/assets/common';
import { AppShell, Burger, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure, useHeadroom } from '@mantine/hooks';
import Image from 'next/image';
import Navbar from './Navbar';
import Aside from './aside/Aside';

export default function Mantine_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [opened, { toggle }] = useDisclosure();
  const pinned = useHeadroom({ fixedAt: 70 });

  return (
    <AppShell
      // layout='alt'
      aside={{
        width: 250,
        breakpoint: 'lg',
        collapsed: { desktop: false, mobile: true },
      }}
      header={{ height: 72, collapsed: !pinned, offset: false }}
      // withBorder={false}
      className='flex flex-col w-full min-h-screen'
      navbar={{ width: 220, breakpoint: 'md', collapsed: { mobile: !opened } }}
    >
      <AppShell.Header zIndex={50} className='!z-50'>
        <Group h='100%' px='md'>
          <Burger opened={opened} onClick={toggle} hiddenFrom='md' size='sm' />
          <Image src={logo} alt='logo' height={30} width={30} />
        </Group>
      </AppShell.Header>

      <Navbar toggle={toggle} />

      <AppShell.Main>
        {children}
        Alt layout – Navbar and Aside are rendered on top on Header and Footer
      </AppShell.Main>

      <Aside />
    </AppShell>
  );
}
