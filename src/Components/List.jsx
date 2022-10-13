import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../redux/modules/todos";
import { Link } from "react-router-dom";

const List = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const DeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const ToggleTodo = (id) => {
    dispatch(editTodo(id));
  };

  return (
    <StyleList>
      <h2>-----------Working------------</h2>
      <StyleListWrap>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <StyleTodoContainer key={todo.id}>
                <StyleLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StyleLink>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.content}</div>
                </div>
                <ButtonGroup>
                  <StyleButton
                    borderColor="red"
                    onClick={() => DeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StyleButton>
                  <StyleButton
                    borderColor="green"
                    onClick={() => ToggleTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StyleButton>
                </ButtonGroup>
              </StyleTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StyleListWrap>
      <h2>-------------Done-------------</h2>
      <StyleListWrap>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <StyleTodoContainer key={todo.id}>
                <StyleLink to={`/${todo.id}`} key={todo.id}>
                  <div>상세보기</div>
                </StyleLink>
                <div>
                  <h2>{todo.title}</h2>
                  <div>{todo.content}</div>
                </div>
                <ButtonGroup>
                  <StyleButton
                    borderColor="red"
                    onClick={() => DeleteTodo(todo.id)}
                  >
                    삭제하기
                  </StyleButton>
                  <StyleButton
                    borderColor="green"
                    onClick={() => ToggleTodo(todo.id)}
                  >
                    {todo.isDone ? "취소!" : "완료!"}
                  </StyleButton>
                </ButtonGroup>
              </StyleTodoContainer>
            );
          } else {
            return null;
          }
        })}
      </StyleListWrap>
    </StyleList>
  );
};
export default List;

const StyleList = styled.div`
  padding: 0 24px;
`;

const StyleListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const StyleTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 150px;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px;
  gap: 12px;
`;

const StyleButton = styled.button`
  border: 2px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

const StyleLink = styled(Link)`
  text-decoration: none;
`;
