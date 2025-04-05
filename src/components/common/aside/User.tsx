import { noAvatar } from '@/assets/common';
import { Button, Group, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import React from 'react';

type UserProps = {
  id: number;
  name: string;
  username: string;
  //   avatarUrl?: string;
};
export default function User_Card(UserProps: UserProps) {
  const user = UserProps;
  return (
    <Group key={user.id} align='center' justify='space-between'>
      <Group gap='sm'>
        <Image
          src={noAvatar}
          alt={user.username}
          className='border-[1px] border-Gray rounded-full object-cover'
          width={35}
          height={35}
        />
        <Stack gap={-20}>
          <Text fw={400} fz={14}>
            {user.name}
          </Text>
          <Text c='dimmed' fw={400} fz={12}>
            {user.username}
          </Text>
        </Stack>
      </Group>
      <Button
        variant='white'
        size='xs'
        color={'dark'}
        radius={'xl'}
        className='shadow-Gray px-1 !py-0'
      >
        Follow
      </Button>
    </Group>
  );
}
