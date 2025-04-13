'use client';
import { ASMAR, noAvatar, noCover } from '@/assets/common';
import { handle_Upload_Media } from '@/components/common/upload-files/fun_upload_media';
import Upload_Media from '@/components/common/upload-files/Upload_Media';
import { useUploadThing } from '@/utility/uploadthing';
import {
  ActionIcon,
  Box,
  Button,
  Flex,
  Stack,
  Text,
  Textarea,
  TextInput,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { Camera } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import { z } from 'zod';

const schema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  bio: z
    .string()
    .max(150, { message: 'Bio cannot exceed 150 characters' })
    .optional(),
  location: z.string().optional(),
  link: z
    .string()
    .url({ message: 'Enter a valid URL' })
    .or(z.literal(''))
    .optional(),
  cover: z.instanceof(File).optional().nullable(),
  avatar: z.instanceof(File).optional().nullable(),
});

export default function Page() {
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [avatarImage, setAvatarImage] = useState<File | null>(null);

  const form = useForm({
    initialValues: {
      username: '',
      name: '',
      bio: '',
      location: '',
      link: '',
      cover: null,
      avatar: null,
    },
    validate: zodResolver(schema),
  });

  const UploadImages = async (uploadedImage: File | null) => {
    if (!uploadedImage) {
      return;
    }

    let finalMediaUrl = null;
    if (uploadedImage) {
      finalMediaUrl = await handle_Upload_Media(uploadedImage, startUpload); // Adjust this function if it handles videos differently
      if (!finalMediaUrl) {
        return;
      }
    }
    return finalMediaUrl;
  };

  const [uploading, setUploading] = useState(false);
  const { startUpload } = useUploadThing('mediaUploader');

  // Handle form submission
  const handleSubmit = form.onSubmit(async (values) => {
    // console.log('Form submitted with values:', values);
    // console.log('🚀 ~ Page ~ coverImage:', coverImage);
    // console.log('🚀 ~ Page ~ avatarImage:', avatarImage);

    setUploading(true);
    const AvatarUrl = await UploadImages(avatarImage);
    const CoverUrl = await UploadImages(coverImage);
    setUploading(false);

    // console.log('🚀 ~ handleSubmit ~ AvatarUrl:', AvatarUrl);
    // console.log('🚀 ~ handleSubmit ~ CoverUrl:', CoverUrl);

    // TODO: handel API
  });

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align={'center'}
      justify={'center'}
      wrap='nowrap'
      gap={0}
    >
      <Stack flex={1} justify='center' align='center' pt={{ base: 30, md: 0 }}>
        <Image src={ASMAR} alt='asmar' className='w-40 md:w-60 lg:w-86' />
        <Text
          fw={600}
          fz={{ base: 25, md: 35, lg: 50 }}
          className='tracking-wider'
        >
          Onboarding
        </Text>
      </Stack>
      <form
        onSubmit={handleSubmit}
        className='flex flex-1 justify-center md:justify-start items-center md:items-start gap-10 w-full'
      >
        <Stack
          gap={40}
          p={12}
          w={{ base: '100%', sm: '80%', md: '90%', lg: '80%' }}
        >
          <Box className='relative w-full'>
            <Flex
              justify='center'
              align='center'
              pos='relative'
              w='100%'
              h={200}
              className='border-2 border-gray-500 rounded-lg overflow-hidden'
            >
              {coverImage ? (
                <img
                  src={URL.createObjectURL(coverImage)}
                  alt='Cover'
                  className='w-full h-full !object-contain'
                />
              ) : (
                <Text pb={100} fw={600} fz={20} c={'gray'}>
                  Add Cover Image
                </Text>
              )}

              <Upload_Media File_Type='image' setFileObject={setCoverImage}>
                <ActionIcon
                  variant='outline'
                  color='gray.5'
                  radius='100%'
                  pos='absolute'
                  left='50%'
                  top='50%'
                  w={35}
                  h={35}
                  className='border-1 border-Gray rounded-full -translate-x-1/2 -translate-y-1/2'
                  component='label'
                >
                  <Camera size={20} />
                </ActionIcon>
              </Upload_Media>
            </Flex>

            <Flex
              justify='center'
              align='center'
              pos='absolute'
              left='50%'
              w={100}
              h={100}
              className='bg-primary border-2 border-gray-500 rounded-full w-20 overflow-hidden -translate-x-1/2 -translate-y-1/2'
            >
              {avatarImage ? (
                <Image
                  src={URL.createObjectURL(avatarImage)}
                  alt='Avatar'
                  className='!object-fill'
                  width={100}
                  height={100}
                />
              ) : (
                <Text pb={50} fw={600} fz={16} c={'gray'}>
                  Avatar
                </Text>
              )}
              <Upload_Media File_Type='image' setFileObject={setAvatarImage}>
                <ActionIcon
                  variant='outline'
                  color='gray.5'
                  radius='100%'
                  pos='absolute'
                  left='50%'
                  top='50%'
                  w={30}
                  h={30}
                  className='border-1 border-Gray rounded-full -translate-x-1/2 -translate-y-1/2'
                  component='label'
                >
                  <Camera size={20} />
                </ActionIcon>
              </Upload_Media>
            </Flex>
          </Box>

          <Stack gap={10}>
            <TextInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Username
                </Text>
              }
              placeholder='Enter username...'
              {...form.getInputProps('username')}
            />
            <TextInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Name
                </Text>
              }
              placeholder='Enter name...'
              {...form.getInputProps('name')}
            />
            <Textarea
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Bio
                </Text>
              }
              placeholder='Enter bio...'
              minRows={2}
              maxRows={4}
              {...form.getInputProps('bio')}
            />
            <TextInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Location
                </Text>
              }
              placeholder='Enter location...'
              {...form.getInputProps('location')}
            />
            <TextInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Link
                </Text>
              }
              placeholder='Enter Link...'
              {...form.getInputProps('link')}
            />
            <Button
              type='submit'
              variant='filled'
              color='grape'
              className='!text-primary'
              loading={uploading}
              mt={10}
              fw={600}
              fz={20}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </form>
    </Flex>
  );
}
