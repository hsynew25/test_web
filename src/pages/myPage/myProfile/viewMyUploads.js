import React from "react";
import styled from "styled-components";
import { contentApi } from "../../../api";
import Loader from "../../../components/loader";
import SquareImg from "../../../components/squareImg";
import { useAxios } from "../../../hooks/useAxios";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 2px;

  @media screen and (min-width: 768px) {
    padding: 3px;
  }
`;

const ViewMyUploads = ({ accessToken }) => {
  const { loading, data, error } = useAxios(contentApi.getMe, accessToken);
  if (error) {
    console.log(error);
  }
  return loading ? (
    <Loader />
  ) : (
    <Container>
      {data.map((item) => (
        <SquareImg key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default ViewMyUploads;
