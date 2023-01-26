import {
  Container,
  Header,
  Heading,
  NumOfInvoices,
  Div,
  Empty,
  EmailImg,
  EmptyHeading,
  EmptyText,
} from "./HomePage.styled";

import EmailSVG from "../../assets/svg/email.svg";

import { Filter } from "./components/Filter";
import { AddInvoice } from "./components/AddInvoice";
import { InvoicesList } from "./components/InvoicesList";
import { useState } from "react";
import { useGetDataQuery } from "../../redux/api/apiSlice";

export const HomePage = () => {
  const { data } = useGetDataQuery(undefined);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  return (
    <Container>
      <Header>
        <div>
          <Heading>Invoices</Heading>
          <NumOfInvoices>
            {data && data.length > 0
              ? `There are ${data.length} pending invoices`
              : "No invoices"}
          </NumOfInvoices>
        </div>
        <Div>
          <Filter />
          <AddInvoice />
        </Div>
      </Header>
      {isEmpty ? (
        <Empty>
          <EmailImg>
            <img src={EmailSVG} alt="" />
          </EmailImg>
          <EmptyHeading>There is nothing here</EmptyHeading>
          <EmptyText>
            Create an invoice by clicking the New button and get started
          </EmptyText>
        </Empty>
      ) : (
        <InvoicesList />
      )}
    </Container>
  );
};
