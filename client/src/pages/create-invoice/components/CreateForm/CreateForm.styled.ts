import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FormSectionHeading = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #7c5dfa;
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const DoubleFormElement = styled.div`
  display: flex;
  gap: 23px;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #7e88c3;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;
  padding: 0 20px;
  border-radius: 4px;

  border: ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.primaryColor};

  &:focus {
    outline: none;
  }
`;

export const Select = styled.select`
  width: 100%;
  height: 48px;
  padding: 0 20px;
  border-radius: 4px;

  border: ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.inputColor};
  color: ${({ theme }) => theme.primaryColor};

  &:focus {
    outline: none;
  }
`;

export const Option = styled.option`
  font-size: 18px;
`;

export const ItemsList = styled.div`
  margin-top: 26px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ItemsListHeading = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;

  letter-spacing: -0.375px;

  color: #777f98;
`;

export const ItemElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DoubleItemInput = styled.div`
  display: grid;
  grid-template-columns: 64fr 100fr;
  grid-gap: 16px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 180fr 110fr;
  grid-gap: 16px;

  margin-bottom: 24px;
`;

export const Total = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;
  margin-top: 20px;

  color: #888eb0;
`;

export const DeleteItemImg = styled.div`
  padding-top: 42px;
  padding-right: 5px;
`;

export const AddNewItem = styled.button`
  height: 48px;
  background: ${({ theme }) => theme.thirdButtonColor};
  border-radius: 24px;
  border: none;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.25px;

  color: ${({ theme }) => theme.formLabelColor};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.thirdButtonHoverColor};
  }
`;

export const FormButtons = styled.div`
  display: grid;
  grid-template-columns: 84fr 117fr 112fr;
  grid-gap: 7px;

  margin-bottom: 22px;
`;

const FormButton = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 24px;
  border: none;
  cursor: pointer;
`;

export const DiscardButton = styled(FormButton)`
  background: ${({ theme }) => theme.thirdButtonColor};

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #7e88c3;

  &:hover {
    background: ${({ theme }) => theme.thirdButtonHoverColor};
  }
`;

export const DraftButton = styled(FormButton)`
  background: #373b53;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #888eb0;

  &:hover {
    background: ${({ theme }) => theme.fourthButtonHoverColor};
  }
`;

export const SaveButton = styled(FormButton)`
  background: #7c5dfa;

  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: #ffffff;

  &:hover {
    background: #9277ff;
  }
`;
