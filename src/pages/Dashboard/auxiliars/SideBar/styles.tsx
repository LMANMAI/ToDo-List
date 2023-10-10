import styled from "@emotion/styled";
interface ISideBar {
  width?: boolean;
}
export const SideBarContainer = styled.nav<ISideBar>`
  height: 100vh;
  width: ${(props) => (props.width ? "300px" : "70px")};
  background: #3e7ec3;
  transition: all 350ms ease-in-out;
  position: relative;
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
  .bottom__section {
    position: relative;
    bottom: -45vh;
    .p8 {
      padding: 10px 8px;
    }
    padding: 12px;
    transition: all 350ms ease-in-out;
    width: ${(props) => (props.width ? "237.02px" : "65.91px")};
    .user_info {
      border-radius: 5px;
      background: #699bd0;
      overflow: hidden;
    }
    .name {
      font-size: 13px;
    }
  }
`;
