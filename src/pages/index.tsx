import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-height: calc(100vh - 60px);
  background-color: #ede6f5;
  padding: 20px;
  padding-top: 40px;
`;

const Title = styled.h1`
  color: #8447c9;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #8447c9;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 0.5rem 1rem;
  background-color: #5f4b8b;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #7d6ba0;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
  color: #5f4b8b;
  font-size: 16px;
  text-decoration: none;
  &:hover {
    color: #7d6ba0;
  }
`;

const CenteredLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 40px;
`;

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (user) {
    return (
      <Container>
        <Layout>
          <Title>Welcome {user.name}!</Title>
          <Text>You are logged in with Auth0.</Text>
          <CenteredLinks>
            <ul>
              <li>
                <StyledLink href="/drawTest">Draw Test</StyledLink>
              </li>
             <li>
              <StyledLink href="/payments_report">Payments Report</StyledLink>
            </li>
            <li>
              <StyledLink href="/inventory_items_report">Inventory Items Report</StyledLink>
            </li>
            <li>
              <StyledLink href="/orders_report">Orders Report</StyledLink>
            </li>
            <li>
              <StyledLink href="/categories">Categories</StyledLink>
            </li>
            <li>
              <StyledLink href="/products">Products</StyledLink>
            </li>
            <li>
              <StyledLink href="/inventory_items">Inventory Items</StyledLink>
            </li>
            <li>
              <StyledLink href="/product_inventory_items">Product Items</StyledLink>
            </li>
            <p></p>
          </ul>
          </CenteredLinks>
        </Layout>
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>Zamaco POS</Title>
        <Text>Please log in to continue.</Text>
        <Button onClick={() => (window.location.href = '/api/auth/login')}>Log in</Button>
      </Container>
    );
  }
}
