import { getSession } from '@auth0/nextjs-auth0';
import { NextPageContext } from 'next';

// A higher-order function that takes a role and returns a getServerSideProps function
const withRole = (role: string) => async ({ req, res }: NextPageContext) => {
  const session = await getSession(req, res);
  const user = session?.user;

  // If there's no user logged in, redirect to /login
  if (!user) {
    return { redirect: { destination: '/api/auth/login', permanent: false } };
  }

  // If there's a user logged in but does not have the required role, redirect to /not-authorized
  if (!user['https://zamacopos.com/roles'].includes(role)) {
    return { redirect: { destination: '/not-authorized', permanent: false } };
  }

  // If there's a user logged in and has the required role, continue to the page
  return { props: {} };
};

// Use the higher-order function to create getServerSideProps functions for different roles
export const getServerSidePropsForManager = withRole('Manager');
export const getServerSidePropsForEmployee = withRole('Employee');
export const getServerSidePropsForCustomer = withRole('Customer');
