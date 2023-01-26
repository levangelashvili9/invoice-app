import styled from "styled-components";

export const Container = styled.div`
  width: 90px;
  height: 44px;

  display: flex;
  align-items: center;
  gap: 8px;

  margin-left: 18px;
  padding: 0 6px;

  background: #7c5dfa;
  border-radius: 24px;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    background: #9277ff;
  }

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 48px;
    gap: 16px;
    padding: 0 8px;
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #ffffff;
`;
