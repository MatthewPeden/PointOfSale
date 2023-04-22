import styled from 'styled-components';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
import router from 'next/router';
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

const ActionButton = styled.a`
  width: 50px;
  height: 25px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  border-radius: 12px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
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
  
interface ManageProductInventoryItemsPageProps {
    product_inventory_items: ProductInventoryItem[];
    products: Product[];
    inventory_items: InventoryItem[];
}

const handleAdd = () => {
  router.push('/add-product-inventory-item');
};

const handleDelete = async (id: number) => {
  const response = await fetch(`/api/product_inventory_item/delete-product-inventory-item?id=${id}`, {
      method: 'DELETE',
  });
  
  if (response.ok) {
      router.push('/product_inventory_items');
  }
};

const handleEditButtonClick = (id: number) => {
  router.push(`/edit-product-inventory-item/${id}`);
};

const ManageProductInventoryItemsPage: React.FC<ManageProductInventoryItemsPageProps> = ({ product_inventory_items, products, inventory_items }) => {
  return (
    <Layout>
      <Container>
        <Title>Manage Product Items</Title>
        <Button onClick={() => handleAdd()}>Add Product Item</Button>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Inventory Item</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {product_inventory_items.map((product_inventory_item: ProductInventoryItem) => (
              <tr key={product_inventory_item.product_inventory_item_id}>
                <td>{product_inventory_item.product_inventory_item_id}</td>
                <td>
                  {
                    products.find((product) => product.product_id === product_inventory_item.product_id)
                      ?.name
                  }
                </td>
                <td>
                  {
                    inventory_items.find((inventory_item) => inventory_item.inventory_item_id === product_inventory_item.inventory_item_id)
                      ?.name
                  }
                </td>
                <td>{product_inventory_item.quantity}</td>
                <td>
                  <ActionButton onClick={() => handleEditButtonClick(product_inventory_item.product_inventory_item_id)}>Edit</ActionButton>
                  {' | '}
                  <ActionButton onClick={() => handleDelete(product_inventory_item.product_inventory_item_id)}>Delete</ActionButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps(context) {
    const connection = await db();

    const [productInventoryItemRows] = await connection.query(`
      SELECT product_inventory_item_id, product_id, inventory_item_id, quantity
      FROM product_inventory_items
    `);

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

    const product_inventory_items: ProductInventoryItem[] = (productInventoryItemRows as RowDataPacket[]).map((row: any) => {
        return {
            product_inventory_item_id: row.product_inventory_item_id,
            product_id: row.product_id,
            inventory_item_id: row.inventory_item_id,
            quantity: row.quantity
        };
    });

    return {
      props: {
        product_inventory_items: product_inventory_items,
        products: products,
        inventory_items: inventory_items,
      },
    };
  },
});

export default ManageProductInventoryItemsPage;