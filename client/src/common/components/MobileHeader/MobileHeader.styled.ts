import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 72px;

  display: flex;
  justify-content: space-between;

  margin-bottom: 34px;

  background: ${(props) => props.theme.header};
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const User = styled.div`
  width: 80px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  border-left: 1px solid #494e6e;
`;

export const ThemeChangerButtom = styled.img`
  width: 24px;
  height: 24px;

  margin-right: 24px;

  cursor: pointer;
`;
