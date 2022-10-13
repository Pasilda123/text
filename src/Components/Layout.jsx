import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <StyleLayout>{children}</StyleLayout>;
};

export default Layout;

const StyleLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
