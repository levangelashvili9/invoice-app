import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  margin-right: 18px;
`;

export const Text = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  text-align: right;
  letter-spacing: -0.25px;

  color: ${(props) => props.theme.primaryColor};
`;

export const ChevronDownImg = styled.img`
  margin-left: 12px;

  width: 9px;
  height: 5px;
`;

export const FilterMenu = styled.div`
  position: absolute;
  top: 36px;
  left: -20px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 16px;

  background: ${(props) => props.theme.filterMenuColor};
  box-shadow: ${(props) => props.theme.filterMenuCBoxShadow};
  border-radius: 8px;
`;

export const FilterItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CheckBox = styled.div`
  width: 16px;
  height: 16px;

  background: ${(props) => props.theme.checkBoxColor};
  border-radius: 2px;

  cursor: pointer;

  &:hover {
    border: 1px solid #7c5dfa;
  }
`;

export const FilterText = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;

  letter-spacing: -0.25px;

  color: ${(props) => props.theme.primaryColor};
`;
