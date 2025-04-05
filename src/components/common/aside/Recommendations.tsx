import { noAvatar } from '@/assets/common';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, Button, Card, Text, Stack, Group } from '@mantine/core';
import User from './User';
import User_Card from './User';

interface Recommendation {
  id: number;
  name: string;
  username: string;
  avatarUrl?: string;
}

export const recommendations: Recommendation[] = [
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
        <User_Card
          key={user.id}
          id={user.id}
          name={user.name}
          username={user.username}
          // avatarUrl={noAvatar.src}
        />
      ))}
      <Link href='/' className='text-purple-500 text-sm'>
        Show More
      </Link>
    </Stack>
  );
}
