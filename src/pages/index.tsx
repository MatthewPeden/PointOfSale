import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "../components/login";
import LogoutButton from "../components/logout";
import Profile from "../components/Profile";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5eefc;
`

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: #bda0d9;
  color: white;
`


const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  margin-right: 20px;
  padding: 10px;
`

const Title = styled.h1`
  font-size: 48px;
  text-align: center;
  color: #5f4b8b;
  margin-top: 20px;
`

const H2 = styled.h2`
  font-size: 40px;
  text-align: center;
  color: #5f4b8b;
  margin-top: 0px;
`

const Button = styled.a`
  display: block;
  width: 200px;
  height: 60px;
  margin: 50px auto;
  background-color: #5f4b8b;
  color: white;
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  border-radius: 30px;
  text-decoration: none;
  &:hover {
    background-color: #7d6ba0;
  }
  &:first-of-type {
    margin-top: 0;
  }
`

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Container>
        <Helmet>
          <title>Zamaco® Point of Sale Site</title>
        </Helmet>
        <Navbar>
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="#">About</NavbarLink>
          <NavbarLink href="#">Log In</NavbarLink>
          <NavbarLink href="#">Log Out</NavbarLink>
          <div style={{ padding: "10px" }}>
            <img
              alt="Gatsby G Logo"
              src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
            />
          </div>
        </Navbar>
        <Title>Zamaco® Point of Sale Site</Title>
        <a href="drawTest"><Button>Start an Order</Button></a>
        <H2>Reports: </H2>
        <div style={{ textAlign: "center" }}>
          <Button href="orders_report">Orders</Button>
          <Button href="payments_report">Payments</Button>
          <Button href="inventory_items_report">Inventory Items</Button>
        </div>
      </Container>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
