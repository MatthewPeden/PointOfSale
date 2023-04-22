// pages/orders/[order_id].tsx
import { useState } from "react";
import executeQuery from "../../../lib/db";
import { useRouter } from "next/router";
import styles from "./OrderPage.module.css";

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
    <div className={styles.container}>
      {order ? (
        <>
          <h1 className={styles.heading}>Order #{order.order_id}</h1>
          <div>
            <p>Order Date: {order.order_date}</p>
            <p>Total Amount: {order.total_amount}</p>
          </div>
          {payment ? (
            <div className={styles.paymentSuccessful}>
              <p>Payment Successful, thank you!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <label htmlFor="cash">Cash given:</label>
              <input type="number" id="cash" name="cash" />
              <br />
              <button type="submit">Submit</button>
            </form>
          )}
        </>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}