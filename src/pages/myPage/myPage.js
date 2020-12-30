import React from "react";
import styled from "styled-components";
import MyProfile from "./myProfile/myProfile";
import MySetting from "./mySetting/mySetting";

const Container = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
`;

const List = styled.ul`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: space-evenly;
`;

const Item = styled.li`
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  padding: 14px 20px;
  color: ${(props) => (props.active ? "#2f2f2f" : "#72787f")};
`;

const MyPage = () => {
  return (
    <Container>
      <List>
        <Item active={true}>프로필</Item>
        <Item>설정</Item>
      </List>
      {/* <MyProfile /> */}
      <MySetting />
    </Container>
  );
};

export default MyPage;
