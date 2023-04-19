import type { NextApiRequest, NextApiResponse } from 'next';
import { OkPacket } from 'mysql2';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, description, category_id, wholesale_price, retail_price, quantity } = req.body;

    const connection = await db();
    const [result] = await connection.query('INSERT INTO products (name, description, category_id, wholesale_price, retail_price, quantity) VALUES (?, ?, ?, ?, ?, ?)', [name, description, category_id, wholesale_price, retail_price, quantity]);
    await connection.end();

    res.status(200).json({ message: 'Product added successfully', id: (result as OkPacket).insertId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};