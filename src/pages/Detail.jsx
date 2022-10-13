import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getId } from "../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos.todo);

  const { id } = useParams(); // useParams는 문자열로 들어옴. 해당 id를 숫자열로 바꿔주어야함.
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getId(Number(id)));
  }, [dispatch, id]);

  console.log(todo);

  return (
    <StyleContainer>
      <StyleDialog>
        <div>
          <StyleDialogHeader>
            <div>ID:{todo.id}</div>
            <Button
              onClick={() => {
                navigate("/");
              }}
            >
              뒤로 가기
            </Button>
          </StyleDialogHeader>
          <H1>{todo.title}</H1> <Content>{todo.content}</Content>
        </div>
      </StyleDialog>
    </StyleContainer>
  );
};

export default Detail;

const StyleContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyleDialog = styled.div`
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyleDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  align-items: center;
`;

const Button = styled.button`
  border: 3px solid black;
  height: 30px;
  width: 80px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const H1 = styled.h1`
  padding: 0 24px;
`;

const Content = styled.main`
  padding: 0 24px;
`;
