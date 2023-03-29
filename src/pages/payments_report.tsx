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

interface Payment {
  node: {
    payment_id: number;
    amount: number;
    transaction_date: string;
  };
}

interface PaymentsReportPageProps {
  data: {
    allMysqlPayments: {
      edges: Payment[];
    };
  };
}

const PaymentsReportPage: React.FC<PaymentsReportPageProps> = ({ data }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const payments = data.allMysqlPayments.edges;

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<Date | null>>) => {
    const date = new Date(event.target.value);
    if (!isNaN(date.getTime())) {
      setter(date);
    }
  };

  const filteredPayments = payments.filter(({ node }: Payment) => {
    if (!startDate || !endDate) {
      return true;
    }
  
    const paymentDate = new Date(node.transaction_date);
    return paymentDate >= startDate && paymentDate < new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  });  

  return (
    <Container>
      <Title>Payments</Title>
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
          {filteredPayments.map(({ node }: Payment) => (
            <tr key={node.payment_id}>
              <td>{node.payment_id}</td>
              <td>${node.amount}</td>
              <td>{format(new Date(node.transaction_date), 'MMM d, yyyy')}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export const query = graphql`
  query($startDate: Date, $endDate: Date) {
    allMysqlPayments(
      filter: { transaction_date: { gte: $startDate, lte: $endDate } }
      sort: { payment_id: DESC }
    ) {
      edges {
        node {
          payment_id
          amount
          transaction_date
        }
      }
    }
  }
`;

export default PaymentsReportPage;
