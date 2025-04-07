import { noAvatar, noCover } from '@/assets/common';
import {
  ActionIcon,
  AspectRatio,
  Box,
  Button,
  Flex,
  Group,
  Stack,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { Calendar, Camera, Mail, MapPin, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Edit_Profile() {
  return (
    <Stack p={0} gap={40} className='!m-0 !p-0 !w-full'>
      <Box className='relative w-full'>
        <Box className='relative w-full h-48'>
          <Image
            src={noCover}
            alt='Cover'
            className='w-full h-full !object-fill'
          />
          <ActionIcon
            variant='outline'
            color='gray.5'
            radius='100%'
            className='bottom-1/2 left-1/2 absolute bg-gray-300 border-2 border-Gray rounded-full'
            style={{ transform: 'translate(-50%, -50%)' }} // Centers it perfectly in the AspectRatio
          >
            <Camera size={20} />
          </ActionIcon>
        </Box>

        <Box
          className='left-4 absolute bg-gray-300 border-2 border-Gray rounded-full w-20 overflow-hidden'
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
          <ActionIcon
            variant='outline'
            color='gray.5'
            radius='100%'
            className='bottom-1/2 left-1/2 absolute bg-gray-300 border-2 border-Gray rounded-full'
            style={{ transform: 'translate(-50%, -50%)' }} // Centers it perfectly in the AspectRatio
          >
            <Camera size={20} />
          </ActionIcon>
        </Box>
      </Box>

      <Stack w='100%' p='sm' gap={10}>
        <TextInput label='Username' placeholder='Enter username...' />
        <TextInput label='Name' placeholder='Enter name...' />
        <Textarea
          label='Bio'
          placeholder='Enter bio...'
          minRows={2}
          maxRows={4}
        />
        <TextInput label='Location' placeholder='Enter location...' />
        <TextInput label='Link' placeholder='Enter Link...' />
      </Stack>
    </Stack>
  );
}
