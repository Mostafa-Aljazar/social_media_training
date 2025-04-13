'use client';
import { ASMAR, asmar, logo } from '@/assets/common';
import { AppShell, Flex, Group, Stack } from '@mantine/core';
import Image from 'next/image';
import Header_Tabs from './Header_Tabs';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/content/routes';
import { cn } from '@/utility/cn';

export default function Header() {
  const path = usePathname();
  return (
    <AppShell.Header
      zIndex={50}
      className={cn(
        '!bg-primary/90 shadow-2xl !border-[#363636] !border-b-[1px]',
        `${
          path.includes(ROUTES.EXPLORE) ||
          path.includes(ROUTES.NOTIFICATION) ||
          path.includes(ROUTES.BOOKMARKS) ||
          path.includes(ROUTES.PROFILE) ||
          path.includes(ROUTES.ADD_POST) ||
          path.includes(ROUTES.SETTINGS)
            ? 'md:!hidden'
            : ''
        }`
      )}
      hidden={path.includes(ROUTES.MESSAGES)}
    >
      <Flex justify='space-between' align='center' h='100%' px='md'>
        <Group gap='sm' align='center' hiddenFrom='md'>
          <Image
            src={ASMAR}
            alt='Twitter logo'
            width={60}
            height={60}
            className='rounded-xl'
            priority
          />
        </Group>
        <Stack
          justify='flex-end'
          align='center'
          className='flex-grow flex-1 h-full'
        >
          {path === ROUTES.HOME && <Header_Tabs />}
        </Stack>
      </Flex>
    </AppShell.Header>
  );
}
