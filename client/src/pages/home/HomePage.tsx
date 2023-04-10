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
import { useGetDataQuery } from "../../redux/api/apiSlice";

export const HomePage = () => {
  const { data } = useGetDataQuery();

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
      {data && data.length === 0 ? (
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
