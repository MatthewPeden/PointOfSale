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
  if (!session?.user['https://zamacopos.com/roles'].includes('Manager')) {
    return { props: { error: 'Forbidden' } };
  }

  return { props: {} };
}
