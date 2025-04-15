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

const signUpSchema = z
  .object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    repeatPassword: z
      .string()
      .min(6, 'Repeat password must be at least 6 characters'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export default function SignUpPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
    validate: zodResolver(signUpSchema),
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
        my={{ base: 30, md: 0 }}
        w={'100%'}
      >
        <Image src={ASMAR} alt='asmar' className='w-40 md:w-60 lg:w-86' />
      </Stack>
      <Stack w={'100%'}>
        <form
          onSubmit={handleSubmit}
          className='flex flex-1 justify-center md:justify-start items-center md:items-start gap-10 w-full'
        >
          <Stack
            gap={20}
            p={12}
            w={{ base: '100%', sm: '70%', md: '100%', lg: '90%', xl: '80%' }}
          >
            <Text
              fw={600}
              fz={{ base: 25, md: 35, lg: 50 }}
              className='tracking-wider'
              ta={'center'}
            >
              Create an Account
            </Text>

            <TextInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Name
                </Text>
              }
              placeholder='Enter your name...'
              {...form.getInputProps('name')}
            />
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
            <PasswordInput
              radius='sm'
              label={
                <Text fz={16} fw={600} c='gray'>
                  Repeat Password
                </Text>
              }
              placeholder='Repeat your password...'
              {...form.getInputProps('repeatPassword')}
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
              Sign Up
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
                Sign up with GitHub
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
                Sign up with Google
              </Button>
            </Flex>
            <Text fz={14} c='dimmed' ta='center'>
              Already have an account?{' '}
              <Link
                href={AUT_ROUTES.LOGIN}
                className='text-blue-500 hover:underline'
              >
                Log in
              </Link>
            </Text>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
}
