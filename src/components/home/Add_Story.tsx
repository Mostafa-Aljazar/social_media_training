'use client';
import React, { useState } from 'react';
import { ActionIcon, Box, Stack, Text } from '@mantine/core';
import Image from 'next/image';
import { noAvatar } from '@/assets/common';
import { Camera } from 'lucide-react';
import Upload_Media from '../common/upload-files/Upload_Media';
import { Image as ImageIcon, ImagePlay } from 'lucide-react';

export default function Add_Story() {
  const [file_media, setFileMedia] = useState<File | null>(null);
  console.log('🚀 ~ Add_Story ~ file_media:', file_media);

  return (
    <Stack align='center' className='relative' gap={0}>
      <Upload_Media
        File_Type='image'
        setFileObject={setFileMedia}
        classes=' relative'
      >
        <Box
          className='relative bg-gray-300 border-2 border-Gray rounded-full w-16 overflow-hidden'
          style={{
            aspectRatio: '1 / 1',
          }}
        >
          <Image
            src={noAvatar}
            alt='Avatar'
            className='w-full h-full object-cover'
          />
          <ActionIcon
            variant='outline'
            color='gray.5'
            radius='100%'
            className='bottom-1/2 left-1/2 absolute !border-purple-500 border-2 rounded-full'
            style={{ transform: 'translate(-50%, -50%)' }}
          >
            <ImageIcon
              width={20}
              height={20}
              className='inline-block mr-1 w-4 h-4 text-purple-500 cursor-pointer'
            />
          </ActionIcon>
        </Box>
      </Upload_Media>
      <Text fw={300} fz={'sm'}>
        add story
      </Text>
    </Stack>
  );
}
