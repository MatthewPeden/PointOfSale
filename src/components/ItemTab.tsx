import React, { Component } from "react";


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
                        <div key={chair.id}>
                            <div key={index}>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                }
                )
            );
        }

    }

}