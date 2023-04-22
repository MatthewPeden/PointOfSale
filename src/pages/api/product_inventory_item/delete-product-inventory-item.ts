import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id: product_inventory_item_id } = req.query; // Get the product_id from the query

    const connection = await db();
    await connection.query('DELETE FROM product_inventory_items WHERE product_inventory_item_id = ?', [product_inventory_item_id]);
    await connection.end();

    res.status(200).json({ message: 'Product deleted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};