import Post from '@/components/feed/Post';
import { Stack } from '@mantine/core';
import React from 'react';

export default function Bookmarks() {
  return (
    <Stack p={10} pt={{ base: 70, md: 20 }} gap={10} w={'100%'}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}
