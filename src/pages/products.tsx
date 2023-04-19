import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Link from 'next/link';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
import router from 'next/router';

// Import necessary components, hooks, and helper functions
// ...

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

// Other styled components
// ...

interface Product {
    product_id: number;
    name: string;
    description: string;
    category_id: number;
    wholesale_price: number;
    retail_price: number;
    quantity: number;
}
  
interface Category {
    category_id: number;
    name: string;
}
  
interface ManageProductsPageProps {
    products: Product[];
    categories: Category[];
}

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
        <Link href="/add-product">
          Add New Product
        </Link>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Wholesale Price</th>
              <th>Retail Price</th>
              <th>Quantity</th>
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
                <td>${product.wholesale_price}</td>
                <td>${product.retail_price}</td>
                <td>{product.quantity}</td>
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
      SELECT product_id, name, description, category_id, wholesale_price, retail_price, quantity
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
        wholesale_price: row.wholesale_price,
        retail_price: row.retail_price,
        quantity: row.quantity,
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