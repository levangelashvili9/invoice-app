import { Container, Text } from "./AddInvoice.styled";
import AddSVG from "../../../../assets/svg/add.svg";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../../../../common/hooks/useWindowSize";

export const AddInvoice = () => {
  const navigate = useNavigate();

  const { width } = useWindowSize();

  return (
    <Container onClick={() => navigate("/create-invoice")}>
      <img src={AddSVG} alt="" />
      <Text>{width > 768 ? "New Invoice" : "New"}</Text>
    </Container>
  );
};
