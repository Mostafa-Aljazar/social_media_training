'use client';
import { logo } from '@/assets/common';
import { AppShell, Burger, Flex, Group, Stack } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import Header_Tabs from './Header_Tabs';

type Props = {
  opened: boolean;
  toggle: () => void;
};

export default function Header({ opened, toggle }: Props) {
  return (
    <AppShell.Header
      zIndex={50}
      className='!bg-primary shadow-2xl !border-[#363636] !border-b-[1px] ]'
    >
      <Flex justify='space-between' align='center' h='100%' px='md'>
        <Group gap='sm' align='center' hiddenFrom='md'>
          <Burger
            opened={opened}
            onClick={toggle}
            size='md'
            color={'#71767b'}
          />
          <Image
            src={logo}
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
          <Header_Tabs />
        </Stack>
      </Flex>
    </AppShell.Header>
  );
}
