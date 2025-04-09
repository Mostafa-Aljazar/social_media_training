import React from 'react';
import { ActionIcon, Box, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { noAvatar } from '@/assets/common';
import { Camera } from 'lucide-react';

export default function Add_Story() {
  return (
    <Stack align='center' className='relative' gap={0}>
      <Box
        className='relative bg-gray-300 border-2 border-Gray rounded-full w-16 overflow-hidden'
        style={{
          aspectRatio: '1 / 1',
        }}
      >
        <Image
          src={noAvatar}
          alt='Avatar'
          className='w-full h-full object-cover'
        />
        <ActionIcon
          variant='outline'
          color='gray.5'
          radius='100%'
          className='bottom-1/2 left-1/2 absolute !border-purple-500 border-2 rounded-full'
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          <Camera size={20} className='text-purple-500' />
        </ActionIcon>
      </Box>
      <Text fw={300} fz={'sm'}>
        add story
      </Text>
    </Stack>
  );
}
