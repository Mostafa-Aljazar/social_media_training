import Floating_Add_Post from '@/components/common/Floating_Add_Post';
import Feed from '@/components/feed/Feed';
import Create_Post from '@/components/feed/create-post';
import Stories from '@/components/home/story/Stories';
import { Stack } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <Stack
      align='center'
      justify='center'
      w={'100%'}
      h={'100%'}
      pt={60}
      className='!bg-primary'
    >
      <Stories />
      <Link href='/post/add-post' className='m-5 w-full'>
        <Create_Post />
      </Link>

      <Feed />

      <Floating_Add_Post />
    </Stack>
  );
}
