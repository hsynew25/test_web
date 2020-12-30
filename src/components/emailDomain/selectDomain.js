import React from "react";
import styled from "styled-components";
import arrowDown from "../../img/arrow_down.png";

const Select = styled.select`
  flex: 1;
  padding: 10px 6px;
  border: 1px solid #bfbfbf;
  background: url(${arrowDown}) no-repeat 95% 50%/10px 10px;
  background-color: #ffffff;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const Option = styled.option``;

const SelectDomain = () => {
  return (
    <Select defaultValue="default">
      <Option value="default" disabled>
        선택하세요
      </Option>
      <Option value="naver.com">naver.com</Option>
      <Option value="gmail.com">gmail.com</Option>
      <Option value="hanmail.net">hanmail.net</Option>
      <Option value="daum.net">daum.net</Option>
      <Option value="nate.com">nate.com</Option>
      <Option value="directInput">직접입력</Option>
    </Select>
  );
};

export default SelectDomain;
