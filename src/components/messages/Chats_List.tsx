'use client';
import { noAvatar } from '@/assets/common';
import { ROUTES } from '@/content/routes';
import { cn } from '@/utility/cn';
import {
  ActionIcon,
  Divider,
  Flex,
  Group,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { MoveLeft, Trash2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Chats_List() {
  const pathName = usePathname();

  return (
    <Stack
      gap={0}
      className={cn(
        'relative min-w-[320px] w-full h-screen flex-1',
        pathName !== ROUTES.MESSAGES ? '!hidden md:!flex' : ''
      )}
    >
      <ScrollArea
        p={0}
        m={0}
        // w='100%'
        scrollbars='y'
        className='relative flex-grow border-Gray md:border-e-2 w-full'
      >
        <Group
          p={10}
          top={0}
          left={0}
          pos={'sticky'}
          className='bg-primary/75 shadow-2xl'
        >
          <Link href={ROUTES.HOME}>
            <ActionIcon className='!bg-transparent' hiddenFrom='md'>
              <MoveLeft />
            </ActionIcon>
          </Link>
          <Text fw={600} fz='lg' c='white' ta={'start'}>
            Messages
          </Text>
        </Group>
        <Stack gap={2} p={0}>
          {Array.from({ length: 20 }, (_, index) => (
            <Link
              key={index}
              href={`${ROUTES.MESSAGES}/123`}
              className='max-w-full'
            >
              <Group
                align='center'
                w='100%'
                gap={10}
                wrap='nowrap'
                px={10}
                py={20}
                className='flex'
              >
                <Image
                  src={noAvatar}
                  alt='avatar'
                  width={40}
                  height={40}
                  className='flex-shrink-0 border-1 border-purple-500 rounded-full'
                />

                <Stack
                  justify='center'
                  p={0}
                  gap={0}
                  className='flex-grow min-w-0'
                >
                  <Group
                    gap={10}
                    className='overflow-hidden'
                    wrap='nowrap'
                    w='100%'
                  >
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
                  <Group
                    gap={10}
                    className='max-w-full overflow-hidden'
                    wrap='nowrap'
                  >
                    <Text
                      fw={300}
                      fz='sm'
                      c='dimmed'
                      h={20}
                      w={'100%'}
                      className='overflow-hidden'
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Excepturi quisquam tempore nobis reiciendis quam commodi,
                      veniam reprehenderit beatae, deleniti ab molestiae velit
                      dolores itaque officiis consequatur omnis, suscipit totam
                      repellendus?
                    </Text>
                  </Group>
                </Stack>

                <ActionIcon className='flex-shrink-0 self-start !bg-transparent w-fit'>
                  <Trash2
                    size={15}
                    className='text-Gray hover:text-purple-500'
                  />
                </ActionIcon>
              </Group>
              <Divider className='bg-Gray' w='100%' h={1} />
            </Link>
          ))}
        </Stack>
      </ScrollArea>
    </Stack>
  );
}
