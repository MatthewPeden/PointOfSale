import { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../../db';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
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

interface AddProductProps {
  categories: Category[];
}

const AddProductPage: React.FC<AddProductProps> = ({ categories }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [categoryId, setCategoryId] = useState<number>(0);
    const [price, setPrice] = useState('');
    const router = useRouter();
    const [categories_list, setCategories] = useState<Category[]>([]);

    const fetchCategories = async () => {
        const response = await fetch('/api/product/get-categories');
        const data = await response.json();
        setCategories(data);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/product/add-product', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name,
            description,
            category_id: Number(categoryId),
            price: Number(price),
            }),
        });

        if (response.ok) {
            router.push('/products');
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <Container>
            <Title>Add New Product</Title>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <Label htmlFor="name">Name:</Label>
                    <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="description">Description:</Label>
                    <Input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setDescription(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="category">Category:</Label>
                    <select
                        id="category_id"
                        name="category_id"
                        value={categoryId}
                        onChange={(e) => setCategoryId(parseInt(e.target.value))}
                        required
                        >
                        <option value="">Select a category</option>
                        {categories_list.map((category) => (
                            <option key={category.category_id} value={category.category_id}>
                            {category.name}
                            </option>
                        ))}
                    </select>
                </FormField>

                <FormField>
                    <Label htmlFor="price">Price:</Label>
                    <Input
                        type="number"
                        id="price"
                        step="0.01"
                        value={price}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPrice(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <button type="submit">Add Product</button>
                </FormField>
            </Form>
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

export default AddProductPage;
