'use client';

import React, { useState } from 'react';
import { noAvatar, poll } from '@/assets/common';
import { Image as ImageIcon, ImagePlay } from 'lucide-react';
import NextImage from 'next/image';
import {
  Avatar,
  Button,
  Group,
  Textarea,
  Stack,
  FileButton,
} from '@mantine/core';
import { useUploadThing } from '@/utility/uploadthing';
import { useForm } from '@mantine/form';

interface FormValues {
  post_text: string;
  post_image: File | null;
  post_video: File | null;
}

export default function Create_Post_Component() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: {
      post_text: '',
      post_image: null,
      post_video: null,
    },
  });

  const [uploading, setUploading] = useState(false);
  const [mediaUrl, setMediaUrl] = useState<string | null>(null);
  const { startUpload } = useUploadThing('mediaUploader');

  const handleUpload = async (file: File): Promise<string | null> => {
    setUploading(true);
    try {
      const uploadedFiles = await startUpload([file]);
      const url = uploadedFiles?.[0]?.ufsUrl;
      if (url) {
        setMediaUrl(url);
        return url;
      }
      throw new Error('Upload failed');
    } catch (error: any) {
      console.error('Error during upload:', error);
      alert(`Error: ${error.message}`);
      return null;
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = form.onSubmit(async (values) => {
    console.log('🚀 ~ handleSubmit ~ values:', values);

    if (!values.post_text && !values.post_image && !values.post_video) {
      return;
    }
    let finalMediaUrl = mediaUrl;
    const selectedFile = values.post_image || values.post_video;

    if (selectedFile) {
      finalMediaUrl = await handleUpload(selectedFile);
      if (!finalMediaUrl) {
        return; // Exit if upload failed
      }
    }

    console.log('Media URL:', finalMediaUrl);
    alert('Post submitted!');

    // Here you would typically send values.post_text and finalMediaUrl to your backend

    form.reset();
    setMediaUrl(null);
  });

  return (
    <form className='shadow-sm p-4 rounded-md w-full' onSubmit={handleSubmit}>
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
          {((values) =>
            values.post_image || values.post_video ? (
              <div className='relative mx-auto mt-2 rounded-md w-64 h-64 overflow-hidden'>
                {values.post_image ? (
                  <NextImage
                    src={URL.createObjectURL(values.post_image)}
                    alt='image-preview'
                    layout='fill'
                    objectFit='contain'
                  />
                ) : values.post_video ? (
                  <video
                    src={URL.createObjectURL(values.post_video)}
                    controls
                    className='w-full h-full object-contain'
                  />
                ) : null}
              </div>
            ) : null)(form.getValues())}

          <Group justify='space-between' align='center'>
            <Group gap='xs'>
              <FileButton
                accept='image/*'
                onChange={(file) => form.setFieldValue('post_image', file)}
              >
                {(props) => (
                  <ImageIcon
                    {...props}
                    width={20}
                    height={20}
                    className='inline-block mr-1 cursor-pointer'
                  />
                )}
              </FileButton>
              <FileButton
                accept='video/*'
                onChange={(file) => form.setFieldValue('post_video', file)}
              >
                {(props) => (
                  <ImagePlay
                    {...props}
                    width={20}
                    height={20}
                    className='inline-block mr-1 cursor-pointer'
                  />
                )}
              </FileButton>
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
