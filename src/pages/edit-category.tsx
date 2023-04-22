import { useState, FormEvent, SetStateAction } from 'react';
import router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import db from '../../db';
import { RowDataPacket } from 'mysql2';

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

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 14px;
  padding: 10px;
  width: 100%;
`;

interface Category {
  category_id: number;
  name: string;
}

const EditCategoryPage = ({ initialCategory }: { initialCategory: Category }) => {
  const [name, setName] = useState<string>(initialCategory.name);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(`/api/category/edit-category`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        category_id: initialCategory.category_id,
        name,
      }),
    });

    if (response.ok) {
      router.push('/categories');
    }
  };

  return (
    <Container>
      <Title>Edit Category</Title>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            id="name"
            value={name}
            onChange={(e: { target: { value: SetStateAction<string>; }; }) =>
              setName(e.target.value)
            }
          />
        </FormField>

        <FormField>
          <button type="submit">Update Category</button>
        </FormField>
      </Form>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  const connection = await db();
  const [rows] = await connection.query<RowDataPacket[]>(
    "SELECT * FROM categories WHERE category_id = ?",
    [id]
  );
  await connection.end();

  if (rows.length === 0) {
    return {
      notFound: true,
    };
  }

  const category: Category = rows[0] as Category;

  return {
    props: {
      initialCategory: category,
    },
  };
};

export default EditCategoryPage;
