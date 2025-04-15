'use client';

import { useState } from 'react';
import {
  Button,
  Flex,
  Group,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import { Chrome, ChromeIcon, Github } from 'lucide-react';
import Image from 'next/image';
import { ASMAR } from '@/assets/common';
import Link from 'next/link';
import { AUT_ROUTES } from '@/content/routes';

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: zodResolver(loginSchema),
  });

  const handleSubmit = form.onSubmit(async (values: typeof form.values) => {
    setError(null);
    setLoading(true);
    try {
      // Replace with your authentication logic
      // const { data, error: authError } = await signUp({
      //   email: values.email,
      //   password: values.password,
      //   name: values.name,
      // });
      // if (authError) {
      //   setError(authError.message || 'Failed to sign up');
      // } else if (data) {
      //   router.push('/dashboard');
      // }
      console.log('Form values:', values); // Simulate submission
      // router.push('/dashboard'); // Simulate success
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  });

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align={'center'}
      justify={'center'}
      wrap='nowrap'
      gap={0}
      mih={'100vh'}
    >
      <Stack
        justify='center'
        align='center'
        mb={{ base: 30, md: 0 }}
        w={'100%'}
      >
        <Image src={ASMAR} alt='asmar' className='w-40 md:w-60 lg:w-86' />
      </Stack>
      <Stack w={'100%'}>
        <form
          onSubmit={handleSubmit}
          className='flex !flex-1 justify-center md:justify-start items-center md:items-start !w-full'
        >
          <Stack
            gap={20}
            p={12}
            w={{ base: '100%', sm: '70%', md: '100%', lg: '90%', xl: '80%' }}
          >
            <Text
              fw={600}
              fz={{ base: 35, lg: 50 }}
              className='tracking-wider'
              ta={'center'}
            >
              Login
            </Text>

            <TextInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Email
                </Text>
              }
              type='email'
              placeholder='you@example.com'
              {...form.getInputProps('email')}
            />
            <PasswordInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Password
                </Text>
              }
              placeholder='Enter your password...'
              {...form.getInputProps('password')}
            />

            {error && (
              <Text c='red' size='sm' ta='center'>
                {error}
              </Text>
            )}
            <Button
              type='submit'
              variant='filled'
              color='grape'
              loading={loading}
              fw={600}
              fz={18}
              radius='sm'
            >
              Login
            </Button>
            <Flex
              direction={{ base: 'column', md: 'row' }}
              p={0}
              wrap='nowrap'
              gap={10}
              w={'100%'}
            >
              <Button
                variant='filled'
                color='dark'
                fw={600}
                fz={16}
                radius='sm'
                leftSection={<Github size={22} />}
                w={'100%'}
                p={0}
              >
                Login with GitHub
              </Button>
              <Button
                variant='outline'
                color='dark'
                bg={'white'}
                fw={600}
                fz={16}
                radius='sm'
                leftSection={<Chrome size={22} />}
                w={'100%'}
                p={0}
              >
                Login with Google
              </Button>
            </Flex>
            <Text fz={14} c='dimmed' ta='center'>
              Don't have an account?{' '}
              <Link
                href={AUT_ROUTES.SIGN_UP}
                className='text-blue-500 hover:underline'
              >
                Sign up
              </Link>
            </Text>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
