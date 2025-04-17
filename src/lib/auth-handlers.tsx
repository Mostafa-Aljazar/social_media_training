'use client';

// import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authClient } from './auth-client';
import { AUT_ROUTES } from '@/content/routes';
// import { AUT_ROUTES } from '@/content/routes';

// Interface for form values
interface SignUpFormValues {
  name: string;
  email: string;
  password: string;
  repeatPassword?: string;
}

interface LoginFormValues {
  email: string;
  password: string;
}

interface ForgotPasswordFormValues {
  email: string;
}

interface OTPFormValues {
  email: string;
  token: string;
}

// Authentication handlers
export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Signup handler
  const handleSignUp = async (values: SignUpFormValues) => {
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await authClient.signUp.email({
        email: values.email,
        password: values.password,
        name: values.name,
      });

      if (error) {
        setError(error.message || 'Failed to sign up');
        return false;
      }

      if (data.user) {
        // Email verification is handled by Better Auth
        // User will be redirected to onboarding after verification
        return true;
      }
    } catch (err) {
      setError('An unexpected error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Login handler
  const handleLogin = async (values: LoginFormValues) => {
    setError(null);
    setLoading(true);
    try {
      const { data, error } = await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });

      if (error) {
        setError(error.message || 'Failed to log in');
        return false;
      }

      if (data) {
        router.push('/dashboard');
        return true;
      }
    } catch (err) {
      setError('An unexpected error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const handleLogout = async () => {
    setError(null);
    setLoading(true);
    try {
      await authClient.signOut();
      router.push(AUT_ROUTES.LOGIN);
      return true;
    } catch (err) {
      setError('Failed to log out');
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Forgot password handler
  //   const handleForgotPassword = async (values: ForgotPasswordFormValues) => {
  //     setError(null);
  //     setLoading(true);
  //     try {
  //       const { data, error } = await authClient.resetPassword({
  //         email: values.email,
  //         redirectTo: `${window.location.origin}/reset-password`,
  //       });

  //       if (error) {
  //         setError(error.message || 'Failed to send reset email');
  //         return false;
  //       }

  //       setError('Password reset email sent. Please check your inbox.');
  //       return true;
  //     } catch (err) {
  //       setError('An unexpected error occurred');
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // OTP verification handler
  //   const handleOTPVerification = async (values: OTPFormValues) => {
  //     setError(null);
  //     setLoading(true);
  //     try {
  //       const { data, error } = await authClient.verifyEmail({
  //         email: values.email,
  //         token: values.token,
  //         type: 'signup',
  //       });

  //       if (error) {
  //         setError(error.message || 'Invalid or expired OTP');
  //         return false;
  //       }

  //       if (data.session) {
  //         // Redirect to onboarding after successful verification
  //         router.push(AUT_ROUTES.ONBOARDING);
  //         return true;
  //       }
  //     } catch (err) {
  //       setError('An unexpected error occurred');
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // Social login handler (GitHub/Google)
  //   const handleSocialLogin = async (provider: 'github' | 'google') => {
  //     setError(null);
  //     setLoading(true);
  //     try {
  //       const { data, error } = await authClient.signIn.social({
  //         provider,
  //         options: {
  //           redirectTo: `${window.location.origin}/dashboard`,
  //         },
  //       });

  //       if (error) {
  //         setError(error.message || `Failed to sign in with ${provider}`);
  //         return false;
  //       }

  //       if (data.url) {
  //         // Redirect to provider's OAuth page
  //         window.location.href = data.url;
  //         return true;
  //       }
  //     } catch (err) {
  //       setError('An unexpected error occurred');
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   // Onboarding save handler
  //   const handleOnboardingSave = async (values: {
  //     username: string;
  //     name: string;
  //     bio?: string;
  //     location?: string;
  //     link?: string;
  //     avatar?: File | null;
  //     cover?: File | null;
  //   }) => {
  //     setError(null);
  //     setLoading(true);
  //     try {
  //       // Update user profile
  //       const { data, error } = await authClient.updateUser({
  //         username: values.username,
  //         name: values.name,
  //         bio: values.bio,
  //         location: values.location,
  //         link: values.link,
  //       });

  //       if (error) {
  //         setError(error.message || 'Failed to save profile');
  //         return false;
  //       }

  //       // Handle image uploads (assuming upload logic is already implemented)
  //       if (values.avatar || values.cover) {
  //         // Use your existing handle_Upload_Media function
  //         const avatarUrl = values.avatar
  //           ? await handle_Upload_Media(values.avatar)
  //           : null;
  //         const coverUrl = values.cover
  //           ? await handle_Upload_Media(values.cover)
  //           : null;

  //         if (avatarUrl || coverUrl) {
  //           await authClient.updateUser({
  //             avatar: avatarUrl,
  //             cover: coverUrl,
  //           });
  //         }
  //       }

  //       router.push('/dashboard');
  //       return true;
  //     } catch (err) {
  //       setError('An unexpected error occurred');
  //       return false;
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return {
    handleSignUp,
    handleLogin,
    handleLogout,
    // handleForgotPassword,
    // handleOTPVerification,
    // handleSocialLogin,
    // handleOnboardingSave,
    loading,
    error,
    setError,
  };
}
