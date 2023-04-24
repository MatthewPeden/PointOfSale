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
                        seat?.items.map((item: any, index: any) => {
                            return (
                                <div key={index}>
                                    <h2>Seat: {seat.id}</h2>
                                    <h3>{item.name}</h3>
                                    <p>{item.price}</p>
                                </div>
                            )
                        }
                        )
                    )
                }
                )
            );
        }
        else {
            return (
                chair?.items.map((item: any, index: any) => {
                    return (
                        <div key={chair.id} style={{ border: "2px solid black", borderRadius: "16px" }}>
                            <div key={index} style={{ padding: "8px" }}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <Button onClick={() => transferToSeat({item})}>Transfer To Seat</Button>
                            </div>
                        </div>
                    )
                }
                )
            );
        }

    }

}