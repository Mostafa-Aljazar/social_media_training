'use client';
import { ActionIcon, Group, Input } from '@mantine/core';
import React from 'react';
import { Image as Image_Icon, SendHorizontal } from 'lucide-react';

export default function Chat_Form() {
  return (
    <Group
      p={10}
      bottom={0}
      left={0}
      pos={'sticky'}
      wrap='nowrap'
      className='bg-primary shadow-2xl w-full'
    >
      <Image_Icon size={24} />

      <Input.Wrapper className='w-full'>
        <Input placeholder='Input component' size='xs' className='w-full' />
      </Input.Wrapper>

      <ActionIcon className='!bg-transparent'>
        <SendHorizontal />
      </ActionIcon>
    </Group>
  );
}
