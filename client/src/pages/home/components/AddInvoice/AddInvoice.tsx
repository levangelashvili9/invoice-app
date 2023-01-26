import { Container, Text } from "./AddInvoice.styled";
import AddSVG from "../../../../assets/svg/add.svg";

export const AddInvoice = () => {
  return (
    <Container>
      <img src={AddSVG} alt="" />
      <Text>New</Text>
    </Container>
  );
};
