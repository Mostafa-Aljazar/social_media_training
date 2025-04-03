import { TextInput } from '@mantine/core';
import { Search } from 'lucide-react';

export default function Search_Component() {
  return (
    <TextInput
      radius='xl'
      placeholder='Search'
      leftSection={<Search size={16} color='white' />}
      classNames={{
        root: 'bg-inputGray rounded-full',
        input:
          '!rounded-full !outline-none !bg-gray-500 outline-none placeholder:!text-white placeholder:!font-normal',
      }}
    />
  );
}
