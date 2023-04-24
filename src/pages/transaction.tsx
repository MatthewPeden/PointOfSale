// pages/orders.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Layout from "../components/Layout";

// Create a styled form component
const Form = styled.form`
  margin-top: 80px; // Add some margin to avoid overlapping with the navbar
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Create a styled label component
const Label = styled.label`
  font-size: 20px;
`;

// Create a styled select component
const Select = styled.select`
  width: 200px;
  height: 40px;
  margin: 10px;
`;

// Create a styled button component
const Button = styled.button`
  display: block;
  width: 275px;
  height: 60px;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 35px;
  font-size: 16px;
  border-radius: 15px;
  margin: 16px;
  cursor: pointer;
  text-decoration: none;
  border: none;
  background-clip: padding-box;
  outline: none;
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
`;
export const getServerSideProps = withPageAuthRequired();
export default function OrdersPage() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const router = useRouter();
  const [totalAmount, setTotalAmount] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/api/orders");
      const data = await response.json();
      setOrders(data.orders);
    };
    fetchOrders();
  }, []);

  const handleSelectOrder = (e) => {
    const order_id = parseInt(e.target.value); // Convert the order_id to a number
    const order = orders.find((order) => order.order_id === order_id);

    if (order) {
      setSelectedOrder(order);
      setTotalAmount(order.total_amount);
    } else {
      setSelectedOrder(null); // Clear the selectedOrder if no valid order is selected
      setTotalAmount(null); // Clear the totalAmount as well
    }
  };

  const handleConfirmClick = () => {
    if (selectedOrder) {
      router.push(`/orders/${selectedOrder.order_id}?total_amount=${totalAmount}`);
    }
  };

  return (
    <div>
      <Layout>
      <h1>Orders</h1>
      <Form>
        <Label htmlFor="order_id">Select an order:</Label>
        <Select onChange={handleSelectOrder}>
          <option value="">-- Select an order --</option>
          {orders.map((order) => (
            <option key={order.order_id} value={order.order_id}>
              Order #{order.order_id}
            </option>
          ))}
        </Select>
        <Button type="button" onClick={handleConfirmClick} disabled={!selectedOrder}>
          Confirm
        </Button>
        <br />
      </Form>
      </Layout>
    </div>
  );
}