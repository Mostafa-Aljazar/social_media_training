import Upload_Form from '@/components/common/upload-files/Upload_Form';
import Upload_Image from '@/components/common/upload-files/Upload_Media';
import { Stack } from '@mantine/core';
import React from 'react';

export default function page() {
  return (
    <Stack className='!bg-amber-400 w-full h-screen'>
      <div>Test page</div>

      <div>
        <Upload_Form />
      </div>
    </Stack>
  );
}
