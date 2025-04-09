import Feed from '@/components/feed/Feed';
import Profile_Details from '@/components/profile/Profile_Details';
import Profile_Tabs from '@/components/profile/Profile_Tabs';
import { Divider, Stack } from '@mantine/core';

export default async function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  return (
    <Stack className='' p={0} gap={10}>
      <Profile_Details />
      <Profile_Tabs />
      <Feed />
    </Stack>
  );
}
