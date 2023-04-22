import type { NextApiRequest, NextApiResponse } from 'next';
import { OkPacket } from 'mysql2';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, price, quantity, reorder_point } = req.body;

    const connection = await db();
    const [result] = await connection.query('INSERT INTO inventory_items (name, price, quantity, reorder_point) VALUES (?, ?, ?, ?)', [name, price, quantity, reorder_point]);
    await connection.end();

    res.status(200).json({ message: 'Inventory item added successfully', id: (result as OkPacket).insertId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};