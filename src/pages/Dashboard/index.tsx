import React from "react";
import { Container, SideBar } from "./auxiliars";
import { DashboardContainer } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import { BackgroundUI } from "../../containers/dashboard/detailproyect/auxiliars/styles";
import { setBgUi, setEditMode } from "../../redux/slices/ui";
import { RootState } from "../../redux/store";
const DashboardPage = () => {
  const dispatch = useDispatch();
  const bg_position = useSelector((state: RootState) => state.ui.logoutmode);
  return (
    <DashboardContainer>
      <SideBar />
      <Container />
    </DashboardContainer>
  );
};

export default DashboardPage;
