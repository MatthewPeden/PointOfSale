import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
    cursor: pointer;
    outline: 0;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 1rem;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    color: #0d6efd;
    border-color: #0d6efd;
    :hover {
        color: #fff;
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
`;

const SeatWrapper = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
`;

const ItemWrapper = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
`;

const SeatHeader = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px;
`;

const ItemHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 5px;
`;

const ItemPrice = styled.p`
  font-size: 16px;
  margin: 0;
`;

const SeatList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ChairWrapper = styled.div`
  background-color: #ffffff;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const ChairCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #2b2b2b;
  border-radius: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 16px;
  transition: 0.3s;
  background-color: #ffffff;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

const ChairCardContent = styled.div`
  padding: 16px;
`;

const ItemName = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
`;

const TransferButton = styled.button`
  display: inline-block;
  font-size: 16px;
  text-align: center;
  padding: 12px 24px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  &:hover {
    background-color: #0f7ad4;
  }
`;

export class ItemTab extends Component {
    tableSelected: any;
    chairSelected: any;
    chair: any;
    seats: any;

    constructor(props: any) {
        super(props);
        this.state = {
            tableSelected: props.tableSelected,
            chairSelected: props.chairSelected,
        }
        if (this.state.tableSelected) {
            this.state = {
                tableSelected: props.tableSelected,
                seats: props.table.seats
            }
        } else if (this.state.chairSelected) {
            this.state = {
                chairSelected: props.chairSelected,
                chair: props.chair,
            }
        }
    }

    render() {
        const { tableSelected, chair, seats } = this.state;
        if (tableSelected) {
            return (
                seats.map((seat: any, index: any) => {
                    return (
                        <SeatWrapper>
                            <SeatHeader>Seat: {seat.id}</SeatHeader>
                            {seat.items.map((item: any, index: any) => {
                                return (
                                    <ItemWrapper key={index}>
                                        <ItemHeader>{item.name}</ItemHeader>
                                        <ItemPrice>${item.price}</ItemPrice>
                                        <p>ID: {item.product_id}</p>
                                    </ItemWrapper>
                                );
                            })}
                        </SeatWrapper>
                    );
                })
            );
        }
        else {
            return (
                chair?.items.map((item: any, index: any) => {
                    return (
                        <ChairCard key={chair.id}>
                            <ItemWrapper key={index}>
                                <ItemHeader>{item.name}</ItemHeader>
                                <ItemPrice>{item.price}</ItemPrice>
                                <p>ID: {item.product_id}</p>
                                <TransferButton onClick={() => transferToSeat({ item })}>Transfer To Seat</TransferButton>
                            </ItemWrapper>
                        </ChairCard>
                    );
                }
                )
            );
        }

    }

}