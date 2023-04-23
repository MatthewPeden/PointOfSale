import { useState } from 'react';
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

interface Order {
  payment_id: number;
  payment_method: string;
  amount: number;
  transaction_date: string;
}

interface OrdersReportPageProps {
  orders: Order[];
}

const OrdersReportPage: React.FC<OrdersReportPageProps> = ({ orders }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<Date | null>>) => {
    const dateTimeString = event.target.value;
    const date = new Date(dateTimeString);
    if (!isNaN(date.getTime())) {
      setter(date);
    }
  };

  const filteredOrders = orders.filter((order: Order) => {
    const orderDate = new Date(order.transaction_date);
  
    if (startDate && endDate) {
      return orderDate >= startDate && orderDate <= endDate;
    } else if (startDate) {
      return orderDate >= startDate;
    } else if (endDate) {
      return orderDate <= endDate;
    }
  
    return true;
  });  

  return (
    <Layout>
      <Container>
        <Title>Orders Report</Title>
        <Form>
          <label>
            Start Date/Time:
            <input type="datetime-local" onChange={(e) => handleDateChange(e, setStartDate)} />
          </label>
          <label>
            Start Date/Time:
            <input type="datetime-local" onChange={(e) => handleDateChange(e, setEndDate)} />
          </label>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order: Order) => (
              <tr key={order.payment_id}>
                <td>{order.payment_id}</td>
                <td>{order.payment_method}</td>
                <td>${order.amount}</td>
                <td>{format(new Date(order.transaction_date), 'MMM d, yyyy, hh:mm a')}</td>
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
      FROM payments
      `);

    await connection.end();

    const paymentMethodEnum = ['cash', 'card', 'check'];

    const getPaymentMethod = (value: number | string) => {
      if (typeof value === 'number') {
        return paymentMethodEnum[value - 1] || 'UNKNOWN';
      } else if (typeof value === 'string') {
        return paymentMethodEnum.includes(value) ? value : 'UNKNOWN';
      }
      return 'UNKNOWN';
    };

    const orders: Order[] = (rows as RowDataPacket[]).map((row: any) => {
      return {
        payment_id: row.payment_id,
        payment_method: getPaymentMethod(row.payment_method),
        amount: row.amount,
        transaction_date: row.transaction_date.toISOString(),
      };
    });

    return {
      props: {
        ...authCheck.props,
        orders: orders,
      },
    };
  };
export default OrdersReportPage;
  