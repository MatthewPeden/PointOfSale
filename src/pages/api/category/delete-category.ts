import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    const { id: category_id } = req.query;

    const connection = await db();
    await connection.query('DELETE FROM categories WHERE category_id = ?', [category_id]);
    await connection.end();

    res.status(200).json({ message: 'Category deleted successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
