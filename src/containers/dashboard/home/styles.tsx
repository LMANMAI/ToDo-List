import styled from "@emotion/styled";

export const HomeContainer = styled.section`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  .home__title {
    width: 48%;
    min-width: 300px;
    background: #3e7ec3;
    text-align: center;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
  .home__content {
    width: 100%;
    padding: 0px 15px;
  }
  .home__item {
    width: 100%;
    border: 1px solid;
    margin: 10px 0px;
    border: 1px solid #3e7ec3;
    text-align: center;
    background: #699bd063;
    border-radius: 5px;
    min-height: 70px;
    color: #3e7ec3;
    padding: 10px;
    ul {
      text-indent: 10px;
      text-align: start;
    }
  }

  @media (min-width: 680px) {
    .home__content {
      width: 50%;
      min-width: 600px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }
    .home__item {
      margin: 0px;
    }
  }
`;
