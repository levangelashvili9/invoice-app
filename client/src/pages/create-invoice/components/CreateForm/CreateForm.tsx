import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm, useFieldArray } from "react-hook-form";
import { useAddInvoiceMutation } from "../../../../redux/api/apiSlice";

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
  Select,
  Option,
} from "./CreateForm.styled";

import DeleteItemSVG from "../../../../assets/svg/delete-item.svg";

const Schema = z.object({
  addressFrom: z.string().min(1),
  cityFrom: z.string().min(1),
  postCodeFrom: z.number().min(999),
  countryFrom: z.string().min(1),
  nameTo: z.string().min(1),
  emailTo: z.string().min(1),
  addressTo: z.string().min(1),
  cityTo: z.string().min(1),
  postCodeTo: z.number().min(999),
  countryTo: z.string().min(1),
  date: z.date(),
  paymentTerms: z.string().min(1),
  description: z.string().min(1),
  items: z.array(
    z.object({
      itemName: z.string().min(1),
      quantity: z.number().positive(),
      price: z.number().positive(),
    })
  ),
});

type FormTypes = z.infer<typeof Schema>;

export const CreateForm = () => {
  const [addInvoice] = useAddInvoiceMutation();

  const { register, handleSubmit, reset, control } = useForm<FormTypes>({
    resolver: zodResolver(Schema),
    defaultValues: {
      items: [{ itemName: "", quantity: 0, price: 0 }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    name: "items",
    control,
  });

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    reset();
    addInvoice({ ...data, status: "Pending" });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormSection>
        <FormSectionHeading>Bill From</FormSectionHeading>
        <FormElement>
          <Label>Street Address</Label>
          <Input {...register("addressFrom")} />
        </FormElement>
        <DoubleFormElement>
          <FormElement>
            <Label>City</Label>
            <Input {...register("cityFrom")} />
          </FormElement>
          <FormElement>
            <Label>Post Code</Label>
            <Input
              type="number"
              {...register("postCodeFrom", { valueAsNumber: true })}
            />
          </FormElement>
        </DoubleFormElement>
        <FormElement>
          <Label>Country</Label>
          <Input {...register("countryFrom")} />
        </FormElement>
      </FormSection>
      <FormSection>
        <FormSectionHeading>Bill To</FormSectionHeading>
        <FormElement>
          <Label>Client’s Name</Label>
          <Input {...register("nameTo")} />
        </FormElement>
        <FormElement>
          <Label>Client’s Email</Label>
          <Input {...register("emailTo")} />
        </FormElement>
        <FormElement>
          <Label>Street Address</Label>
          <Input {...register("addressTo")} />
        </FormElement>
        <DoubleFormElement>
          <FormElement>
            <Label>City</Label>
            <Input {...register("cityTo")} />
          </FormElement>
          <FormElement>
            <Label>Post Code</Label>
            <Input
              type="number"
              {...register("postCodeTo", { valueAsNumber: true })}
            />
          </FormElement>
        </DoubleFormElement>
        <FormElement>
          <Label>Country</Label>
          <Input {...register("countryTo")} />
        </FormElement>
        <FormElement>
          <Label>Invoice Date</Label>
          <Input type="date" {...register("date", { valueAsDate: true })} />
        </FormElement>
        <FormElement>
          <Label>Payment Terms</Label>
          <Select {...register("paymentTerms")}>
            <Option value="">Select...</Option>
            <Option value="Net 1 day">Net 1 day</Option>
            <Option value="Net 7 days">Net 7 days</Option>
            <Option value="Net 14 days">Net 14 days</Option>
            <Option value="Net 30 days">Net 30 days</Option>
          </Select>
        </FormElement>
        <FormElement>
          <Label>Project Description</Label>
          <Input {...register("description")} />
        </FormElement>
      </FormSection>

      <ItemsList>
        <ItemsListHeading>Item List</ItemsListHeading>
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <ItemElement>
              <Label>Item Name</Label>
              <Input {...register(`items.${index}.itemName`)} />
            </ItemElement>
            <GridDiv>
              <DoubleItemInput>
                <ItemElement>
                  <Label>Qty.</Label>
                  <Input
                    {...register(`items.${index}.quantity`, {
                      valueAsNumber: true,
                    })}
                  />
                </ItemElement>
                <ItemElement>
                  <Label>Price</Label>
                  <Input
                    {...register(`items.${index}.price`, {
                      valueAsNumber: true,
                    })}
                  />
                </ItemElement>
              </DoubleItemInput>
              <FlexDiv>
                <ItemElement>
                  <Label>Total</Label>
                  <Total>400</Total>
                </ItemElement>
                <DeleteItemImg onClick={() => remove(index)}>
                  <img src={DeleteItemSVG} alt="" />
                </DeleteItemImg>
              </FlexDiv>
            </GridDiv>
          </React.Fragment>
        ))}
        <AddNewItem
          type="button"
          onClick={() =>
            append({
              itemName: "",
              quantity: 0,
              price: 0,
            })
          }
        >
          + Add New Item
        </AddNewItem>
      </ItemsList>
      <FormButtons>
        <DiscardButton>Discard</DiscardButton>
        <DraftButton>Save as Draft</DraftButton>
        <SaveButton type="submit">Save & Send</SaveButton>
      </FormButtons>
    </Form>
  );
};
