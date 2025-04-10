'use client';
import { ActionIcon, Box, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { noAvatar } from '@/assets/common';
import { Image as ImageIcon } from 'lucide-react';
import { useDisclosure } from '@mantine/hooks';
import Add_Story_Modal from './Add_Story_Modal';

export default function Add_Story() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Stack align='center' className='relative' gap={0}>
        <Box
          className='relative bg-gray-300 border-2 border-Gray rounded-full w-16 overflow-hidden cursor-pointer'
          style={{
            aspectRatio: '1 / 1',
          }}
          onClick={open}
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
            <ImageIcon
              width={20}
              height={20}
              className='inline-block mr-1 w-4 h-4 text-purple-500 cursor-pointer'
            />
          </ActionIcon>
        </Box>
        <Text fw={300} fz={'sm'}>
          add story
        </Text>
      </Stack>

      <Add_Story_Modal opened={opened} close={close} />
    </>
  );
}
