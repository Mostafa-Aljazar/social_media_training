import Create_Post_Component from '@/components/feed/create-post';
import { Stack } from '@mantine/core';

export default function Add_Post() {
  return (
    <Stack pt={{ base: 70, md: 20 }} w={'100%'}>
      <Create_Post_Component />
    </Stack>
  );
}
