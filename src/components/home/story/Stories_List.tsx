import { noAvatar } from '@/assets/common';
import { Box, Group, ScrollArea, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import Add_Story from './Add_Story';

export default function Stories_List() {
  return (
    <Group p={0} gap={10} className='w-full'>
      <ScrollArea type='auto' scrollbars='x' className='h-full'>
        <Group gap={15} wrap='nowrap' w='max-content'>
          <Add_Story />
          {Array.from({ length: 15 }, (_, index) => (
            <Stack align='center' className='relative' gap={0} key={index}>
              <Box className='bg-gray-300 border-2 border-Gray rounded-full w-16 h-16 overflow-hidden'>
                <Image
                  src={noAvatar}
                  alt='Avatar'
                  className='w-full h-full object-cover'
                  width={64}
                  height={64}
                />
              </Box>
              <Text fw={300} fz='sm'>
                mostafa
              </Text>
            </Stack>
          ))}
        </Group>
      </ScrollArea>
    </Group>
  );
}
