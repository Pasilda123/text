import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StyleHeader>
      <div>My Todo List</div>
      <div>React</div>
    </StyleHeader>
  );
};

export default Header;

const StyleHeader = styled.div`
  border: 1px solid #ddd;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 24px;
`;
