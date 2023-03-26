import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';

interface Order {
  node: {
    order_id: string;
    total_amount: number;
    order_date: Date;
  };
}

interface ReportsPageProps {
  data: {
    allMysqlOrders: {
      edges: Order[];
    };
  };
}

const Container = styled.div`
  background-color: #f2edff;
  border-radius: 4px;
  padding: 16px;
`;

const Title = styled.h1`
  color: #6b3e9c;
  font-size: 28px;
  margin-bottom: 16px;
`;

const OrderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const OrderListItem = styled.li`
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  color: #6b3e9c;
  margin-bottom: 8px;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: purple;
  margin: 24px 0;
`;

const ReportsPage: React.FC<ReportsPageProps> = ({ data }) => {
  const orders = data.allMysqlOrders.edges;

  return (
    <Container>
      <Title>Orders</Title>
      <OrderList>
        {orders.map(({ node }: Order) => (
          <>
          <OrderListItem key={node.order_id}>
            Order ID: {node.order_id}
          </OrderListItem>
          <OrderListItem key={node.order_id}>
            Total Amount: ${node.total_amount}
          </OrderListItem>
          <OrderListItem key={node.order_id}>
            Date: {format(new Date(node.order_date), 'MMM d, yyyy')}
          </OrderListItem>
          <Divider />
        </>
        
        ))}
      </OrderList>
    </Container>
  );
};

export const query = graphql`
  query {
    allMysqlOrders {
        edges {
            node {
                order_id
                total_amount
                order_date
            }
        }
    }
  }
`;

export default ReportsPage;
