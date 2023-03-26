// import React, { useState } from "react"
// import { graphql } from "gatsby"


// interface OrdersQuery {
//   allOrders: {
//     nodes: {
//       order_id: number
//       user_id: number
//       order_date: Date
//       total_amount: number
//     }[]
//   }
// }

// type Props = {
//   data: OrdersQuery
// }

// type Order = {
//   order_id: number
//   user_id: number
//   order_date: Date
//   total_amount: number
// }

// const OrdersPage: React.FC<Props> = ({ data }) => {
//   const [startDate, setStartDate] = useState("")
//   const [endDate, setEndDate] = useState("")
//   const [filteredOrders, setFilteredOrders] = useState<Order[]>([])
//   const [report, setReport] = useState("")

//   const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setStartDate(event.target.value)
//   }

//   const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEndDate(event.target.value)
//   }

//   const handleFilterClick = () => {
//     const orders: Order[] = data.allOrders.nodes
//     const filteredOrders = orders.filter((order) => {
//       const orderDate = new Date(order.order_date)
//       const start = new Date(startDate)
//       const end = new Date(endDate)
//       return orderDate >= start && orderDate <= end
//     })
//     setFilteredOrders(filteredOrders)
//   }

//   const generateReport = () => {
//     // Generate report here
//     const reportText = "Report text goes here"
//     setReport(reportText)
//   }

//   return (
//     <>
//       <h1>Orders Page</h1>
//       <form>
//         <label htmlFor="startDate">Start Date:</label>
//         <input type="date" id="startDate" value={startDate} onChange={handleStartDateChange} />
//         <br />
//         <label htmlFor="endDate">End Date:</label>
//         <input type="date" id="endDate" value={endDate} onChange={handleEndDateChange} />
//         <br />
//         <button type="button" onClick={handleFilterClick}>
//           Filter
//         </button>
//         <button type="button" onClick={generateReport}>
//           Generate Report
//         </button>
//       </form>
//       <h2>Filtered Orders</h2>
//       {filteredOrders.length > 0 ? (
//         <ul>
//           <ul>
//   {filteredOrders.map((order) => (
//     <li key={order.order_id}>
//       <div>
//         <span>Order date:</span> {order.order_date}
//       </div>
//       <div>
//         <span>User ID:</span> {order.user_id}
//       </div>
//       <div>
//         <span>Total amount:</span> ${order.total_amount}
//       </div>
//     </li>
//   ))}
// </ul>

//         </ul>
      
//       ) : (
//         <p>No orders found within the specified date range.</p>
//       )}
//       <h2>Report</h2>
//       {report && <p>{report}</p>}
//     </>
//   )
// }

// export default OrdersPage

// export const query = graphql`
//   query Orders($startDate: Date!, $endDate: Date!) {
//     allOrders(filter: {date: {gte: $startDate, lte: $endDate}}) {
//       nodes {
//         order_id
//         user_id
//         order_date
//         total_amount
//       }
//     }
//   }
// `

