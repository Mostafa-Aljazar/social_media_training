import { recommendations } from '@/components/common/aside/Recommendations';
import Search_Component from '@/components/common/aside/Search';
import User_Card from '@/components/common/aside/User';
import Search_Tabs from '@/components/explore/Search_Tabs';
import Post from '@/components/feed/Post';
import { Divider, Stack } from '@mantine/core';
import React from 'react';

export default function Explore() {
  return (
    <Stack pt={{ base: 70, md: 20 }} className='bg-primary p-3 w-full h-full'>
      <Search_Component />
      <Search_Tabs />
      {recommendations.map((user) => (
        <User_Card
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          // avatarUrl={noAvatar.src}
        />
      ))}
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Stack>
  );
}
