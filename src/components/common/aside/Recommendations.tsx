import { noAvatar } from '@/assets/common';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Button, Card, Text, Stack, Group } from '@mantine/core';

interface Recommendation {
  id: number;
  name: string;
  username: string;
  avatarUrl?: string;
}

const recommendations: Recommendation[] = [
  { id: 1, name: 'John Doe', username: '@johnDoe' },
  { id: 2, name: 'Jane Smith', username: '@janeSmith' },
  { id: 3, name: 'Peter Jones', username: '@peterJones' },
];

export default function Recommendations() {
  return (
    <Stack
      gap={10}
      p={10}
      className='!bg-transparent !border-[1px] border-Gray !rounded-lg'
    >
      {recommendations.map((user) => (
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
      ))}
      <Link href='/' className='text-purple-500 text-sm'>
        Show More
      </Link>
    </Stack>
  );
}
