import styled from 'styled-components';
import { withRole, getServerSidePropsForManager } from './api/auth/RBAC.tsx';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
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

const Button = styled.button`
  display: block;
  width: 175px;
  height: 35px;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  border-radius: 15px;
  margin-bottom: 5px;
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

const ActionButton = styled.a`
  width: 50px;
  height: 25px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;
  
interface Category {
    category_id: number;
    name: string;
}
  
interface ManageCategoriesPageProps {
    categories: Category[];
}

const handleAdd = () => {
  router.push('/add-category');
};

const handleDelete = async (id: number) => {
  const response = await fetch(`/api/category/delete-category?id=${id}`, {
      method: 'DELETE',
  });
  
  if (response.ok) {
      router.push('/categories');
  }
};

const handleEditButtonClick = (id: number) => {
  router.push(`/edit-category/${id}`);
};

const ManageCategoriesPage: React.FC<ManageCategoriesPageProps> = ({ categories }) => {
  return (
    <Layout>
      <Container>
        <Title>Manage Categories</Title>
        <Button onClick={() => handleAdd()}>Add New Category</Button>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category: Category) => (
              <tr key={category.category_id}>
                <td>{category.category_id}</td>
                <td>{category.name}</td>
                <td>
                  <ActionButton onClick={() => handleEditButtonClick(category.category_id)}>Edit</ActionButton>
                  {' | '}
                  <ActionButton onClick={() => handleDelete(category.category_id)}>Delete</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async(context) => {
  const authCheck = await getServerSidePropsForManager(context);
  if ('redirect' in authCheck) {
    return authCheck;
  }
    const connection = await db();

    const [categoryRows] = await connection.query(`
      SELECT category_id, name
      FROM categories
    `);

    await connection.end();

    const categories: Category[] = (categoryRows as RowDataPacket[]).map((row: any) => {
      return {
        category_id: row.category_id,
        name: row.name,
      };
    });

    return {
      props: {
        ...authCheck.props,
        categories: categories,
      },
    };
  };

export default ManageCategoriesPage;