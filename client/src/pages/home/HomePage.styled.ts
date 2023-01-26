import styled from "styled-components";

export const Container = styled.section`
  padding: 0 24px;
  margin-top: 106px;

  @media screen and (min-width: 768px) {
    margin-top: 136px;
    padding: 0 48px;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 72px;
    padding: 0 200px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Heading = styled.section`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;

  color: ${(props) => props.theme.primaryColor};

  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 36px;

    letter-spacing: -1px;
  }
`;

export const NumOfInvoices = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: ${(props) => props.theme.secondaryColor};
`;

export const Div = styled.div`
  display: flex;
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;

  @media screen and (min-width: 768px) {
    margin-top: 210px;
  }
`;

export const EmailImg = styled.div`
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-bottom: 64px;
  }
`;

export const EmptyHeading = styled.h2`
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.625px;

  margin-bottom: 24px;

  color: ${(props) => props.theme.primaryColor};
`;

export const EmptyText = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.25px;

  color: ${(props) => props.theme.secondaryColor};
`;
