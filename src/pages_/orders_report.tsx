import { useState } from 'react';
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

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;

  label {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: bold;
    margin-right: 20px;
    width: 50%;

    input {
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
      font-size: 14px;
      padding: 10px;
      width: 100%;
    }
  }
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


interface Order {
  node: {
    order_id: number;
    total_amount: number;
    order_date: string;
  };
}

interface OrdersReportPageProps {
  data: {
    allMysqlOrders: {
      edges: Order[];
    };
  };
}

const OrdersReportPage: React.FC<OrdersReportPageProps> = ({ data }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const orders = data.allMysqlOrders.edges;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<Date | null>>) => {
    const date = new Date(event.target.value);
    if (!isNaN(date.getTime())) {
      setter(date);
    }
  };

  const filteredOrders = orders.filter(({ node }: Order) => {
    if (!startDate || !endDate) {
      return true;
    }
  
    const orderDate = new Date(node.order_date);
    return orderDate >= startDate && orderDate < new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  });  

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
        <Title>Orders</Title>
        <Form>
          <label>
            Start date:
            <input type="date" onChange={(e) => handleDateChange(e, setStartDate)} />
          </label>
          <label>
            End date:
            <input type="date" onChange={(e) => handleDateChange(e, setEndDate)} />
          </label>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Total Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map(({ node }: Order) => (
              <tr key={node.order_id}>
                <td>{node.order_id}</td>
                <td>${node.total_amount}</td>
                <td>{format(new Date(node.order_date), 'MMM d, yyyy')}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export const query = graphql`
  query($startDate: Date, $endDate: Date) {
    allMysqlOrders(
      filter: { order_date: { gte: $startDate, lte: $endDate } }
      sort: { order_id: DESC }
    ) {
      edges {
        node {
          order_id
          total_amount
          order_date
        }
      }
    }
  }
`;

export default OrdersReportPage;