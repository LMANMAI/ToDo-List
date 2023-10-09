import React from "react";
import { Container, SideBar } from "./auxiliars";
import { DashboardContainer } from "./styles";

const DashboardPage = () => {
  return (
    <DashboardContainer>
      <SideBar />
      <Container />
    </DashboardContainer>
  );
};

export default DashboardPage;
