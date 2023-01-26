import { Container, Text } from "./AddInvoice.styled";
import AddSVG from "../../../../assets/svg/add.svg";
import { useNavigate } from "react-router-dom";

export const AddInvoice = () => {
  const navigate = useNavigate();

  return (
    <Container onClick={() => navigate("/create-invoice")}>
      <img src={AddSVG} alt="" />
      <Text>New</Text>
    </Container>
  );
};
