import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;

  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;

  background: ${(props) => props.theme.header};

  @media screen and (min-width: 768px) {
    height: 80px;
  }

  @media screen and (min-width: 1080px) {
    width: 105px;
    height: 100%;
    flex-direction: column;
  }
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1080px) {
    flex-direction: column;

    gap: 50px;
    padding: 30px;
  }
`;

export const User = styled.div`
  width: 80px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid #494e6e;

  @media screen and (min-width: 768px) {
    width: 96px;
  }

  @media screen and (min-width: 1080px) {
    border-left: none;
  }
`;

export const ThemeChangerButtom = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 24px;

  cursor: pointer;

  @media screen and (min-width: 768px) {
    margin-right: 32px;
  }

  @media screen and (min-width: 1080px) {
    margin-right: 0%;
  }
`;
