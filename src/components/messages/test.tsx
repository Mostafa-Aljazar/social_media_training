'use client';
import { noAvatar } from '@/assets/common';
import {
  ActionIcon,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { Divide, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export default function Chats_List() {
  return (
    <Stack gap={0} p={0} className='relative px-2 max-w-[400px] h-screen'>
      {/* Scrollable chat area */}
      <ScrollArea
        p={0}
        m={0}
        w='100%'
        scrollbars='y'
        className='relative flex-grow border-e-2 border-Gray overflow-hidden'
      >
        {/* Header */}
        <Stack
          justify='center'
          p={10}
          top={0}
          left={0}
          pos={'sticky'}
          className='bg-primary/75 shadow-2xl'
        >
          <Text fw={600} fz='lg' c='white'>
            Messages
          </Text>
        </Stack>
        {/* Example chat boxes */}
        {Array.from({ length: 20 }, (_, index) => (
          <Stack gap={0} key={index} p={10}>
            <Group
              p={10}
              justify='space-between'
              align='center'
              h={80}
              w='100%'
              gap={5}
              wrap='nowrap'
              className='px-5 overflow-hidden'
            >
              <Image
                src={noAvatar}
                alt='avatar'
                width={40}
                height={40}
                className='border-1 border-purple-500 rounded-full'
              />
              <Stack gap={0} h={'100%'} className='flex-grow w-full'>
                <Group
                  wrap='nowrap'
                  justify='space-between'
                  gap={2}
                  w={'100%'}
                  className='overflow-hidden'
                >
                  <Group gap={10} className='overflow-hidden'>
                    <Text fw={500} fz='md' c='white' className='truncate'>
                      Asmar
                    </Text>
                    <Text fz='sm' c='dimmed' className='truncate'>
                      @mostafa
                    </Text>
                    <Text fz='sm' c='dimmed' className='truncate'>
                      2025/8/4
                    </Text>
                  </Group>
                  <ActionIcon className='!bg-transparent w-fit'>
                    <Trash2 size={18} className='text-Gray' />
                  </ActionIcon>
                </Group>
                <Text
                  fw={300}
                  fz='sm'
                  c='dimmed'
                  truncate='end'
                  className='whitespace-nowrap'
                >
                  {truncateText(
                    'Last message here, this is a long message to test the truncation of the text',
                    40
                  )}
                </Text>
              </Stack>
            </Group>
            <Divider className='bg-Gray' style={{ height: 1, width: '100%' }} />
          </Stack>
        ))}
      </ScrollArea>
    </Stack>
  );
}
