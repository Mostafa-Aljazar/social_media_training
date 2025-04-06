'use client';
import { Footer_Menu_List } from '@/content/common/footer';
import { Nav_Menu_List } from '@/content/common/navbar';
import { cn } from '@/utility/cn';
import { AppShell, Group } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const path = usePathname();

  return (
    <AppShell.Footer
      hiddenFrom='md'
      withBorder={false}
      zIndex={50}
      className='!bg-primary/90'
    >
      <Group justify='space-evenly' align='center' className='w-full h-full'>
        {Footer_Menu_List.map((item) => {
          const isActive = path === item.link;
          return (
            <Link
              key={item.id}
              href={item.link}
              className={cn(
                ' hover:bg-white/10 transition-colors duration-200',
                isActive && 'text-purple-500 font-semibold'
              )}
            >
              {item.icon}
            </Link>
          );
        })}
      </Group>
    </AppShell.Footer>
  );
}
