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
  const { data } = useGetDataQuery();

  return (
    <Container>
      {data &&
        data.map((invoice) => (
          <InvoiceContainer key={invoice._id}>
            <Div>
              <Number>#{invoice._id}</Number>
              <Date>Due 19 Aug 2021</Date>
              <Price>£{invoice.items[0].price}</Price>
            </Div>
            <Div>
              <Name>{invoice.nameTo}</Name>
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
