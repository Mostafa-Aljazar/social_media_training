'use client';

import { Group, Text } from '@mantine/core';
import { Bookmark, Heart, MessageCircle, Repeat2, Send } from 'lucide-react';

export default function Post_Interactions() {
  return (
    <Group
      gap={0}
      align='center'
      justify='space-between'
      wrap='nowrap'
      px={20}
      className='w-full'
    >
      {/* LIKE */}
      <Group align='center' gap={8} justify='center' className='cursor-pointer'>
        <Heart size={18} />
        <Text fz={14}>157</Text>
      </Group>
      {/* COMMENTS */}
      <Group align='center' gap={8} justify='center' className='cursor-pointer'>
        <MessageCircle size={18} />
        <Text fz={14}>157</Text>
      </Group>
      {/* REPOST */}
      <Group align='center' gap={8} justify='center' className='cursor-pointer'>
        <Repeat2 size={18} />
        <Text fz={14}>157</Text>
      </Group>
      {/* SAVE & SHARE  */}
      <Group align='center' justify='center' gap={8}>
        <Bookmark className='cursor-pointer' size={18} />
        <Send className='cursor-pointer' size={18} />
      </Group>
    </Group>
  );
}
