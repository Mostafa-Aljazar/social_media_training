import { Center, Text } from '@mantine/core';
import React from 'react';

export default function Select_Message() {
  return (
    <Center className='bg-primary w-full h-screen'>
      <Text
        fw={600}
        fz={24}
        c='white'
        w={{ base: 250, lg: 300 }}
        ta={{ base: 'start', lg: 'center' }}
      >
        Select a conversation to view messages or start a new conversation
      </Text>
    </Center>
  );
}
