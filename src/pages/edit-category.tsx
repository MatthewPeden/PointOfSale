import { useState, FormEvent, SetStateAction } from 'react';
import router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
import Layout from "../components/Layout";

const Container = styled.div`
  background-color: #ede6f5;
  padding: 20px;
  margin-top: 50px;
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

const Button = styled.a`
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
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
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
    <Layout>
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
            <SubmitButtonContainer>
              <Button type="submit">Update Category</Button>
            </SubmitButtonContainer>
          </FormField>
        </Form>
      </Container>
    </Layout>
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
