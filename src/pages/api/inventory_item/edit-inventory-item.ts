import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const { inventory_item_id, name, price, reorder_point } = req.body;

    const connection = await db();
    await connection.query('UPDATE inventory_items SET name = ?, price = ?, reorder_point = ? WHERE inventory_item_id = ?', [name, price, reorder_point, inventory_item_id]);
    await connection.end();

    res.status(200).json({ message: 'Inventory item updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};