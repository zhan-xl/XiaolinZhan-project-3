import {NavBarLogIn, NavBarLogOut} from "../components/navBar";
import Container from "../components/container";
import React from "react";

export default function Home() {
  return (
      <div>
        <NavBarLogOut></NavBarLogOut>
        <Container></Container>
      </div>
  )
}
