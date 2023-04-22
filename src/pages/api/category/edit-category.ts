import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const { category_id, name } = req.body;

    const connection = await db();
    await connection.query('UPDATE categories SET name = ? WHERE category_id = ?', [name, category_id]);
    await connection.end();

    res.status(200).json({ message: 'Category updated successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};
