import React, { FormEvent, SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';
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

const AddInventoryItemPage: React.FC = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [reorder_point, setReorderPoint] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/inventory_item/add-inventory-item', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                price,
            }),
        });

        if (response.ok) {
            router.push('/inventory_items');
        }
    };

    return (
        <Container>
            <Title>Add New Inventory Item</Title>
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
                    <Label htmlFor="reorder_point">Reorder Point:</Label>
                    <Input
                        type="date"
                        id="reorder_point"
                        value={reorder_point}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setReorderPoint(e.target.value.toString())}
                    />
                </FormField>

                <FormField>
                    <button type="submit">Add Inventory Item</button>
                </FormField>
            </Form>
        </Container>
    );
};

export default AddInventoryItemPage;
