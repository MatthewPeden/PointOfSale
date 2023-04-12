// pages/protectedPage.js

import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

const ProtectedPage = ({ user }) => {
  return <div>This is a protected page! Welcome, {user.name}.</div>;
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res, ...context }) {
    const session = await getSession(req, res);

    return {
      props: {
        user: session.user,
      },
    };
  },
});

export default ProtectedPage;
