import React from 'react';
import Stories_List from './Stories_List';
import { ActionIcon, Box, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { noAvatar } from '@/assets/common';
import { Camera } from 'lucide-react';
import Add_Story from './Add_Story';

export default function Stories() {
  return (
    <Group
      wrap='nowrap'
      p={5}
      gap={10}
      className='mt-3 border-Gray border-b-2 w-full'
    >
      {/* <Add_Story /> */}
      <Stories_List />
    </Group>
  );
}
