import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Sliders from "../components/slider/sliders";
import CommentList from "../components/comment/commentList";
import WritingComment from "../components/comment/writingComment";
import Header from "../components/header";
import { useGetToken } from "../hooks/useGetToken";
import { useLogin } from "../hooks/useLogin";
import { useGetMyProfile } from "../hooks/useGetMyProfile";
import * as Scroll from "react-scroll";

import fillHeart from "../img/Icon/fill heart.png";
import emptyHeart from "../img/Icon/empty heart.png";
import commentIcon from "../img/Icon/chat speak.png";
import basicProfile from "../img/Icon/profile user.png";
import moreIcon from "../img/Icon/dot more.png";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";
import { useConfirm } from "../hooks/useConfirm";
import Loader from "../components/loader";
import { contentApi } from "../api";
import { useAxios } from "../hooks/useAxios";
import NotFound from "./404";
import { Link } from "react-router-dom";

const Container = styled.div`
  @media screen and (min-width: 768px) {
    padding: 0 40px;
  }
  @media screen and (min-width: 1024px) {
    position: relative;
    padding: 0;
    max-width: 944px;
    margin: 50px auto;
  }
`;

const Headers = styled.div`
  display: flex;
  padding: 10px;
  position: relative;
  @media screen and (min-width: 768px) {
    padding: 30px 0;
    border-bottom: 1px solid #d0d0d0;
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    border-bottom: 0;
    border-top: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
  }
`;

const MoreButton = styled.button`
  display: ${(props) => (props.isShow ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 60px;
  background: url(${moreIcon}) no-repeat 14px 19px/22px 22px;

  @media screen and (min-width: 768px) {
    height: 110px;
    background: url(${moreIcon}) no-repeat 14px 44px/22px 22px;
  }
`;

const SliderWrap = styled.div`
  @media screen and (min-width: 768px) {
    margin: 30px 0;
  }
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 0;
    right: 0;
    width: 600px;
    margin: 0;
  }
`;

const ImgWrap = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: url(${basicProfile}) #d2d2d2 no-repeat 5px 5px/30px 30px;

  @media screen and (min-width: 768px) {
    width: 50px;
    height: 50px;
    background: url(${basicProfile}) #d2d2d2 no-repeat 8px 8px/34px 34px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const WriterWrap = styled.div`
  margin-left: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Nickname = styled.div`
  font-size: 15px;
  line-height: 18px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    line-height: 20px;
  }
`;

const Occupation = styled.div`
  font-size: 12px;
  line-height: 14px;
  color: #757575;

  @media screen and (min-width: 768px) {
    line-height: 16px;
  }
`;

const BottomWrap = styled.div`
  @media screen and (min-width: 1024px) {
    position: absolute;
    top: 650px;
    right: 0;
    width: 600px;
  }
`;

const ButtonWrap = styled.div``;

const Button = styled.button`
  background: url(${(props) => (props.clicked ? fillHeart : emptyHeart)})
    no-repeat 5px 5px/30px 30px;
  width: 40px;
  height: 40px;
  vertical-align: top;
`;

const Comment = styled.span`
  display: inline-block;
  background: url(${commentIcon}) no-repeat 5px 5px/30px 30px;
  width: 40px;
  height: 40px;
  vertical-align: top;
`;

const StyleScroll = {
  display: "inline-block",
  width: "40px",
  height: "40px",
  verticalAlign: "top",
};

const Description = styled.p`
  padding: 10px;
  word-break: break-word;
  font-size: 15px;
`;

const CountWrap = styled.div`
  display: flex;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding-bottom: 30px;
  }
`;

const CounteTitle = styled.div`
  font-size: 15px;
  color: #757575;
  &:not(:first-child) {
    margin-left: 10px;
  }

  span {
    font-weight: 500;
  }
`;

const CommentWrap = styled.div`
  @media screen and (min-width: 768px) {
    padding: 30px 0;
    border-top: 1px solid #d0d0d0;
  }
`;

const CommentTitle = styled.h2`
  display: none;
  font-size: 18px;
  font-weight: 500;
  margin: 0 10px 20px;

  span {
    color: #77c4a3;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Dropdown = styled.ul`
  z-index: 100;
  box-shadow: 0 0 5px #d2d2d2;
  position: absolute;
  top: 110px;
  right: 0;
  width: 100px;
  background-color: #fff;
  display: ${(props) => (props.open ? "block" : "none")};

  @media screen and (min-width: 768px) {
    top: 160px;
    right: 40px;
  }
  @media screen and (min-width: 1024px) {
    right: unset;
    left: 200px;
    top: 80px;
    position: absolute;
  }
`;

const MenuItem = styled.li`
  width: 100%;
  &:not(:first-child) {
    border-top: 1px solid #d2d2d2;
  }
  &:hover {
    background-color: #77c4a3;
  }
`;

const ItemButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  font-size: 14px;
  line-height: 18px;
`;

const SLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  font-size: 14px;
  text-align: center;
  line-height: 18px;
`;

const ContentDetail = ({ history, match }) => {
  const { access_token } = useGetToken();
  const { isLogin } = useLogin(access_token);
  const {
    myProfile: { username, nickname, profileImg },
  } = useGetMyProfile(access_token, isLogin);
  const dropdownRef = useRef();
  const [isLike, setIsLike] = useState(false);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const [comments, setComments] = useState([]);

  const { loading, data: item, error } = useAxios(
    contentApi.getContent,
    match.params.id
  );

  const showMenu = () => {
    setIsActive(!isActive);
  };

  const handleDeleteContent = async () => {
    console.log("삭제");
    try {
      const response = await contentApi.deleteContent(access_token, item.id);

      if (response.status === 200) {
        alert("삭제되었습니다😇");
        history.push("/mypage");
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  const confirmDeleteContent = useConfirm(
    "이 게시글을 삭제하시겠습니까 ?",
    handleDeleteContent,
    () => console.log("취소")
  );

  return loading ? (
    <Loader />
  ) : error ? (
    <NotFound error={error} />
  ) : (
    <>
      <Header isLogin={isLogin} nickname={nickname} profileImg={profileImg} />
      <Container>
        <Headers>
          <ImgWrap>
            <Img src={null} />
          </ImgWrap>
          <WriterWrap>
            <Nickname>{item.user.username}</Nickname>
            <Occupation>{item.user.job}</Occupation>
          </WriterWrap>
          <MoreButton
            onClick={showMenu}
            isShow={username === item.user.username}
          />
        </Headers>
        <Dropdown ref={dropdownRef} open={isActive}>
          <MenuItem>
            <SLink
              to={{
                pathname: `/contents/update/${match.params.id}`,
                state: { item },
              }}
            >
              수정
            </SLink>
          </MenuItem>
          <MenuItem>
            <ItemButton onClick={confirmDeleteContent}>삭제</ItemButton>
          </MenuItem>
        </Dropdown>
        <SliderWrap>
          <Sliders images={item.images} />
        </SliderWrap>
        <BottomWrap>
          <ButtonWrap>
            <Button clicked={isLike} onClick={() => setIsLike(!isLike)} />
            <Scroll.Link
              activeClass="active"
              to="comments"
              spy={true}
              smooth={true}
              duration={500}
              style={StyleScroll}
            >
              <Comment />
            </Scroll.Link>
          </ButtonWrap>
          <Description>{item.description}</Description>
          <CountWrap>
            <CounteTitle>
              좋아요 <span>1334</span>개
            </CounteTitle>
            <CounteTitle>
              댓글 <span>678</span>개
            </CounteTitle>
            <CounteTitle>
              조회수 <span>9301</span>회
            </CounteTitle>
          </CountWrap>
          <CommentWrap>
            <Scroll.Element name="comments">
              <CommentTitle>
                댓글&nbsp;<span>{comments && comments.length}</span>
              </CommentTitle>
              <WritingComment
                contentId={item.id}
                accessToken={access_token}
                comments={comments}
                setComments={setComments}
                profileImg={profileImg}
              />
              <CommentList
                contentId={item.id}
                comments={comments}
                setComments={setComments}
                accessToken={access_token}
                profileImg={profileImg}
              />
            </Scroll.Element>
          </CommentWrap>
        </BottomWrap>
      </Container>
    </>
  );
};

export default ContentDetail;
