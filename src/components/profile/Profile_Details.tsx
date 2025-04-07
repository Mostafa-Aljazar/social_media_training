'use client';
import { noAvatar, noCover } from '@/assets/common';
import {
  ActionIcon,
  AspectRatio,
  Box,
  Button,
  Flex,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  Calendar,
  Link as Link_Icon,
  Mail,
  MapPin,
  Search,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Profile_Modal from './Profile_Modal';

export default function Profile_Details() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Stack p={0} gap={0}>
        <Stack p={0} gap={0}>
          <Box className='relative w-full'>
            <AspectRatio ratio={3 / 1} className='w-full'>
              <Image
                src={noCover}
                alt='Cover'
                className='w-full h-40 md:h-56 !object-fill'
              />
            </AspectRatio>

            <Box
              className='left-4 absolute bg-gray-300 border-2 border-Gray rounded-full w-20 md:w-32 overflow-hidden'
              style={{
                transform: 'translateY(-50%)',
                aspectRatio: '1 / 1',
              }}
            >
              <Image
                src={noAvatar}
                alt='Avatar'
                className='w-full h-full object-cover'
              />
            </Box>
          </Box>

          <Flex justify='flex-end' align='center' gap='sm' p='sm' w='100%'>
            <ActionIcon
              variant='outline'
              color='gray.5'
              size={36}
              radius='100%'
            >
              <Search size={20} />
            </ActionIcon>

            <ActionIcon
              variant='outline'
              color='gray.5'
              size={36}
              radius='100%'
            >
              <Mail size={20} />
            </ActionIcon>

            <Button
              variant='filled'
              color='gray.0'
              c='black'
              px='md'
              py='xs'
              radius='xl'
              fw={700}
            >
              Follow
            </Button>
            {/* Edit Profile */}
            <>
              <Button
                variant='filled'
                color='gray.0'
                c='black'
                px='md'
                py='xs'
                radius='xl'
                fw={700}
                onClick={open}
              >
                Edit Profile
              </Button>
              <Profile_Modal opened={opened} close={close} />
            </>
          </Flex>
          <Stack gap={8} px={16}>
            <div>
              <Title order={3}>Alasmar</Title>
              <Text c='dimmed' size='sm'>
                @alasmar_dev
              </Text>
            </div>
            <Group gap={5}>
              <Link_Icon size={15} />
              <Text
                size='sm'
                c='dimmed'
                className='hover:!underline hover:!cursor-pointer'
              >
                Alasmar Youtube Channel
              </Text>
            </Group>
            <Group gap='md'>
              <Group gap={5}>
                <MapPin size={18} />
                <Text size='sm' c='dimmed'>
                  USA
                </Text>
              </Group>
              <Group gap={5}>
                <Calendar size={18} />
                <Text size='sm' c='dimmed'>
                  Joined April 2025
                </Text>
              </Group>
            </Group>
            <Group gap='md'>
              <Group gap={5}>
                <Text fw={500}>100</Text>
                <Text size='sm' c='dimmed'>
                  Followers
                </Text>
              </Group>
              <Group gap={5}>
                <Text fw={500}>100</Text>
                <Text size='sm' c='dimmed'>
                  Following
                </Text>
              </Group>
            </Group>
          </Stack>
        </Stack>
      </Stack>

      <></>
    </>
  );
}
