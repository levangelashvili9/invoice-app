import {
  Container,
  Date,
  Name,
  Number,
  Price,
  Status,
  StatusCircle,
  StatusText,
} from "./Invoice.styled";

export const Invoice = () => {
  return (
    <Container>
      <div>
        <Number>#RT3080</Number>
        <Date>Due 19 Aug 2021</Date>
        <Price>£ 1,800.90</Price>
      </div>
      <div>
        <Name>Jensen Huang</Name>
        <Status>
          <StatusCircle />
          <StatusText>Paid</StatusText>
        </Status>
      </div>
    </Container>
  );
};
