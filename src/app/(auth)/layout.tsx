import { ASMAR } from '@/assets/common';
import { Flex, Stack, Text } from '@mantine/core';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <>{children}</>
    </Flex>
  );
}
