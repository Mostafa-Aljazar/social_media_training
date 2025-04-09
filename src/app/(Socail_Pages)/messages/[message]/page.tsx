import { ScrollArea, Stack } from '@mantine/core';
import Chat_Header from '@/components/messages/Chat_Header';
import Chat_Form from '@/components/messages/Chat_Form';
import Chat_Messages from '@/components/messages/Chat_Messages';

export default async function Message_Page({
  params,
}: {
  params: Promise<{ message: string }>;
}) {
  const { message } = await params;
  return (
    <Stack gap={0} className='relative w-full h-screen'>
      <ScrollArea
        p={0}
        m={0}
        w='100%'
        scrollbars='y'
        className='relative !flex-grow border-e-2 border-Gray'
      >
        <Chat_Header />
        <Chat_Messages />
      </ScrollArea>
      <Chat_Form />
    </Stack>
  );
}
