import styled from 'styled-components';
import router from 'next/router';
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  display: block;
  width: 275px;
  height: 60px;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  border-radius: 15px;
  margin: 16px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-clip: padding-box;
  outline: none;
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const handleCategories = () => {
    router.push('/categories');
};

const handleProducts = () => {
    router.push('/products');
};

const handleInventoryItems = () => {
    router.push('/inventory_items');
};

const handleProductItems = () => {
    router.push('/product_inventory_items');
};

const ManagementPage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Title>Management</Title>
            <ButtonContainer>
                <Button onClick={() => handleCategories()}>Categories</Button>
                <Button onClick={() => handleInventoryItems()}>Inventory Items</Button>
                <Button onClick={() => handleProducts()}>Products</Button>
                <Button onClick={() => handleProductItems()}>Product Items</Button>
            </ButtonContainer>
      </Container>
    </Layout>
  );
};

export default ManagementPage;