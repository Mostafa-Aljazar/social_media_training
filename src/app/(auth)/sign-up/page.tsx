'use client';

import { useState, useEffect } from 'react';
import {
  Button,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { useForm, zodResolver } from '@mantine/form';
import Image from 'next/image';
import Link from 'next/link';
import { ASMAR } from '@/assets/common';
import { AUT_ROUTES } from '@/content/routes';
import { authClient } from '@/lib/auth-client';
import { Chrome, Github } from 'lucide-react';
import { sendEmail } from '@/lib/send-mail';

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

  useEffect(() => {
    // Check if user is already signed in
    authClient.getSession().then(({ data }) => {
      if (data?.session) {
        router.push(AUT_ROUTES.ONBOARDING);
      }
    });
  }, [router]);

  const handleSubmit = form.onSubmit(async (values) => {
    setError(null);
    setLoading(true);

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: values.name,
      });

      if (authError) {
        console.error('Signup error:', authError);
        setError(authError.message || 'Failed to sign up');
        return;
      } else if (data) {
        console.log('🚀 ~ handleSubmit ~ data:', data);
        // Since autoSignIn is true, redirect to onboarding
        router.push(AUT_ROUTES.ONBOARDING);
      }
      // Check if we have a session (autoSignIn should create one)
      const { data: sessionData } = await authClient.getSession();
      console.log('🚀 ~ handleSubmit ~ sessionData:', sessionData);

      if (sessionData?.session) {
        router.push(AUT_ROUTES.ONBOARDING);
      } else {
        // If autoSignIn didn't work, try manual login
        const { data: loginData, error: loginError } =
          await authClient.signIn.email({
            email: values.email,
            password: values.password,
          });

        if (loginError) {
          setError(
            'Account created but failed to login. Please try to login manually.'
          );
        } else if (loginData) {
          console.log('🚀 ~ handleSubmit ~ loginData:', loginData);
          router.push(AUT_ROUTES.ONBOARDING);
        }
      }
    } catch (err) {
      console.error('Unexpected signup error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
      console.log('🚀 ~ handleSubmit ~ finally:', values);
    }
  });

  // const signInWithGithub = async () => {
  //   setError(null);
  //   setLoading(true);
  //   try {
  //     const { data, error: authError } = await authClient.signIn.social({
  //       provider: 'github',
  //     });

  //     if (authError) {
  //       console.error('Signup error with Github:', authError);
  //       setError(authError.message || 'Failed to sign up with Github');
  //       return;
  //     } else if (data) {
  //       console.log('🚀 ~signInWithGithub ~ data  with Github:', data);
  //       // Since autoSignIn is true, redirect to onboarding
  //       router.push(AUT_ROUTES.ONBOARDING);
  //     }
  //   } catch (err) {
  //     console.error('Unexpected signup error with Github:', err);
  //     setError('Something went wrong. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const signInWithGithub = async () => {
    setError(null);
    setLoading(true);

    try {
      const { data, error } = await authClient.signIn.social({
        provider: 'github',

        // options: {
        //   redirectTo: AUT_ROUTES.ONBOARDING,
        // },
      });

      if (error) {
        setError(error.message || 'Failed to sign up with GitHub');
        return;
      }

      // Better Auth handles redirect automatically, but confirm session
      if (data) {
        console.log('🚀 ~signInWithGithub ~ data  with Github:', data);

        router.push(AUT_ROUTES.ONBOARDING);
      }
    } catch (err) {
      setError('Something went wrong with GitHub sign-up. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const sendEmailFun = async () => {
    const send = await sendEmail({
      to: '233651@ppu.edu.ps',
      subject: 'Hello',
      text: 'Hello from my app!',
      html: '<h1>Hello from my app!</h1>',
    });
    console.log('🚀 ~ sendEmailFun ~ send:', send);
  };
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
              fz={{ base: '25', md: '35', lg: '50' }}
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
              disabled={loading}
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
                loading={loading}
                disabled={loading}
                onClick={signInWithGithub}
              >
                Continue with GitHub
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
                onClick={sendEmailFun}
              >
                Continue with Google
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
