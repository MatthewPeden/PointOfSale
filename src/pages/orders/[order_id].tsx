import { useState } from "react";
import executeQuery from "../../../lib/db";
import { useRouter } from "next/router";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { format } from "date-fns";
import { useEffect } from "react";


const Container = styled.div`
  background-color: #ede6f5;
  padding: 20px;
  padding-top: 40px;
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
  const [salesTax, setSalesTax] = useState(0);
  const TAX_RATE = 0.06; // 6% sales tax

useEffect(() => {
  calculateSalesTax();
}, []);

function calculateSalesTax() {
  const tax = order.total_amount * TAX_RATE;
  setSalesTax(tax);
}

const handleSubmit = async (e) => {
  e.preventDefault();
  const cash_given = e.target.cash.value;

// Inside the handleSubmit function
const totalWithTax = order.total_amount + salesTax;

if (!cash_given || isNaN(cash_given) || cash_given < totalWithTax) {
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
    total_amount: order.total_amount, // Send the price after sales tax
    cash_given: cash_given,
  }),
});


  const data = await response.json();

  if (response.status === 200) {
    const roundedChange = parseFloat(data.change).toFixed(2);
    alert(`Payment successful. Change: ${roundedChange}`);
    setPayment(data.payment);
    setChange(roundedChange);
  } else {
    alert(`Payment failed. Error: ${data.message}`);
  }
};


     return (
    <Container>
    <Layout>
      {order ? (
        <>
          <Heading>Order #{order.order_id}</Heading>
          <div>
            <Text>Order Date: {format(new Date(order.order_date), 'MMM d, yyyy, hh:mm a')}</Text>
<Text>Total Amount: ${(order.total_amount + salesTax).toFixed(2)}</Text>
          </div>
          {payment ? (
            <Text>Payment Successful, thank you!</Text>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Label htmlFor="cash">Cash given:</Label>
              <Input type="number" id="cash" name="cash" step="0.01" min="0" />
              <Button type="submit">Submit</Button>
            </Form>
          )}
        </>
      ) : (
        <Text>{error}</Text>
      )}
      </Layout>
    </Container>
  );
}