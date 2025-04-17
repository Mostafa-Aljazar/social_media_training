// // import { authClient } from '@/lib/auth-client'; //import the auth client

// import { authClient } from './auth-client';

// const email = 'user@example.com'; // Initialize email
// const password = 'securePassword123'; // Initialize password
// const name = 'User Name'; // Replace deprecated 'name' with 'displayName'
// const image = 'https://example.com/user-image.jpg'; // Initialize image

// await authClient.signUp.email(
//   {
//     email, // user email address
//     password, // user password -> min 8 characters by default
//     name, // user display name
//     image, // user image url (optional)
//     callbackURL: '/dashboard', // a url to redirect to after the user verifies their email (optional)
//   },
//   {
//     onRequest: () => {
//       //show loading
//     },
//     onSuccess: () => {
//       //redirect to the dashboard or sign in page
//     },
//     onError: (ctx) => {
//       // display the error message
//       alert(ctx.error.message);
//     },
//   }
// );
