import type { NextApiRequest, NextApiResponse } from 'next';
import { OkPacket } from 'mysql2';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const order_id = req.body.order_id;
    const product_id = req.body.product_id;
    const quantity = req.body.quantity;
    const price = parseFloat(req.body.price);

    const connection = await db();
    const [result] = await connection.query('INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)', [order_id, product_id, quantity, price]);
    await connection.end();

    res.status(200).json({ message: 'Order added successfully', id: (result as OkPacket).insertId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};