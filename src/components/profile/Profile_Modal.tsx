import { Button, Group, Modal, ScrollArea, Text } from '@mantine/core';
import React from 'react';
import Edit_Profile from './Edit_Profile';

type Props = {
  opened: boolean;
  close: () => void;
};
export default function Profile_Modal({ opened, close }: Props) {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Group justify='space-between' className='!w-full'>
          <Text px={10} fw={600} flex={1} className='!flex-1 !w-full'>
            Edit Profile
          </Text>
          <Button
            variant='white'
            c='black'
            radius='md'
            fw={700}
            size='sm'
            px={'sm'}
            py={0}
          >
            Edit
          </Button>
        </Group>
      }
      withCloseButton={true}
      className='bg-primary !p-0'
      centered
      transitionProps={{ transition: 'fade', duration: 200 }}
      classNames={{
        header: '!bg-primary !p-0',
        body: '!bg-primary !p-0 ',
        close:
          '!text-white border-1 border-white !rounded-full hover:text-primary mx-2',
      }}
      scrollAreaComponent={ScrollArea.Autosize}
    >
      <Edit_Profile />
    </Modal>
  );
}
