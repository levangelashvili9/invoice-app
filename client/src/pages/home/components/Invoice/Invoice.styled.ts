import styled from "styled-components";

export const Container = styled.div`
  padding: 24px;

  background: ${(props) => props.theme.InvoiceBgColor};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
`;

export const Number = styled.p`
  margin-bottom: 24px;
  color: ${(props) => props.theme.primaryColor};
`;

export const Name = styled.p`
  margin-bottom: 24px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const Date = styled.p`
  margin-bottom: 8px;
  color: ${(props) => props.theme.secondaryColor};
`;

export const Price = styled.p`
  color: ${(props) => props.theme.primaryColor};
`;

export const Status = styled.div`
  height: 40px;
  padding: 0 30px;

  display: flex;
  align-items: center;
  gap: 8px;

  background: rgba(51, 214, 160, 0.062);
  border-radius: 6px;
`;

export const StatusCircle = styled.div`
  border-radius: 50%;
  height: 8px;
  width: 8px;

  background: #33d69f;
`;

export const StatusText = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #33d69f;
`;
