'use client';
import { noAvatar } from '@/assets/common';
import { ROUTES } from '@/content/routes';
import { ActionIcon, Group, Text } from '@mantine/core';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Chat_Header() {
  const router = useRouter();

  return (
    <Group
      p={10}
      top={0}
      left={0}
      pos={'sticky'}
      className='bg-primary shadow-2xl'
    >
      <ActionIcon
        className='!bg-transparent'
        onClick={() => router.push(ROUTES.MESSAGES)}
        hiddenFrom='md'
      >
        <MoveLeft />
      </ActionIcon>
      <Image
        src={noAvatar}
        alt='avatar'
        width={35}
        height={35}
        className='border-1 border-purple-500 rounded-full'
      />
      <Text fw={500} fz='md' c='white' className='truncate'>
        Asmar
      </Text>
    </Group>
  );
}
