import styled from "@emotion/styled";
interface ISideBar {
  width?: boolean;
}
export const SideBarContainer = styled.nav<ISideBar>`
  height: 100vh;
  width: ${(props) => (props.width ? "300px" : "70px")};
  background: rgb(0, 115, 230);
  transition: all 350ms ease-in-out;
  .top_section {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    color: #fff;
    justify-content: ${(props) => (props.width ? "end" : "center")};
    margin-top: 15px;
  }
  .logo {
    display: ${(props) => (props.width ? "block" : "none")};
  }
  .bars {
    font-size: 30px;
    display: flex;
    cursor: pointer;
  }

  .link {
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 15px;
    gap: 15px;
    border: none;
    outline: none;
    background: transparent;
    cursor: pointer;
    .name {
      transition: display 460ms ease-in-out;
      transition-delay: 365ms;
      display: ${(props) => (props.width ? "block" : "none")};
    }
  }

  .icon,
  .link_text {
    font-size: 16px;
  }
  .icon {
    font-size: 30px;
  }
  .link_text {
  }
`;
