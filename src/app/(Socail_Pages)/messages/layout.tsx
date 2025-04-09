'use client';
import Chats_List from '@/components/messages/Chats_List';
import { ROUTES } from '@/content/routes';
import { cn } from '@/utility/cn';
import { Group } from '@mantine/core';
import { usePathname } from 'next/navigation';

export default function Messages_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  return (
    <Group wrap='nowrap' w='100%' gap={0}>
      <Chats_List />
      <div
        className={cn(
          ' min-h-screen w-full',
          pathName === ROUTES.MESSAGES ? 'hidden md:block' : ''
        )}
      >
        {children}
      </div>
    </Group>
  );
}
