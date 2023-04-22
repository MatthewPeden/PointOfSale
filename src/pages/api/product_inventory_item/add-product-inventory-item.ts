import type { NextApiRequest, NextApiResponse } from 'next';
import { OkPacket } from 'mysql2';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { product_id, inventory_item_id, quantity } = req.body;

    const connection = await db();
    const [result] = await connection.query('INSERT INTO product_inventory_items (product_id, inventory_item_id, quantity) VALUES (?, ?, ?)', [product_id, inventory_item_id, quantity]);
    await connection.end();

    res.status(200).json({ message: 'Product added successfully', id: (result as OkPacket).insertId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};