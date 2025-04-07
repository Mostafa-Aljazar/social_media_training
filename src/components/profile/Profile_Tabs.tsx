'use client';
import { cn } from '@/utility/cn';
import { Divider, Group, Stack, Tabs, Text } from '@mantine/core';
import React, { useState } from 'react';

const profile_Tabs = {
  Posts: 'Posts',
  Replies: 'Replies',
  Likes: 'Likes',
} as const;

type profile_Tab_Key = keyof typeof profile_Tabs;

export default function Profile_Tabs() {
  const [activeTab, setActiveTab] = useState<profile_Tab_Key>('Posts'); // Initialize with the key

  const activeTabSection = (tabKey: profile_Tab_Key) => (
    <Tabs.Tab value={tabKey} className='w-full'>
      <Text
        ta='center'
        className={cn(
          'transition-all duration-300 ease-in-out',
          activeTab === tabKey
            ? '!text-purple-500 !font-semibold '
            : 'font-medium !text-[#817C74]'
        )}
      >
        {profile_Tabs[tabKey]}
      </Text>
      <Divider
        orientation='horizontal'
        className={cn(
          ' transition-all duration-300 ease-in-out transform -translate-x-1/2 h-[3px] rounded-t-lg bg-purple-500',
          activeTab === tabKey ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
          'absolute bottom-0 left-1/2 w-16'
        )}
      />
    </Tabs.Tab>
  );

  return (
    <Stack p={0} gap={0}>
      <Tabs
        value={activeTab}
        variant=''
        onChange={(value) => value && setActiveTab(value as profile_Tab_Key)}
      >
        <Stack align='center' m={0} p={0}>
          <Tabs.List className='!p-0 w-full' grow>
            <Group
              gap={'lg'}
              justify='space-between'
              wrap='nowrap'
              className='!p-0 w-full'
            >
              {activeTabSection('Posts')}
              {activeTabSection('Replies')}
              {activeTabSection('Likes')}
            </Group>
          </Tabs.List>
        </Stack>
      </Tabs>
      <Divider color='dimmed' size={'sm'} className='w-full' />
    </Stack>
  );
}
