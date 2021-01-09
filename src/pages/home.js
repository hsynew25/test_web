import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import Header from "../components/header";
import Loader from "../components/loader";
import { useGetMyProfile } from "../hooks/useGetMyProfile";
import { useGetToken } from "../hooks/useGetToken";
import { useLogin } from "../hooks/useLogin";
import { useAxios } from "../hooks/useAxios";
import { contentApi } from "../api";

const Container = styled.div`
  padding: 20px 15px;

  @media screen and (min-width: 768px) {
    padding: 10px 34px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 768px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    width: 1012px;
  }
`;

const Home = () => {
  const { access_token } = useGetToken();
  const { isLogin } = useLogin(access_token);

  const {
    myProfile: { nickname, profileImg },
  } = useGetMyProfile(access_token, isLogin);

  const { loading, error, data } = useAxios(contentApi.getRandom, 8);

  if (error) {
    console.log(error.response);
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <Header isLogin={isLogin} nickname={nickname} profileImg={profileImg} />
      <Container>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </Container>
    </>
  );
};

export default Home;
