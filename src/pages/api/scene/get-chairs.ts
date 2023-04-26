import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const connection = await db();
    const [rows] = await connection.query('SELECT * FROM chair ORDER BY element_id');
    await connection.end();

    res.status(200).json(rows);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};