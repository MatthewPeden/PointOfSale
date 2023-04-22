import styled from 'styled-components';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import db from '../../db';
import { RowDataPacket } from 'mysql2';
import { format } from 'date-fns';
import router from 'next/router';
import Layout from "../components/Layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
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

const Button = styled.button`
  display: block;
  width: 200px;
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
  
interface InventoryItem {
    inventory_item_id: number;
    name: string;
    price: number;
    reorder_point: string;
}
  
interface ManageInventoryItemsPageProps {
    inventory_items: InventoryItem[];
}

const handleAdd = () => {
  router.push('/add-inventory-item');
};

const handleDelete = async (id: number) => {
  const response = await fetch(`/api/inventory_item/delete-inventory-item?id=${id}`, {
      method: 'DELETE',
  });
  
  if (response.ok) {
      router.push('/inventory_items');
  }
};

const handleEditButtonClick = (id: number) => {
  router.push(`/edit-inventory-item/${id}`);
};

const ManageInventoryItemsPage: React.FC<ManageInventoryItemsPageProps> = ({ inventory_items }) => {
  return (
    <Layout>
      <Container>
        <Title>Manage Inventory Items</Title>
        <Button onClick={() => handleAdd()}>Add New Inventory Item</Button>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Reorder Point</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inventory_items.map((inventory_item: InventoryItem) => (
              <tr key={inventory_item.inventory_item_id}>
                <td>{inventory_item.inventory_item_id}</td>
                <td>{inventory_item.name}</td>
                <td>${inventory_item.price}</td>
                <td>{format(new Date(inventory_item.reorder_point), 'MMM d, yyyy')}</td>
                <td>
                  <ActionButton onClick={() => handleEditButtonClick(inventory_item.inventory_item_id)}>Edit</ActionButton>
                  {' | '}
                  <ActionButton onClick={() => handleDelete(inventory_item.inventory_item_id)}>Delete</ActionButton>
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

    const [inventoryItemRows] = await connection.query(`
      SELECT inventory_item_id, name, price, reorder_point
      FROM inventory_items
    `);

    await connection.end();

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
        inventory_items: inventory_items,
      },
    };
  },
});

export default ManageInventoryItemsPage;