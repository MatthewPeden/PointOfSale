import type { GetServerSideProps, NextPage } from 'next';
import db from '../../../db';
import { RowDataPacket } from 'mysql2';
import EditInventoryItemPage from '../edit-inventory-item';

interface InventoryItem {
    inventory_item_id: number;
    name: string;
    price: number;
    reorder_point: string;
}

interface Props {
  inventory_item: InventoryItem;
}

const EditInventoryItem: NextPage<Props> = ({ inventory_item }) => {
  return <EditInventoryItemPage initialItem={inventory_item} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const connection = await db();
    const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM inventory_items WHERE inventory_item_id = ?',
        [id]
    );
    await connection.end();

    if (rows.length === 0) {
        return {
        notFound: true,
        };
    }

    const inventory_item: InventoryItem = rows[0] as InventoryItem;
    inventory_item.reorder_point = new Date(inventory_item.reorder_point).toISOString();

    return {
        props: {
        inventory_item,
        },
    };
};  

export default EditInventoryItem;