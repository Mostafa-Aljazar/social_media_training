'use client';
import Image from 'next/image';
import Link from 'next/link';
import { logo, noAvatar } from '@/assets/common';
import { AppShell, Stack, Text } from '@mantine/core';
import { usePathname } from 'next/navigation';
import { cn } from '@/utility/cn';
import { Nav_Menu_List } from '@/content/common/navbar';

export default function Navbar() {
  const path = usePathname();

  return (
    <AppShell.Navbar
      visibleFrom='md'
      className='!bg-primary p-5 !border-[#363636] !border-l-[1px]'
      aria-label='Main navigation'
    >
      <Stack className='w-full h-full'>
        {/* Logo */}
        <Link
          href='/'
          className='hidden md:block hover:opacity-90 mb-8 rounded-full transition-opacity'
          aria-label='Home'
        >
          <Image
            src={logo}
            alt='Twitter logo'
            width={75}
            height={75}
            className='rounded-full'
            priority
          />
        </Link>

        {/* Main menu */}
        <Stack justify='space-between' className='h-full'>
          <Stack gap={2}>
            {Nav_Menu_List.map((item) => {
              const isActive = path === item.link;
              return (
                <Link
                  key={item.id}
                  href={item.link}
                  className={cn(
                    'flex items-center gap-4 p-2 rounded-xl hover:bg-white/10 transition-colors duration-200',
                    isActive && 'text-purple-500 font-semibold'
                  )}
                >
                  <span className={cn(isActive && 'text-purple-500')}>
                    {item.icon}
                  </span>
                  <Text
                    fz='md'
                    className={cn('tracking-wide', isActive && 'font-bold')}
                  >
                    {item.name}
                  </Text>
                </Link>
              );
            })}
          </Stack>

          {/* User profile */}
          <Link
            href='/profile/123'
            className='flex items-center gap-3 hover:bg-white/10 p-2 rounded-lg transition-colors duration-200'
          >
            <Image
              src={noAvatar}
              alt='User profile'
              width={40}
              height={40}
              className='border-[1px] border-Gray rounded-full'
            />
            <Stack gap={0}>
              <Text fz='sm' c='white' truncate>
                Asmar
              </Text>
              <Text fz='xs' c='gray' truncate>
                Asmar@gmail.com
              </Text>
            </Stack>
          </Link>
        </Stack>
      </Stack>
    </AppShell.Navbar>
  );
}
