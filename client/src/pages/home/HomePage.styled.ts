import styled from "styled-components";

export const Container = styled.section`
  padding: 0 24px;
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
`;

export const EmailImg = styled.div`
  margin-bottom: 40px;
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
