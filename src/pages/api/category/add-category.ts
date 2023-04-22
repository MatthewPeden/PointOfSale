import type { NextApiRequest, NextApiResponse } from 'next';
import { OkPacket } from 'mysql2';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name } = req.body;

    const connection = await db();
    const [result] = await connection.query('INSERT INTO categories (name) VALUES (?)', [name]);
    await connection.end();

    res.status(200).json({ message: 'Category added successfully', id: (result as OkPacket).insertId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};