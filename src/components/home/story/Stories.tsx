import Stories_List from './Stories_List';
import { Group } from '@mantine/core';

export default function Stories() {
  return (
    <Group
      wrap='nowrap'
      p={5}
      gap={10}
      className='mt-3 border-Gray border-b-2 w-full'
    >
      <Stories_List />
    </Group>
  );
}
