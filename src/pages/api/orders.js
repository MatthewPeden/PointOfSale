// pages/api/orders.js
import executeQuery from "../../../lib/db";

export default async function handler(req, res) {
  try {
    // query orders from orders table using executeQuery helper function
    const query = `SELECT * FROM orders`;
    const result = await executeQuery({ query });

    // check result and error
    if (result.error) {
      // error occurred
      console.error(result.error);
      res.status(500).json({ message: result.error.message });
    } else {
      // orders found
      res.status(200).json({ orders: result });
    }
  } catch (error) {
    // send error response with error message
    res.status(500).json({ message: error.message });
  }
}