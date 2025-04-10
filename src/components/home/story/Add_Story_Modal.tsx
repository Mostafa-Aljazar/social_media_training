'use client';
import { handle_Upload_Media } from '@/components/common/upload-files/fun_upload_media';
import Upload_Media from '@/components/common/upload-files/Upload_Media';
import { cn } from '@/utility/cn';
import { useUploadThing } from '@/utility/uploadthing';
import { Button, Group, Modal, Stack, Text } from '@mantine/core';
import { Camera, Maximize, Minimize } from 'lucide-react';
import { useState } from 'react';

type Props = {
  opened: boolean;
  close: () => void;
};
export default function Add_Story_Modal({ opened, close }: Props) {
  const [file_media, setFileMedia] = useState<File | null>(null);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => setIsMaximized(true);
  const handleMinimize = () => setIsMaximized(false);

  const [uploading, setUploading] = useState(false);
  const { startUpload } = useUploadThing('mediaUploader');

  const handelPostStory = async () => {
    if (!file_media) {
      return;
    }
    let finalMediaUrl = null;

    if (file_media) {
      setUploading(true);
      finalMediaUrl = await handle_Upload_Media(file_media, startUpload);
      if (!finalMediaUrl) {
        // console.log('🚀 ~ handleSubmit ~ finalMediaUrl:', finalMediaUrl);
        setUploading(false);
        return;
      }
    }

    console.log('Media URL:', finalMediaUrl);
    alert('Story posted!');

    setFileMedia(null);
    setUploading(false);
    close();
  };
  return (
    <Modal
      opened={opened}
      onClose={close}
      centered
      title={
        <Text fw={600} fz={'lg'}>
          Add Story
        </Text>
      }
      classNames={{
        header: '!bg-primary !px-2 !m-0',
        body: '!bg-primary !p-0',
        close:
          ' !text-white border-1 border-white !rounded-full hover:!text-primary !mx-2',
      }}
    >
      <Stack
        gap={10}
        pb={10}
        align='center'
        justify='center'
        className='w-full h-full'
      >
        <Group w={300} justify='space-between'>
          <Upload_Media
            File_Type='image'
            setFileObject={setFileMedia}
            classes='relative'
          >
            <Group gap={5} className='hover:text-purple-500 cursor-pointer'>
              <Text fw={400} fz={'md'}>
                Select Image :
              </Text>
              <Camera size={18} />
            </Group>
          </Upload_Media>
          <Group gap={10}>
            <Maximize
              size={18}
              className={cn(
                'hover:text-purple-500 cursor-pointer',
                isMaximized && 'text-purple-500'
              )}
              onClick={handleMaximize}
            />
            <Minimize
              size={18}
              className={cn(
                'hover:text-purple-500 cursor-pointer',
                !isMaximized && 'text-purple-500'
              )}
              onClick={handleMinimize}
            />
          </Group>
        </Group>
        <Stack
          justify='center'
          className='border-2 border-Gray rounded-md w-[300px] h-[300px] overflow-hidden'
        >
          {file_media ? (
            <img
              src={URL.createObjectURL(file_media)}
              alt='image-preview'
              className={`w-full h-full ${
                isMaximized ? 'object-cover' : 'object-contain'
              }`}
            />
          ) : null}
        </Stack>

        <Button
          variant='outline'
          size='xs'
          radius='sm'
          fw={500}
          fz={'md'}
          color='#8B5CF6'
          className='cursor-pointer'
          onClick={handelPostStory}
          loading={uploading}
        >
          Post
        </Button>
      </Stack>
    </Modal>
  );
}
