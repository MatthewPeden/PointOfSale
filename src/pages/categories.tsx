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
    <Container>
      <div style={{ marginTop: '60px' }}>
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
                  <button onClick={() => handleEditButtonClick(category.category_id)}>Edit</button>
                  {' | '}
                  <button onClick={() => handleDelete(category.category_id)}>Delete</button>
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
        categories: categories,
      },
    };
  },
});

export default ManageCategoriesPage;