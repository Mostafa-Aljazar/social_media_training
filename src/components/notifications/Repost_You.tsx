import React from 'react';
import { Group, Paper, Stack, Text } from '@mantine/core';
import { Repeat2 } from 'lucide-react';
import Image from 'next/image';
import { noAvatar } from '@/assets/common';

export default function Repost_You() {
  return (
    <Paper w={'100%'} bg={'dark.4'} p={10} shadow='xl' className='rounded-lg'>
      <Group align='flex-start' gap={10}>
        <Repeat2 size={25} className='text-purple-500' />
        <Stack gap={0}>
          <Image
            src={noAvatar}
            alt='user'
            className='border-[1px] border-Gray rounded-full w-8 h-8'
          />
          <Text c={'white'} fw={400}>
            <span className='font-semibold'>Alasmar</span> re-post your follow
            you
          </Text>
        </Stack>
      </Group>
    </Paper>
  );
}
