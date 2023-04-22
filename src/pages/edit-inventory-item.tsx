import { useState, useEffect, FormEvent, SetStateAction } from 'react';
import router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
import { ChangeEvent } from 'react';
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

interface InventoryItem {
  inventory_item_id: number;
  name: string;
  price: number;
  reorder_point: string;
}

const EditInventoryItemPage = ({ initialItem }: { initialItem: InventoryItem }) => {
  const [name, setName] = useState<string>(initialItem.name);
  const [price, setPrice] = useState<number>(initialItem.price);
  const [reorderPoint, setReorderPoint] = useState<string>(initialItem.reorder_point);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await fetch(`/api/inventory_item/edit-inventory-item`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inventory_item_id: initialItem.inventory_item_id,
        name,
        price: Number(price),
        reorder_point: reorderPoint,
      }),
    });

    if (response.ok) {
      router.push('/inventory_items');
    }
  };

  return (
    <Layout>
      <Container>
        <Title>Edit Inventory Item</Title>
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
              onChange={(e: { target: { value: string }; }) => setPrice(parseFloat(e.target.value))}
            />
          </FormField>

          <FormField>
            <label htmlFor="reorder_point">Reorder Point:</label>
            <br/>
            <input
              type="date"
              id="reorder_point"
              defaultValue={reorderPoint}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setReorderPoint(e.target.value)}
            />
          </FormField>

          <FormField>
            <SubmitButtonContainer>
              <Button type="submit">Update Inventory Item</Button>
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
    'SELECT * FROM inventory_items WHERE inventory_item_id = ?',
    [id]
  );
  await connection.end();

  if (rows.length === 0) {
    return {
      notFound: true,
    };
  }

  const item: InventoryItem = rows[0] as InventoryItem;

  item.reorder_point = item.reorder_point;

  return {
    props: {
      initialItem: item,
    },
  };
};

export default EditInventoryItemPage;