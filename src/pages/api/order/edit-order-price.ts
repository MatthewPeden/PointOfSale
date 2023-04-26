import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const { order_id, amount } = req.body;

    const connection = await db();
    await connection.query('UPDATE orders SET total_amount = ? WHERE order_id = ?', [amount, order_id]);
    await connection.end();

    res.status(200).json({ message: 'Order updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};