'use client';
import { ActionIcon, Group, Input, Stack } from '@mantine/core';
import React, { useState } from 'react';
import { Image as Image_Icon, SendHorizontal, X } from 'lucide-react';
import Upload_Media from '../common/upload-files/Upload_Media';
import { useUploadThing } from '@/utility/uploadthing';
import { handle_Upload_Media } from '../common/upload-files/fun_upload_media';
import { useForm } from '@mantine/form';
import Image from 'next/image';

interface FormValues {
  message_text: string;
  message_image?: File | null;
}
export default function Chat_Form() {
  const [file_media, setFileMedia] = useState<File | null>(null);
  const [textMessage, setTextMessage] = useState('');

  const [uploading, setUploading] = useState(false);
  const { startUpload } = useUploadThing('mediaUploader');

  const handelPostStory = async () => {
    if (!file_media && !textMessage) {
      return;
    }

    console.log('🚀 ~ handelPostStory ~ file_media:', file_media);
    console.log('🚀 ~ handelPostStory ~ textMessage:', textMessage);
    setUploading(true);

    try {
      let finalMediaUrl = null;
      if (file_media) {
        finalMediaUrl = await handle_Upload_Media(file_media, startUpload);
        if (!finalMediaUrl) {
          throw new Error('Failed to upload media.');
        }
        console.log('Media URL:', finalMediaUrl);
        alert('Message Was Sent!');
      }
    } catch (error) {
      console.error('Error uploading media:', error);
      alert('Failed to post story. Please try again.');
    } finally {
      setFileMedia(null);
      setUploading(false);
    }
  };

  return (
    <Stack
      bottom={0}
      left={0}
      pos={'sticky'}
      p={10}
      className='border-primary/90 border-t-1 w-full'
    >
      {file_media ? (
        <Stack className='relative mx-auto !border-Gray border-1 rounded-md w-64 h-64 overflow-hidden'>
          <Image
            src={URL.createObjectURL(file_media)}
            alt='image-preview'
            layout='fill'
            objectFit='contain'
          />
          <ActionIcon
            className='top-5 left-5 absolute !bg-transparent !border-Gray border-1 !rounded-full'
            size={'sm'}
            onClick={() => setFileMedia(null)}
          >
            <X className='text-Gray' size={15} />
          </ActionIcon>
        </Stack>
      ) : null}
      <Group wrap='nowrap' className='bg-primary w-full'>
        <Upload_Media
          File_Type='image'
          setFileObject={setFileMedia}
        ></Upload_Media>

        <Input.Wrapper className='w-full'>
          <Input
            placeholder='Input component'
            size='xs'
            className='w-full'
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
          />
        </Input.Wrapper>

        <ActionIcon
          className='!bg-transparent'
          loading={uploading}
          onClick={handelPostStory}
        >
          <SendHorizontal />
        </ActionIcon>
      </Group>
    </Stack>
  );
}
