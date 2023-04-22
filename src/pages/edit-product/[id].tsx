import type { GetServerSideProps, NextPage } from 'next';
import EditProductPage from '../edit-product';
import db from '../../../db';
import { RowDataPacket } from 'mysql2';

interface Product {
    product_id: number;
    name: string;
    description: string;
    category_id: number;
    price: number;
}

interface Props {
  product: Product;
}

const EditProduct: NextPage<Props> = ({ product }) => {
  return <EditProductPage initialProduct={product} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const connection = await db();
    const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM products WHERE product_id = ?',
        [id]
    );
    await connection.end();

    if (rows.length === 0) {
        return {
            notFound: true,
        };
    }

    const product: Product = rows[0] as Product;

    return {
        props: {
            product,
        },
    };
};

export default EditProduct;