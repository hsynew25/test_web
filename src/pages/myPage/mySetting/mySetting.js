import React from "react";
import styled from "styled-components";
import ChangePassword from "./changePassword";
import SettingProfile from "./settingProfile";

const Container = styled.div``;

const List = styled.ul`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.li`
  cursor: pointer;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  color: ${(props) => (props.active ? "#2f2f2f" : "#72787f")};
`;

const MySetting = () => {
  return (
    <Container>
      <List>
        <Item active={true}>회원정보수정</Item>
        <Item>비밀번호 변경</Item>
      </List>
      <SettingProfile />
      {/* <ChangePassword /> */}
    </Container>
  );
};

export default MySetting;
