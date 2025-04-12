'use client';
import { noAvatar, noCover } from '@/assets/common';
import {
  ActionIcon,
  Button,
  Divider,
  Group,
  Popover,
  Stack,
  Text,
} from '@mantine/core';
import { EllipsisVertical, Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';

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
              <Stack
                gap={0}
                className='!relative bg-gray-600 rounded-md rounded-bl-none w-fit max-w-xs overflow-hidden'
              >
                <Popover position='right-start' offset={10}>
                  <Popover.Target>
                    <ActionIcon
                      className='top-2 right-1.5 !absolute !bg-transparent'
                      size={'xs'}
                    >
                      <EllipsisVertical
                        size={18}
                        className='text-Gray hover:text-purple-500'
                      />
                    </ActionIcon>
                  </Popover.Target>

                  <Popover.Dropdown
                    p={0}
                    className='!bg-primary !border-Gray !rounded-sm'
                    w={100}
                  >
                    <Stack gap={0} w={'100%'}>
                      <Button
                        variant='transparent'
                        p={0}
                        radius={0}
                        c={'white'}
                        className='hover:!text-red-500'
                      >
                        <Group w={100} justify='space-between' p={5}>
                          <Text fw={400} fz={'sm'}>
                            Delete
                          </Text>
                          <Trash2 size={15} />
                        </Group>
                      </Button>
                      <Divider h={1} w={'100%'} />
                      <Button
                        variant='transparent'
                        p={0}
                        radius={0}
                        c={'white'}
                        className='hover:!text-purple-500'
                      >
                        <Group w={100} justify='space-between' p={5}>
                          <Text fw={400} fz={'sm'}>
                            Edit
                          </Text>
                          <Pencil size={15} />
                        </Group>
                      </Button>
                    </Stack>
                  </Popover.Dropdown>
                </Popover>
                <Image
                  src={noCover}
                  alt='noCover'
                  width={320}
                  className='border-1 border-Gray object-contain'
                />
                <Text fw={500} fz='sm' c='white' ta='start' p={5}>
                  {messages[0].text}
                </Text>
              </Stack>
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
