import Feed from '@/components/feed/Feed';
import Create_Post from '@/components/home/create-post';
import { Stack } from '@mantine/core';
import Link from 'next/link';
import React from 'react';

export default function Home() {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel cum harum labore, aliquid atque, ducimus placeat consequuntur aperiam porro ipsa tenetur ipsum possimus aspernatur tempore reprehenderit quibusdam. Delectus, optio totam!';

  return (
    <Stack align='center' justify='center' w={'100%'} h={'100%'} className=''>
      <Link href='/post/add-post' className='m-5 w-full'>
        <Create_Post />
      </Link>

      <Feed />
      {/* {Array(50)
        .fill('')
        .map((_, index) => (
          <p key={index}>
            Item {index + 1}: {lorem}
          </p>
        ))} */}
    </Stack>
  );
}
