import { useState, useEffect, FormEvent, SetStateAction } from 'react';
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

interface Product {
    product_id: number;
    name: string;
    description: string;
    category_id: number;
    price: number;
}

const EditProductPage = ({ initialProduct }: { initialProduct: Product }) => {
    const [name, setName] = useState<string>(initialProduct.name);
    const [description, setDescription] = useState<string>(initialProduct.description);
    const [categoryId, setCategoryId] = useState<number>(initialProduct.category_id);
    const [price, setPrice] = useState<number>(initialProduct.price);
    const [categories_list, setCategories] = useState<Category[]>([]);
  
    const fetchCategories = async () => {
        const response = await fetch('/api/product/get-categories');
        const data = await response.json();
        setCategories(data);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        const response = await fetch(`/api/product/edit-product`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_id: initialProduct.product_id,
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
        <Layout>
            <Container>
                <Title>Edit Product</Title>
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
                            onChange={(e: { target: { value: string }; }) => setPrice(parseInt(e.target.value))}
                        />
                    </FormField>

                    <FormField>
                        <SubmitButtonContainer>
                            <Button type="submit">Update Product</Button>
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
        'SELECT * FROM products WHERE product_id = ?',
        [id]
    );
    await connection.end();

    if (rows.length === 0) {
        return {
        notFound: true,
        };
    }

    const product: Product = rows[0] as Product;

    return {
        props: {
        product,
        },
    };
};

export default EditProductPage;