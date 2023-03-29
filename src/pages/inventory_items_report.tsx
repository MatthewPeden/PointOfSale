import { useState } from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 25px;
`;

const Title = styled.h1`
  color: purple;
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
    background-color: purple;
    color: #fff;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

interface InventoryItem {
  node: {
    inventory_item_id: number;
    quantity: number;
    reorder_point: string;
  };
}

interface InventoryItemReportPageProps {
  data: {
    allMysqlItems: {
      edges: InventoryItem[];
    };
  };
}

const InventoryItemReportPage: React.FC<InventoryItemReportPageProps> = ({ data }) => {
  const inventory_items = data.allMysqlItems.edges;

  return (
    <Container>
        <Title>Inventory Items</Title>
        <Table>
            <thead>
            <tr>
                <th>Inventory Item ID</th>
                <th>Quantity</th>
                <th>Date to Reorder</th>
            </tr>
            </thead>
            <tbody>
            {inventory_items.map(({ node }: InventoryItem) => (
                <tr key={node.inventory_item_id}>
                <td>{node.inventory_item_id}</td>
                <td>${node.quantity}</td>
                <td>{format(new Date(node.reorder_point), 'MMM d, yyyy')}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    </Container>
  );
};

export const query = graphql`
  query {
    allMysqlItems(
      sort: { reorder_point: DESC }
    ) {
      edges {
        node {
          inventory_item_id
          quantity
          reorder_point
        }
      }
    }
  }
`;

export default InventoryItemReportPage;
