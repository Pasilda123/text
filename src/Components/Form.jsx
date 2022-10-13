import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos.js";

const Form = () => {
  const id = Date.now();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const onCreate = (e) => {
    e.preventDefault();
    dispatch(addTodo({ ...inputs, id }));
    setInputs({ id: 0, title: "", content: "", isDone: false });
  };

  console.log(inputs);
  return (
    <StyleAddForm>
      <StyleInputGroup>
        <StyleFormLabel>제목</StyleFormLabel>
        <StyleAddInput
          type="text"
          name="title"
          value={inputs.title}
          onChange={onChange}
          required
        />
        <StyleFormLabel>내용</StyleFormLabel>
        <StyleAddInput
          type="text"
          name="content"
          value={inputs.content}
          onChange={onChange}
          required
        />
      </StyleInputGroup>
      <StyleAddButton onClick={onCreate}>추가하기</StyleAddButton>
    </StyleAddForm>
  );
};

export default Form;

const StyleInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StyleFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StyleAddForm = styled.form`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StyleAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StyleAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
