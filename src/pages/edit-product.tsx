import { useState, useEffect, FormEvent, SetStateAction } from 'react';
import router, { useRouter } from 'next/router';
import styled from 'styled-components';

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

interface Product {
    product_id: number;
    name: string;
    description: string;
    category_id: number;
    wholesale_price: number;
    retail_price: number;
    quantity: number;
}

// Input fields for product information
// Use the same form structure and logic as in add-product.tsx
const ProductForm = ({ initialProduct }: { initialProduct: Product }) => {
    // Use initialProduct as the initial state for each field
    const [name, setName] = useState<string>(initialProduct.name);
    const [description, setDescription] = useState<string>(initialProduct.description);
    const [categoryId, setCategoryId] = useState<number>(initialProduct.category_id);
    const [wholesalePrice, setWholesalePrice] = useState<number>(initialProduct.wholesale_price);
    const [retailPrice, setRetailPrice] = useState<number>(initialProduct.retail_price);
    const [quantity, setQuantity] = useState<number>(initialProduct.quantity);
    const [categories_list, setCategories] = useState<Category[]>([]);
  
    const fetchCategories = async () => {
        const response = await fetch('/api/product/get-categories');
        const data = await response.json();
        setCategories(data);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const response = await fetch('/api/product/add-product', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            name,
            description,
            category_id: Number(categoryId),
            wholesale_price: Number(wholesalePrice),
            retail_price: Number(retailPrice),
            quantity: Number(quantity),
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
                    <Label htmlFor="wholesale-price">Wholesale Price:</Label>
                    <Input
                        type="number"
                        id="wholesale-price"
                        step="0.01"
                        value={wholesalePrice}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setWholesalePrice(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="retail-price">Retail Price:</Label>
                    <Input
                        type="number"
                        id="retail-price"
                        step="0.01"
                        value={retailPrice}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setRetailPrice(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <Label htmlFor="quantity">Quantity:</Label>
                    <Input
                        type="number"
                        id="quantity"
                        value={quantity}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setQuantity(e.target.value)}
                    />
                </FormField>

                <FormField>
                    <button type="submit">Add Product</button>
                </FormField>
            </Form>
        </Container>
    );

  // Render the form with the input fields and a submit button
};
