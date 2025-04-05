'use client';
import { cn } from '@/utility/cn';
import { Divider, Group, Stack, Tabs, Text } from '@mantine/core';
import React, { useState } from 'react';

const explore_Tabs = {
  All: 'All',
  Users: 'Users',
  Posts: 'Posts',
} as const;

type explore_Tab_Key = keyof typeof explore_Tabs;

export default function Search_Tabs() {
  const [activeTab, setActiveTab] = useState<explore_Tab_Key>('All'); // Initialize with the key

  const activeTabSection = (tabKey: explore_Tab_Key) => (
    <Tabs.Tab value={tabKey} className='w-full'>
      <Text
        ta='center'
        className={cn(
          'transition-all duration-300 ease-in-out',
          activeTab === tabKey
            ? '!text-purple-500 !font-bold '
            : '!font-semibold !text-[#817C74]'
        )}
      >
        {explore_Tabs[tabKey]} {/* Display the user-friendly name */}
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
    <Tabs
      value={activeTab}
      variant=''
      onChange={(value) => value && setActiveTab(value as explore_Tab_Key)}
    >
      <Stack align='center'>
        <Tabs.List className='!p-0 w-fit'>
          <Group gap={'lg'} wrap='nowrap' className='!p-0'>
            {activeTabSection('All')}
            {activeTabSection('Users')}
            {activeTabSection('Posts')}
          </Group>
        </Tabs.List>
      </Stack>
    </Tabs>
  );
}
