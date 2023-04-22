import styled from 'styled-components';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
import router from 'next/router';

const Container = styled.div`
  background-color: #ede6f5;
  padding: 20px;
`;

const Title = styled.h1`
  color: #8447c9;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;

  th, td {
    border: 1px solid #ddd;
    padding: 12px;
    text-align: left;
  }

  th {
    background-color: #5f4b8b;
    color: #ede6f5;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #d7c3eb;
  }
`;

const Button = styled.a`
  display: block;
  width: 175px;
  height: 35px;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  border-radius: 30px;
  margin-bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

interface Product {
    product_id: number;
    name: string;
    description: string;
    category_id: number;
    price: number;
}
  
interface Category {
    category_id: number;
    name: string;
}
  
interface ManageProductsPageProps {
    products: Product[];
    categories: Category[];
}

const handleAdd = () => {
  router.push('/add-product');
};

const handleDelete = async (id: number) => {
  const response = await fetch(`/api/product/delete-product?id=${id}`, {
      method: 'DELETE',
  });
  
  if (response.ok) {
      router.push('/products');
  }
};

const handleEditButtonClick = (id: number) => {
  router.push(`/edit-product/${id}`);
};

const ManageProductsPage: React.FC<ManageProductsPageProps> = ({ products, categories }) => {
  return (
    <Container>
      <div style={{ marginTop: '60px' }}>
        <Title>Manage Products</Title>
        <Button onClick={() => handleAdd()}>Add New Product</Button>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>
                  {
                    categories.find((category) => category.category_id === product.category_id)
                      ?.name
                  }
                </td>
                <td>${product.price}</td>
                <td>
                  <button onClick={() => handleEditButtonClick(product.product_id)}>Edit</button>
                  {' | '}
                  <button onClick={() => handleDelete(product.product_id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const connection = await db();

    const [productRows] = await connection.query(`
      SELECT product_id, name, description, category_id, price
      FROM products
    `);

    const [categoryRows] = await connection.query(`
      SELECT category_id, name
      FROM categories
    `);

    await connection.end();

    const products: Product[] = (productRows as RowDataPacket[]).map((row: any) => {
      return {
        product_id: row.product_id,
        name: row.name,
        description: row.description,
        category_id: row.category_id,
        price: row.price
      };
    });

    const categories: Category[] = (categoryRows as RowDataPacket[]).map((row: any) => {
      return {
        category_id: row.category_id,
        name: row.name,
      };
    });

    return {
      props: {
        products: products,
        categories: categories,
      },
    };
  },
});

export default ManageProductsPage;