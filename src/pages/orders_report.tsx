import { useState } from 'react';
import { graphql } from 'gatsby';
import { format } from 'date-fns';
import styled from 'styled-components';
import React from 'react';

const Container = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.h1`
  color: purple;
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
    background-color: purple;
    color: #fff;
    font-weight: bold;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

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
            <th>Order ID</th>
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
