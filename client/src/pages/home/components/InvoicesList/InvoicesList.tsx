import {
  Container,
  InvoiceContainer,
  Date,
  Name,
  Number,
  Price,
  Status,
  StatusCircle,
  StatusText,
  Div,
} from "./InvoicesList.styled";

import { useGetDataQuery } from "../../../../redux/api/apiSlice";

export const InvoicesList = () => {
  const { data } = useGetDataQuery(undefined);

  return (
    <Container>
      {data &&
        data.map((invoice) => (
          <InvoiceContainer key={invoice._id}>
            <Div>
              <Number>#{invoice.number}</Number>
              <Date>Due 19 Aug 2021</Date>
              <Price>£{invoice.price}</Price>
            </Div>
            <Div>
              <Name>{invoice.name}</Name>
              <Status>
                <StatusCircle />
                <StatusText>{invoice.status}</StatusText>
              </Status>
            </Div>
          </InvoiceContainer>
        ))}
    </Container>
  );
};
