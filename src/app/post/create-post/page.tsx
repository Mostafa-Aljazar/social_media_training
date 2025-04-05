'use client';

import React, { useState, useEffect } from 'react'; // Import useEffect
import { noAvatar, poll } from '@/assets/common';
import { Image as ImageIcon, ImagePlay, MapPin, Smile } from 'lucide-react';
import NextImage from 'next/image'; // Import NextImage
import {
  Avatar,
  Button,
  Group,
  FileButton,
  Textarea,
  Stack,
} from '@mantine/core';

export default function Create_Post() {
  const [postText, setPostText] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null); // State for the media URL

  useEffect(() => {
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewURL(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewURL(null);
    }
  }, [file]);

  return (
    <form className='shadow-sm p-4 rounded-md w-full'>
      {/* Basic card styling */}
      <Group gap='sm' align='flex-start'>
        {/* AVATAR */}
        <Avatar src={noAvatar.src} alt='noAvatar' radius='xl' />

        {/* OTHERS */}
        <Stack gap='sm' className='flex-1'>
          <Textarea
            placeholder='What is happening?!'
            value={postText}
            onChange={(event) => setPostText(event.currentTarget.value)}
            autosize
            minRows={2}
            maxRows={5}
          />

          <Group justify='space-between' align='center'>
            <Group gap='xs'>
              <FileButton onChange={setFile} accept='image/*,video/*'>
                {(props) => (
                  <ImageIcon
                    {...props}
                    width={20}
                    height={20}
                    className='cursor-pointer'
                  />
                )}
              </FileButton>
              <ImagePlay width={20} height={20} className='cursor-pointer' />
              <NextImage // Use NextImage here
                src={poll}
                alt=''
                width={20}
                height={20}
                className='cursor-pointer'
              />
              <Smile width={20} height={20} className='cursor-pointer' />
              <MapPin width={20} height={20} className='cursor-pointer' />
            </Group>
            <Button type='submit'>Post</Button>
          </Group>

          {/* Conditionally render image or video preview */}
          {previewURL && (
            <div className='relative mt-2 rounded-md w-64 h-64 overflow-hidden'>
              {file?.type.startsWith('image/') ? (
                <NextImage // Display image
                  src={previewURL}
                  alt='media-preview'
                  layout='fill'
                  objectFit='contain'
                />
              ) : file?.type.startsWith('video/') ? (
                <video // Display video
                  src={previewURL}
                  controls
                  className='w-full h-full object-contain'
                />
              ) : (
                <p>Unsupported media type</p>
              )}
            </div>
          )}
        </Stack>
      </Group>
    </form>
  );
}
