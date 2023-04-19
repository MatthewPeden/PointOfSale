import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const { product_id, name, description, category_id, wholesale_price, retail_price, quantity } = req.body;

    const connection = await db();
    await connection.query('UPDATE products SET name = ?, description = ?, category_id = ?, wholesale_price = ?, retail_price = ?, quantity = ? WHERE product_id = ?', [name, description, category_id, wholesale_price, retail_price, quantity, product_id]);
    await connection.end();

    res.status(200).json({ message: 'Product updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
