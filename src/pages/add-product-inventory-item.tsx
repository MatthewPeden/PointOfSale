import { SetStateAction, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import db from '../../db';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { RowDataPacket } from 'mysql2';
import Layout from "../components/Layout";

const Container = styled.div`
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

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

interface Product {
    product_id: number;
    name: string;
    description: string;
    category_id: number;
    price: number;
}
  
interface InventoryItem {
    inventory_item_id: number;
    name: string;
    price: number;
    reorder_point: string;
}

interface AddProductInventoryItemProps {
  products: Product[];
  inventory_items: InventoryItem[];
}

const AddProductInventoryItemPage: React.FC<AddProductInventoryItemProps> = ({ products, inventory_items }) => {
    const [productId, setProductId] = useState<number>(0);
    const [inventoryItemId, setInventoryItemId] = useState<number>(0);
    const [quantity, setQuantity] = useState('');
    const router = useRouter();
    const [products_list, setProducts] = useState<Product[]>([]);
    const [inventory_items_list, setInventoryItems] = useState<InventoryItem[]>([]);

    const fetchProducts = async () => {
        const response = await fetch('/api/product_inventory_item/get-products');
        const data = await response.json();
        setProducts(data);
    };

    const fetchInventoryItems = async () => {
        const response = await fetch('/api/product_inventory_item/get-inventory-items');
        const data = await response.json();
        setInventoryItems(data);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/product_inventory_item/add-product-inventory-item', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            product_id: Number(productId),
            inventory_item_id: Number(inventoryItemId),
            quantity: Number(quantity),
            }),
        });

        if (response.ok) {
            router.push('/product_inventory_items');
        }
    };

    useEffect(() => {
        fetchProducts();
        fetchInventoryItems();
    }, []);

    return (
        <Layout>
          <Container>
            <Title>Add Product Item</Title>
            <Form onSubmit={handleSubmit}>
                <FormField>
                    <Label htmlFor="product">Product:</Label>
                    <select
                        id="product_id"
                        name="product_id"
                        value={productId}
                        onChange={(e) => setProductId(parseInt(e.target.value))}
                        required
                        >
                        <option value="">Select a product</option>
                        {products_list.map((product) => (
                            <option key={product.product_id} value={product.product_id}>
                            {product.name}
                            </option>
                        ))}
                    </select>
                </FormField>

                <FormField>
                    <Label htmlFor="inventory_item">Inventory Item:</Label>
                    <select
                        id="inventory_item_id"
                        name="inventory_item_id"
                        value={inventoryItemId}
                        onChange={(e) => setInventoryItemId(parseInt(e.target.value))}
                        required
                        >
                        <option value="">Select an inventory item</option>
                        {inventory_items_list.map((inventory_item) => (
                            <option key={inventory_item.inventory_item_id} value={inventory_item.inventory_item_id}>
                            {inventory_item.name}
                            </option>
                        ))}
                    </select>
                </FormField>

                <FormField>
                    <Label htmlFor="quantity">Quantity:</Label>
                    <Input
                        type="number"
                        id="quantity"
                        step="0.01"
                        value={quantity}
                        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setQuantity(e.target.value)}
                    />
                </FormField>

                <FormField>
                  <SubmitButtonContainer>
                    <Button type="submit">Add Product Item</Button>
                  </SubmitButtonContainer>
                </FormField>
            </Form>
          </Container>
        </Layout>
    );
};

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps(context) {
      const connection = await db();
  
      const [productRows] = await connection.query(`
        SELECT product_id, name, description, category_id, price
        FROM products
      `);
  
      const [inventoryItemRows] = await connection.query(`
        SELECT inventory_item_id, name, price, reorder_point
        FROM inventory_items
      `);
  
      await connection.end();
  
      const products: Product[] = (productRows as RowDataPacket[]).map((row: any) => {
        return {
          product_id: row.product_id,
          name: row.name,
          description: row.description,
          category_id: row.category_id,
          price: row.price
        };
      });
  
      const inventory_items: InventoryItem[] = (inventoryItemRows as RowDataPacket[]).map((row: any) => {
          return {
              inventory_item_id: row.inventory_item_id,
              name: row.name,
              price: row.price,
              reorder_point: row.reorder_point.toISOString()
          };
      });
  
      return {
        props: {
          products: products,
          inventory_items: inventory_items,
        },
      };
    },
  });

export default AddProductInventoryItemPage;
