'use client';

import { Image as ImageIcon, ImagePlay } from 'lucide-react';
import { Group, Stack, FileButton } from '@mantine/core';

type Props = {
  File_Type: 'image' | 'video';
  setFileObject: React.Dispatch<React.SetStateAction<File | null>>;
};

export default function Upload_Media({ File_Type, setFileObject }: Props) {
  return (
    <Group gap='sm' align='flex-start'>
      <Stack gap='sm' className='flex-1'>
        <Group gap='xs'>
          {File_Type === 'image' ? (
            <FileButton accept='image/*' onChange={setFileObject}>
              {(props) => (
                <ImageIcon
                  {...props}
                  width={20}
                  height={20}
                  className='inline-block mr-1 cursor-pointer'
                />
              )}
            </FileButton>
          ) : File_Type === 'video' ? (
            <FileButton accept='video/*' onChange={setFileObject}>
              {(props) => (
                <ImagePlay
                  {...props}
                  width={20}
                  height={20}
                  className='inline-block mr-1 cursor-pointer'
                />
              )}
            </FileButton>
          ) : null}
        </Group>
      </Stack>
    </Group>
  );
}
