import { noAvatar, noCover } from '@/assets/common';
import { ActionIcon, Center, Group, Stack, Text } from '@mantine/core';
import { EllipsisVertical, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Chat_Messages() {
  const messages = [
    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis maxime, ab impedit quasi sunt sequi atque id? Odio, sit accusamus fuga a eos dolorum, natus dolore porro voluptatibus fugit officia?',
      // text: 'Lorem ipsum dolor',
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
        Array.from({ length: 10 }, (_, index) => (
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
              <Image
                src={noCover}
                alt='noCover'
                width={320}
                className='border-1 border-Gray rounded-md object-contain'
              />
              <Group
                wrap='nowrap'
                align='flex-start'
                p={5}
                className='bg-gray-600 rounded-md rounded-bl-none w-fit max-w-xs'
              >
                <Text fw={500} fz='sm' c='white'>
                  {messages[0].text}
                </Text>
                <ActionIcon className='!bg-transparent' size={'xs'}>
                  <EllipsisVertical
                    size={18}
                    className='text-gray-400 hover:text-purple-500'
                  />
                </ActionIcon>
              </Group>
              <Text fw={300} fz='xs' c='dimmed' truncate='end'>
                {messages[0].timestamp}
              </Text>
            </Stack>
          </Group>
        ))
      ) : (
        <Text fw={600} fz={24} c='dimmed' ta='center' mt={100}>
          No messages yet
        </Text>
      )}
    </Stack>
  );
}
