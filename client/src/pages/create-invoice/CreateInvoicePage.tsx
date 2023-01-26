import {
  Container,
  GoBack,
  GoBackText,
  Heading,
} from "./CreateInvoicePage.styled";

import { useNavigate } from "react-router-dom";
import ChevronLeft from "../../assets/svg/chevron-left.svg";

import { CreateForm } from "./components/CreateForm";

export const CreateInvoicePage = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <GoBack onClick={() => navigate("/")}>
        <img src={ChevronLeft} alt="" />
        <GoBackText>Go back</GoBackText>
      </GoBack>
      <Heading>New Invoice</Heading>
      <CreateForm />
    </Container>
  );
};
