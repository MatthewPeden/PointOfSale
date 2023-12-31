import { RowDataPacket } from 'mysql2';
import styled from 'styled-components';
import { format } from 'date-fns';
import db from '../../db';
import { withRole, getServerSidePropsForManager } from './api/auth/RBAC.tsx';
import Layout from "../components/Layout";
import { NextPageContext } from 'next';

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

interface InventoryItem {
  inventory_item_id: number;
  name: string;
  price: number;
  quantity: number;
  reorder_point: string;
}

interface InventoryItemReportPageProps {
  inventory_items: InventoryItem[];
}

const InventoryItemReportPage: React.FC<InventoryItemReportPageProps> = ({ inventory_items }) => {
  return (
    <Layout>
      <Container>
        <Title>Inventory Items Report</Title>
        <Table>
          <thead>
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Reorder Date</th>
          </tr>
          </thead>
          <tbody>
          {inventory_items.map((inventory_item: InventoryItem) => (
              <tr key={inventory_item.inventory_item_id}>
              <td>{inventory_item.inventory_item_id}</td>
              <td>{inventory_item.name}</td>
              <td>{inventory_item.price}</td>
              <td>{inventory_item.quantity}</td>
              <td>{format(new Date(inventory_item.reorder_point), 'MMM d, yyyy')}</td>
              </tr>
          ))}
          </tbody>
        </Table>
      </Container>
    </Layout>
  );
};

export const getServerSideProps = async(context: NextPageContext) => {
const authCheck = await getServerSidePropsForManager(context);
    if ('redirect' in authCheck) {
      return authCheck;
  }
    const connection = await db();
    const [rows] = await connection.query(`
      SELECT *
      FROM inventory_items
      ORDER BY reorder_point ASC
    `);

    await connection.end();

    const inventory_items: InventoryItem[] = (rows as RowDataPacket[]).map((row: any) => {
      return {
        inventory_item_id: row.inventory_item_id,
        name: row.name,
        price: row.price,
        quantity: row.quantity,
        reorder_point: row.reorder_point.toISOString(),
      };
    });

    return {
      props: {
        ...authCheck.props,
        inventory_items: inventory_items,
      },
    };
  };



export default InventoryItemReportPage;
