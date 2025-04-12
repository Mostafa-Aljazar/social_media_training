'use client';
import { noAvatar, noCover } from '@/assets/common';
import {
  ActionIcon,
  AspectRatio,
  Box,
  Button,
  Flex,
  Group,
  Radio,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import Image from 'next/image';
import React from 'react';
import {
  Calendar,
  Link as Link_Icon,
  Mail,
  MapPin,
  Search,
} from 'lucide-react';
export default function page() {
  return (
    <Stack align='' pb={30}>
      {/* Account Info*/}
      <Stack p={0} gap={0}>
        <Stack p={0} gap={0}>
          <Box className='relative w-full'>
            <AspectRatio ratio={3 / 1} className='w-full'>
              <Image
                src={noCover}
                alt='Cover'
                className='w-full h-40 md:h-56 !object-cover'
              />
            </AspectRatio>

            <Box
              className='left-1/2 absolute bg-gray-300 border-2 border-Gray rounded-full w-20 md:w-32 overflow-hidden'
              style={{
                transform: 'translateY(-50%) translateX(-50%)',
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

          <Group align='baseline' justify='center' gap={10} w={'100%'} mt={70}>
            <Title order={3}>Alasmar</Title>
            <Text c='dimmed' size='lg'>
              @alasmar_dev
            </Text>
          </Group>
        </Stack>
      </Stack>
      <Stack px={20}>
        {/* Account Privacy */}
        <Stack align='flex-start' gap={0}>
          <Text fw={500} fz={'lg'}>
            Select Privacy :
          </Text>
          <Radio.Group name='privacy'>
            <Group mt='xs' gap={50}>
              <Radio
                w={100}
                size='xs'
                value='public'
                label={
                  <Text fw={500} fz={'lg'}>
                    Public
                  </Text>
                }
              />
              <Radio
                w={100}
                size='xs'
                value='private'
                label={
                  <Text fw={500} fz={'lg'}>
                    Private
                  </Text>
                }
              />
            </Group>
          </Radio.Group>
        </Stack>
        {/* Language */}
        <Stack align='flex-start' gap={0}>
          <Text fw={500} fz={'lg'}>
            Select Language :
          </Text>
          <Radio.Group name='language'>
            <Group mt='xs' gap={50}>
              <Radio
                w={100}
                size='xs'
                value='en'
                label={
                  <Text fw={500} fz={'lg'}>
                    English
                  </Text>
                }
              />
              <Radio
                w={100}
                size='xs'
                value='ar'
                label={
                  <Text fw={500} fz={'lg'}>
                    عربي
                  </Text>
                }
              />
            </Group>
          </Radio.Group>
        </Stack>
        {/* Theme */}
        <Stack align='flex-start' gap={0}>
          <Text fw={500} fz={'lg'}>
            Select Theme :
          </Text>
          <Radio.Group name='theme'>
            <Group mt='xs' gap={50}>
              <Radio
                w={120}
                size='xs'
                value='Light'
                label={
                  <Text fw={500} fz={'lg'}>
                    Light
                  </Text>
                }
              />
              <Radio
                w={120}
                size='xs'
                value='Dark'
                label={
                  <Text fw={500} fz={'lg'}>
                    Dark
                  </Text>
                }
              />
            </Group>
          </Radio.Group>
        </Stack>

        <Group gap={20}>
          <Button
            w={150}
            variant='filled'
            color='grape'
            c='dark'
            size='md'
            radius='md'
            p={0}
            fw={600}
          >
            Save Changes
          </Button>
          <Button
            w={150}
            variant='outline'
            color='grape'
            size='md'
            radius='md'
            p={0}
            fw={500}
            // className='!w-fit'
          >
            Open profile
          </Button>
        </Group>
      </Stack>
    </Stack>
  );
}
