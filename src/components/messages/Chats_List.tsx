'use client';
import { noAvatar } from '@/assets/common';
import { ROUTES } from '@/content/routes';
import { cn } from '@/utility/cn';
import {
  ActionIcon,
  Divider,
  Flex,
  Group,
  px,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { MoveLeft, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

export default function Chats_List() {
  const router = useRouter();
  const pathName = usePathname();

  return (
    <Stack
      gap={0}
      className={cn(
        'relative min-w-[320px] w-full h-screen ',
        pathName !== ROUTES.MESSAGES ? '!hidden md:!flex' : ''
      )}
    >
      <ScrollArea
        p={0}
        m={0}
        w='100%'
        scrollbars='y'
        className='relative flex-grow border-Gray md:border-e-2'
      >
        <Group
          p={10}
          top={0}
          left={0}
          pos={'sticky'}
          className='bg-primary/75 shadow-2xl'
        >
          <ActionIcon
            className='!bg-transparent'
            onClick={() => router.push(ROUTES.HOME)}
            hiddenFrom='md'
          >
            <MoveLeft />
          </ActionIcon>
          <Text fw={600} fz='lg' c='white' ta={'start'}>
            Messages
          </Text>
        </Group>
        <Stack gap={2} p={0}>
          {Array.from({ length: 20 }, (_, index) => (
            <Stack
              align='center'
              justify='center'
              gap={0}
              key={index}
              p={0}
              h={80}
            >
              <Group
                justify='center'
                align='center'
                h={'100%'}
                w='100%'
                gap={10}
                wrap='nowrap'
                p={10}
              >
                <Image
                  src={noAvatar}
                  alt='avatar'
                  width={40}
                  height={40}
                  className='border-1 border-purple-500 rounded-full'
                />
                <Stack
                  justify='center'
                  p={0}
                  gap={0}
                  h={'100%'}
                  className='flex-grow w-full'
                >
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
                      <Trash2
                        size={18}
                        className='text-Gray hover:text-purple-500'
                      />
                    </ActionIcon>
                  </Group>
                  <Text
                    fw={300}
                    fz='sm'
                    c='dimmed'
                    truncate='end'
                    className='whitespace-nowrap'
                    visibleFrom='md'
                  >
                    {truncateText(
                      'Last message here, this is a long message to test the truncation of the text',
                      30
                    )}
                  </Text>
                  <Text
                    fw={300}
                    fz='sm'
                    c='dimmed'
                    truncate='end'
                    className='whitespace-nowrap'
                    hiddenFrom='md'
                  >
                    {truncateText(
                      'Last message here, this is a long message to test the truncation of the text',
                      45
                    )}
                  </Text>
                </Stack>
              </Group>
              <Divider className='bg-Gray' w={'100%'} h={1} />
            </Stack>
          ))}
        </Stack>
      </ScrollArea>
    </Stack>
  );
}
