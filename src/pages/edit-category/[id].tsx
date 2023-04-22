import type { GetServerSideProps, NextPage } from 'next';
import db from '../../../db';
import { RowDataPacket } from 'mysql2';
import EditCategoryPage from '../edit-category';

interface Category {
    category_id: number;
    name: string;
}

interface Props {
  category: Category;
}

const EditCategory: NextPage<Props> = ({ category }) => {
  return <EditCategoryPage initialCategory={category} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const connection = await db();
    const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM categories WHERE category_id = ?',
        [id]
    );
    await connection.end();

    if (rows.length === 0) {
        return {
        notFound: true,
        };
    }

    const category: Category = rows[0] as Category;

    return {
        props: {
        category,
        },
    };
};

export default EditCategory;