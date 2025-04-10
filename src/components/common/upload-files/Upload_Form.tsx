'use client';

import React, { useState } from 'react';
import { noAvatar, poll } from '@/assets/common';
import { Image as ImageIcon, ImagePlay, Upload } from 'lucide-react';
import NextImage from 'next/image';
import { Avatar, Button, Group, Textarea, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import Upload_Media from './Upload_Media';
import { handle_Upload_Image } from './fun_upload_media'; // Ensure this path is correct
import { useUploadThing } from '@/utility/uploadthing';

interface FormValues {
  post_text: string;
  post_image: File | null;
  post_video: File | null;
}

export default function Upload_Form() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      post_text: '',
      post_image: null,
      post_video: null,
    },
  });

  const [file_media, setFileMedia] = useState<File | null>(null);
  console.log('🚀 ~ Upload_Form ~ file_media:', file_media);
  const [uploading, setUploading] = useState(false);
  const { startUpload } = useUploadThing('mediaUploader');

  const handleSubmit = form.onSubmit(async (values) => {
    if (!file_media) {
      return;
    }

    let finalMediaUrl = null;

    if (file_media) {
      setUploading(true);
      finalMediaUrl = await handle_Upload_Image(file_media, startUpload); // Adjust this function if it handles videos differently
      if (!finalMediaUrl) {
        console.log('🚀 ~ handleSubmit ~ finalMediaUrl:', finalMediaUrl);
        setUploading(false);
        return; // Exit if upload failed
      }
    }

    console.log('Media URL:', finalMediaUrl);
    alert('Post submitted!');

    form.reset();
    setFileMedia(null);
    setUploading(false);
  });

  return (
    <form
      className='bg-sky-600 shadow-sm p-4 rounded-md w-full'
      onSubmit={handleSubmit}
    >
      <Group gap='sm' align='flex-start'>
        <Avatar
          src={noAvatar.src}
          alt='noAvatar'
          radius='100%'
          className='border-[1px] border-Gray'
        />
        <Stack gap='sm' className='flex-1'>
          <Textarea
            placeholder='What is happening?!'
            autosize
            minRows={2}
            maxRows={10}
            resize='vertical'
            {...form.getInputProps('post_text')}
          />

          {/* Media Preview */}
          {file_media ? (
            <div className='relative mx-auto mt-2 rounded-md w-64 h-64 overflow-hidden'>
              {file_media.type.startsWith('video/') ? (
                <video
                  src={URL.createObjectURL(file_media)}
                  controls
                  className='w-full h-full object-contain'
                />
              ) : file_media.type.startsWith('image/') ? (
                <NextImage
                  src={URL.createObjectURL(file_media)}
                  alt='image-preview'
                  layout='fill'
                  objectFit='contain'
                />
              ) : (
                <p>Unsupported file type</p>
              )}
            </div>
          ) : null}

          <Group justify='space-between' align='center'>
            <Group gap='xs'>
              <Upload_Media File_Type='image' setFileObject={setFileMedia} />
              <Upload_Media File_Type='video' setFileObject={setFileMedia} />
              <NextImage
                src={poll}
                alt=''
                width={20}
                height={20}
                className='cursor-pointer'
              />
            </Group>
            <Button
              type='submit'
              size='sm'
              loading={uploading}
              className='!px-3 py-1.5 font-semibold tracking-widest'
            >
              Post
            </Button>
          </Group>
        </Stack>
      </Group>
    </form>
  );
}
