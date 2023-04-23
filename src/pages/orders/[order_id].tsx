import { useState } from "react";
import executeQuery from "../../../lib/db";
import { useRouter } from "next/router";
import styled from "styled-components";

const Container = styled.div`
  background-color: #ede6f5;
  padding: 20px;
  min-height: calc(100vh - 60px);
`;

const Heading = styled.h1`
  color: #8447c9;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Text = styled.p`
  color: #8447c9;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #8447c9;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 16px;
  padding: 0.5rem 1rem;
  margin-bottom: 10px;
  border-radius: 30px;
  border: 1px solid #8447c9;
`;

const Button = styled.button`
  font-size: 16px;
  padding: 0.5rem 1rem;
  background-color: #5f4b8b;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #7d6ba0;
  }
`;

export async function getServerSideProps(context) {
  try {
    const { order_id } = context.query;
    const query = `SELECT * FROM orders WHERE order_id = ?`;
    const result = await executeQuery({ query, values: [order_id] });

    if (result.error) {
      console.error(result.error);
      return {
        props: { error: result.error.message },
      };
    } else if (result.length === 0) {
      return {
        props: { error: "Order not found" },
      };
    } else {
      const order = result[0];
      const serializableOrder = JSON.parse(JSON.stringify(order));
      return {
        props: { order: serializableOrder },
      };
    }
  } catch (error) {
    return {
      props: { error: error.message },
    };
  }
}

export default function OrderPage({ order, error }) {
  const router = useRouter();
  const [payment, setPayment] = useState(null);
  const [change, setChange] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cash_given = e.target.cash.value;

    if (!cash_given || isNaN(cash_given) || cash_given < order.total_amount) {
      alert("Please enter a valid amount of cash");
      return;
    }

    const response = await fetch("/api/payments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: order.order_id,
        total_amount: order.total_amount,
        cash_given: cash_given,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert(`Payment successful. Change: ${data.change}`);
      setPayment(data.payment);
      setChange(data.change);
    } else {
      alert(`Payment failed. Error: ${data.message}`);
    }
  };

     return (
    <Container>
      {order ? (
        <>
          <Heading>Order #{order.order_id}</Heading>
          <div>
            <Text>Order Date: {order.order_date}</Text>
            <Text>Total Amount: {order.total_amount}</Text>
          </div>
          {payment ? (
            <Text>Payment Successful, thank you!</Text>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="cash">Cash given:</Label>
              <Input type="number" id="cash" name="cash" />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </>
      ) : (
        <Text>{error}</Text>
      )}
    </Container>
  );
}