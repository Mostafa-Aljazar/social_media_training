import { noAvatar } from '@/assets/common';
import { ActionIcon, Group, Stack, Text } from '@mantine/core';
import { Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Chat_Messages() {
  const messages = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime, ab impedit quasi sunt sequi atque id? Odio, sit accusamus fuga a eos dolorum, natus dolore porro voluptatibus fugit officia?',
      timestamp: 'Dec 7, 2020, 2:27 AM',
    },
  ];

  return (
    <Stack
      gap={2}
      p={0}
      className='min-h-full' // Ensure it takes full height even if empty
    >
      {messages.length > 0 ? (
        Array.from({ length: 5 }, (_, index) => (
          <Group
            key={index}
            justify='flex-end'
            align='center'
            gap={10}
            wrap='nowrap'
            p={5}
          >
            <Image
              src={noAvatar}
              alt='avatar'
              width={30}
              height={30}
              className='border-1 border-purple-500 rounded-full'
            />
            <Stack gap={0} className='flex-grow'>
              <Group wrap='nowrap' justify='space-between' gap={2}>
                <Text
                  fw={500}
                  fz='sm'
                  c='white'
                  p={5}
                  className='bg-gray-600 rounded-md rounded-bl-none max-w-xs'
                >
                  {messages[0].text}
                </Text>
                {/* <ActionIcon className='!bg-transparent'>
                  <Trash2
                    size={18}
                    className='text-gray-400 hover:text-purple-500'
                  />
                </ActionIcon>*/}
              </Group>
              <Text fw={300} fz='xs' c='dimmed' truncate='end'>
                {messages[0].timestamp}
              </Text>
            </Stack>
          </Group>
        ))
      ) : (
        <Stack h='100%' justify='center' align='center'>
          <Text c='dimmed'>No messages yet</Text>
        </Stack>
      )}
    </Stack>
  );
}
