import { useState, useEffect, FormEvent, SetStateAction } from 'react';
import router, { useRouter } from 'next/router';
import styled from 'styled-components';
import { GetServerSideProps } from 'next';
import db from '../../db';
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

interface ProductInventoryItem {
    product_inventory_item_id: number;
    product_id: number;
    inventory_item_id: number;
    quantity: number;
}

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

const EditProductInventoryItemPage = ({ initialProductItem }: { initialProductItem: ProductInventoryItem }) => {
    const [productId, setProductId] = useState<number>(initialProductItem.product_id);
    const [inventoryItemId, setInventoryItemId] = useState<number>(initialProductItem.inventory_item_id);
    const [quantity, setQuantity] = useState<number>(initialProductItem.quantity);
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

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        const response = await fetch(`/api/product_inventory_item/edit-product-inventory-item`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                product_inventory_item_id: initialProductItem.product_inventory_item_id,
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
                <Title>Edit Product Item</Title>
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
                            onChange={(e: { target: { value: string }; }) => setQuantity(parseInt(e.target.value))}
                        />
                    </FormField>

                    <FormField>
                        <SubmitButtonContainer>
                            <Button type="submit">Update Product Item</Button>
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
        'SELECT * FROM product_inventory_items WHERE product_inventory_item_id = ?',
        [id]
    );
    await connection.end();

    if (rows.length === 0) {
        return {
        notFound: true,
        };
    }

    const product_inventory_item: ProductInventoryItem = rows[0] as ProductInventoryItem;

    return {
        props: {
            product_inventory_item,
        },
    };
};

export default EditProductInventoryItemPage;