import type { NextApiRequest, NextApiResponse } from 'next';
import { OkPacket } from 'mysql2';
import db from '../../../../db';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { scene_id, x1, y1, x2, y2, element_id } = req.body;

    const connection = await db();
    const [result] = await connection.query('INSERT INTO tables (scene_id, x1, y1, x2, y2, element_id) VALUES (?, ?, ?, ?, ?, ?)', [scene_id, x1, y1, x2, y2, element_id]);
    await connection.end();

    res.status(200).json({ message: 'Order added successfully', id: (result as OkPacket).insertId });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};