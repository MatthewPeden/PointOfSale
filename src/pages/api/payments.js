// pages/api/payments.js
import executeQuery from "../../../lib/db";

const TAX_RATE = 0.06; // 6% sales tax

export default async function handler(req, res) {
  try {
    const { order_id, total_amount, cash_given } = req.body;
    const TAX_RATE = 0.06; // 6% sales tax
    const totalWithTax = total_amount * (1 + TAX_RATE);

    const query = `SELECT * FROM orders WHERE order_id = ?`;
    const result = await executeQuery({ query, values: [order_id] });

    if (result.error) {
      console.error(result.error);
      res.status(500).json({ message: result.error.message });
    } else if (result.length === 0) {
      res.status(404).json({ message: "Order not found" });
    } else {
      const order = result[0];
      if (cash_given < totalWithTax) {
        res.status(400).json({ message: "Cash given is not enough to pay for the order" });
      } else {
        const change = cash_given - totalWithTax;
        const deleteQuery = `DELETE FROM orders WHERE order_id = ?`;
        const deleteResult = await executeQuery({ query: deleteQuery, values: [order_id] });

        if (deleteResult.error) {
          console.error(deleteResult.error);
          res.status(500).json({ message: deleteResult.error.message });
        } else {
          const insertQuery = `INSERT INTO payments (payment_method, amount, payment_id, transaction_date) VALUES (?, ?, ?, ?)`;
          const insertValues = ["cash", totalWithTax, order.payment_id, order.order_date];
          const insertResult = await executeQuery({ query: insertQuery, values: insertValues });

          if (insertResult.error) {
            console.error(insertResult.error);
            res.status(500).json({ message: insertResult.error.message });
          } else {
            res.status(200).json({ payment: insertResult, change });
          }
        }
      }
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
