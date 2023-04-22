import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id: inventory_item_id } = req.query;

    const connection = await db();
    await connection.query('DELETE FROM inventory_items WHERE inventory_item_id = ?', [inventory_item_id]);
    await connection.end();

    res.status(200).json({ message: 'Inventory item deleted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};