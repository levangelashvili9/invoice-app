import {
  Form,
  FormSection,
  FormSectionHeading,
  FormElement,
  DoubleFormElement,
  Label,
  Input,
  ItemsList,
  ItemsListHeading,
  ItemElement,
  DoubleItemInput,
  Total,
  FlexDiv,
  GridDiv,
  DeleteItemImg,
  AddNewItem,
  FormButtons,
  DiscardButton,
  DraftButton,
  SaveButton,
} from "./CreateForm.styled";

import DeleteItemSVG from "../../../../assets/svg/delete-item.svg";

export const CreateForm = () => {
  return (
    <Form>
      <FormSection>
        <FormSectionHeading>Bill From</FormSectionHeading>
        <FormElement>
          <Label>Street Address</Label>
          <Input />
        </FormElement>
        <DoubleFormElement>
          <FormElement>
            <Label>City</Label>
            <Input />
          </FormElement>
          <FormElement>
            <Label>Post Code</Label>
            <Input />
          </FormElement>
        </DoubleFormElement>
        <FormElement>
          <Label>Country</Label>
          <Input />
        </FormElement>
      </FormSection>
      <FormSection>
        <FormSectionHeading>Bill To</FormSectionHeading>
        <FormElement>
          <Label>Client’s Name</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Client’s Email</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Street Address</Label>
          <Input />
        </FormElement>
        <DoubleFormElement>
          <FormElement>
            <Label>City</Label>
            <Input />
          </FormElement>
          <FormElement>
            <Label>Post Code</Label>
            <Input />
          </FormElement>
        </DoubleFormElement>
        <FormElement>
          <Label>Country</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Invoice Date</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Payment Terms</Label>
          <Input />
        </FormElement>
        <FormElement>
          <Label>Project Description</Label>
          <Input />
        </FormElement>
      </FormSection>

      <ItemsList>
        <ItemsListHeading>Item List</ItemsListHeading>
        <ItemElement>
          <Label>Item Name</Label>
          <Input />
        </ItemElement>
        <GridDiv>
          <DoubleItemInput>
            <ItemElement>
              <Label>Qty.</Label>
              <Input />
            </ItemElement>
            <ItemElement>
              <Label>Price</Label>
              <Input />
            </ItemElement>
          </DoubleItemInput>
          <FlexDiv>
            <ItemElement>
              <Label>Total</Label>
              <Total>400</Total>
            </ItemElement>
            <DeleteItemImg>
              <img src={DeleteItemSVG} alt="" />
            </DeleteItemImg>
          </FlexDiv>
        </GridDiv>
        <GridDiv>
          <DoubleItemInput>
            <ItemElement>
              <Label>Qty.</Label>
              <Input />
            </ItemElement>
            <ItemElement>
              <Label>Price</Label>
              <Input />
            </ItemElement>
          </DoubleItemInput>
          <FlexDiv>
            <ItemElement>
              <Label>Total</Label>
              <Total>400</Total>
            </ItemElement>
            <DeleteItemImg>
              <img src={DeleteItemSVG} alt="" />
            </DeleteItemImg>
          </FlexDiv>
        </GridDiv>
        <AddNewItem>+ Add New Item</AddNewItem>
      </ItemsList>
      <FormButtons>
        <DiscardButton>Discard</DiscardButton>
        <DraftButton>Save as Draft</DraftButton>
        <SaveButton>Save & Send</SaveButton>
      </FormButtons>
    </Form>
  );
};
