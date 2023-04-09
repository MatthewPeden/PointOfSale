import { graphql } from 'gatsby';
import { format } from 'date-fns';
import styled from 'styled-components';
import React from 'react';

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

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #bda0d9;
  color: white;
`


const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
`


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
      <Navbar>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="#">About</NavbarLink>
        <NavbarLink href="#">Log In</NavbarLink>
        <NavbarLink href="#">Log Out</NavbarLink>
        <div style={{ padding: "10px" }}>
          <img
            alt="Gatsby G Logo"
            src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
          />
        </div>
      </Navbar>
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
          {inventory_items.map(({ node }: InventoryItem) => (
              <tr key={node.inventory_item_id}>
              <td>{node.inventory_item_id}</td>
              <td>{node.quantity}</td>
              <td>{format(new Date(node.reorder_point), 'MMM d, yyyy')}</td>
              </tr>
          ))}
          </tbody>
        </Table>
      </div>
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