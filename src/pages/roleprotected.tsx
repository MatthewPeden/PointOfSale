import { getSession } from '@auth0/nextjs-auth0';
import { NextPageContext } from 'next';

interface Props {
  error?: string;
}

export default function Admin({ error }: Props) {
  return error ? <div>error</div> : <div>Admin Section</div>;
}

export async function getServerSideProps({ req, res }: NextPageContext) {
  const session = await getSession(req, res);
  const user = session?.user;

  // If there's no user logged in, redirect to /login
  if (!user) {
    return { redirect: { destination: '/api/auth/login', permanent: false } };
  }

  // If there's a user logged in but not verified, redirect to /verify
  if (!user['https://zamacopos.com/roles'].includes('Manager')) {
    return { redirect: { destination: '/not-authorized', permanent: false } };
  }

  // If there's a user logged in and verified but not a manager, return an error
  if (!user['https://zamacopos.com/roles'].includes('Manager')) {
    return { props: { error: 'Forbidden' } };
  }

  // If there's a user logged in, verified and a manager, continue to /admin
  return { props: {} };
}