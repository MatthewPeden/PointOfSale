// pages/protected-page.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function ProtectedPage() {
  return <div>Protected content</div>;
}

export const getServerSideProps = withPageAuthRequired();