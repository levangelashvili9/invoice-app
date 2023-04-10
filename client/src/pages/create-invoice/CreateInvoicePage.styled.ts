import styled from "styled-components";

export const Container = styled.section`
  padding: 0 80px;
  margin-top: 106px;

  @media screen and (min-width: 768px) {
    margin-top: 136px;
    padding: 0 150px;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 72px;
    padding: 0 300px;
  }
`;

export const GoBack = styled.div`
  display: flex;
  gap: 23px;

  margin-bottom: 24px;
  cursor: pointer;
`;

export const GoBackText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.primaryColor};
`;

export const Heading = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;

  letter-spacing: -0.5px;
  margin-bottom: 24px;

  color: ${({ theme }) => theme.primaryColor};
`;
