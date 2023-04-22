import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const { product_inventory_item_id, product_id, inventory_item_id, quantity } = req.body;

    const connection = await db();
    await connection.query('UPDATE product_inventory_items SET product_id = ?, inventory_item_id = ?, quantity = ? WHERE product_inventory_item_id = ?', [product_id, inventory_item_id, quantity, product_inventory_item_id]);
    await connection.end();

    res.status(200).json({ message: 'Product updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};