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

interface Payment {
  payment_id: number;
  amount: number;
  transaction_date: string;
}

interface PaymentsReportPageProps {
  payments: Payment[];
}

const PaymentsReportPage: React.FC<PaymentsReportPageProps> = ({ payments }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<Date | null>>) => {
    const date = new Date(event.target.value);
    if (!isNaN(date.getTime())) {
      setter(date);
    }
  };

  const filteredPayments = payments.filter((payment: Payment) => {
    if (!startDate || !endDate) {
      return true;
    }
  
    const paymentDate = new Date(payment.transaction_date);
    return paymentDate >= startDate && paymentDate < new Date(endDate.getTime() + 24 * 60 * 60 * 1000);
  });  

  return (
    <Container>
      <div style = {{ marginTop: "60px" }}>
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
              <th>ID</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filteredPayments.map((payment: Payment) => (
              <tr key={payment.payment_id}>
                <td>{payment.payment_id}</td>
                <td>${payment.amount}</td>
                <td>{format(new Date(payment.transaction_date), 'MMM d, yyyy')}</td>
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
    SELECT payment_id, amount, transaction_date
    FROM payments
  `);

  await connection.end();

  // Map over the rows and convert order_date to a string
  const payments: Payment[] = (rows as RowDataPacket[]).map((row: any) => {
    return {
      payment_id: row.payment_id,
      amount: row.amount,
      transaction_date: new Date(row.transaction_date).toISOString(),
    };
  });

  return {
    props: {
      payments: payments,
    },
  };
}

export default PaymentsReportPage;
