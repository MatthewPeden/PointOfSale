import { useState } from 'react';
import { RowDataPacket } from 'mysql2';
import styled from 'styled-components';
import { format } from 'date-fns';
import db from '../../db';

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
  quantity: number;
  reorder_point: string;
}

interface InventoryItemReportPageProps {
  inventory_items: InventoryItem[];
}

const InventoryItemReportPage: React.FC<InventoryItemReportPageProps> = ({ inventory_items }) => {
  return (
    <Container>
      <div style = {{ marginTop: "60px" }}>
        <Title>Inventory Items</Title>
        <Table>
          <thead>
          <tr>
              <th>ID</th>
              <th>Quantity</th>
              <th>Date to Reorder</th>
          </tr>
          </thead>
          <tbody>
          {inventory_items.map((inventory_item: InventoryItem) => (
              <tr key={inventory_item.inventory_item_id}>
              <td>{inventory_item.inventory_item_id}</td>
              <td>{inventory_item.quantity}</td>
              <td>{format(new Date(inventory_item.reorder_point), 'MMM d, yyyy')}</td>
              </tr>
          ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export async function getServerSideProps() {
  const connection = await db();
  const [rows] = await connection.query(`
    SELECT inventory_item_id, quantity, reorder_point
    FROM inventory_items
  `);

  await connection.end();

  const inventory_items: InventoryItem[] = (rows as RowDataPacket[]).map((row: any) => {
    return {
      inventory_item_id: row.inventory_item_id,
      quantity: row.quantity,
      reorder_point: row.reorder_point.toISOString(),
    };
  });

  return {
    props: {
      inventory_items: inventory_items,
    },
  };
}

export default InventoryItemReportPage;
