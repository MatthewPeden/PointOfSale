import type { GetServerSideProps, NextPage } from 'next';
import EditProductPage from '../edit-product';
import db from '../../../db';
import { RowDataPacket } from 'mysql2';
import EditProductInventoryItemPage from '../edit-product-inventory-item';

interface ProductInventoryItem {
    product_inventory_item_id: number;
    product_id: number;
    inventory_item_id: number;
    quantity: number;
}

interface Props {
  product_inventory_item: ProductInventoryItem;
}

const EditProductInventoryItem: NextPage<Props> = ({ product_inventory_item }) => {
  return <EditProductInventoryItemPage initialProductItem={product_inventory_item} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const connection = await db();
    const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM product_inventory_items WHERE product_inventory_item_id = ?',
        [id]
    );
    await connection.end();

    if (rows.length === 0) {
        return {
            notFound: true,
        };
    }

    const product_inventory_item: ProductInventoryItem = rows[0] as ProductInventoryItem;

    return {
        props: {
            product_inventory_item,
        },
    };
};

export default EditProductInventoryItem;