import { noAvatar, noCover } from '@/assets/common';
import Post_Interactions from '@/components/feed/Post_Interaction';
import Comment_You from '@/components/notifications/Comment_You';
import Follow_You from '@/components/notifications/Follow_You';
import Liked_Post from '@/components/notifications/Liked_Post';
import Repost_You from '@/components/notifications/Repost_You';
import { Divider, Group, Stack, Text } from '@mantine/core';
import { Ellipsis, Repeat2 } from 'lucide-react';
import Image from 'next/image';

export default function Notifications() {
  return (
    <Stack p={10} gap={10} w={'100%'}>
      <Follow_You />
      <Liked_Post />
      <Repost_You />
      <Comment_You />
    </Stack>
  );
}

{
  <Stack px={10} gap={0} w={'100%'} hidden>
    {/* RE-POST */}
    <Group gap={8} m={0} align='center'>
      <Repeat2 color='#71767b' size={20} />
      <Text c='dimmed' fz={15}>
        Asmar re-posted
      </Text>
    </Group>
    {/* Info */}
    <Group align='flex-start' gap={10} wrap='nowrap'>
      {/* Avatar */}
      <Image
        src={noAvatar}
        width={40}
        height={40}
        alt=''
        className='border-[1px] border-gray-300 rounded-full w-10 h-10'
      />

      <Stack gap={0}>
        {/* User Info */}
        <Group gap={8} align='baseline' justify='space-between' pe={5}>
          <Group gap={8} align='baseline'>
            <Text fz={15} fw={500}>
              Asmar
            </Text>
            <Text c='dimmed' fz={13} fw={300}>
              @Asmar_Dev
            </Text>
            <Text c='dimmed' fz={13} fw={300}>
              2 hours ago
            </Text>
          </Group>
          <Ellipsis size={20} className='text-white' />
        </Group>
        {/* Post Content */}
        <Stack gap={10}>
          <Text fz={15} fw={400} className='!break-words'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
            assumenda! Debitis modi reiciendis eveniet perferendis deleniti
            consequatur sed voluptas minima, aliquid ad exercitationem obcaecati
            quia odit laudantium sapiente, libero minus?{' '}
            <Text component='span' c='blue' fw={600}>
              #hashtag
            </Text>
          </Text>
          <div className='relative rounded-md w-full h-52'>
            <Image
              src={noCover}
              fill
              className='rounded-md object-cover'
              alt='Cover image'
              sizes='100vw' // or appropriate size based on your needs
            />
          </div>
        </Stack>
        {/* INTERACTIONer */}
        <Divider my={5} size={1} color='dimmed' className='w-full h-[1px]' />
        <Post_Interactions />
      </Stack>
    </Group>
  </Stack>;
}
