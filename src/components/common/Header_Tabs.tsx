'use client';
import { cn } from '@/utility/cn';
import { Divider, Group, Stack, Tabs, Text } from '@mantine/core';
import React, { useState } from 'react';

const headerTabs = {
  For_You: 'for you',
  Following: 'following',
} as const;

type HeaderTabKey = keyof typeof headerTabs;

export default function Header_Tabs() {
  const [activeTab, setActiveTab] = useState<HeaderTabKey>('For_You'); // Initialize with the key

  const activeTabSection = (tabKey: HeaderTabKey) => (
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
        {headerTabs[tabKey]} {/* Display the user-friendly name */}
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
      onChange={(value) => value && setActiveTab(value as HeaderTabKey)}
    >
      <Stack align='center'>
        <Tabs.List className='!p-0 w-fit'>
          <Group gap={'lg'} wrap='nowrap' className='!p-0'>
            {activeTabSection('For_You')}
            {activeTabSection('Following')}
          </Group>
        </Tabs.List>
      </Stack>
    </Tabs>
  );
}
