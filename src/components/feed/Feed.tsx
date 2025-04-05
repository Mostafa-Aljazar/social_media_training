import { Divider, Stack } from '@mantine/core';
import Post from './Post';

const Feed = () => {
  return (
    <Stack className='w-full h-full'>
      {/* POSTS */}
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
      <Divider color='dimmed' size={'sm'} className='w-full' />
      <Post />
    </Stack>
  );
};

export default Feed;
