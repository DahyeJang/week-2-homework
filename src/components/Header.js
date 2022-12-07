import React from "react";
import styled from "styled-components";

const StHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid #ddd;
  padding: 0 20px;
`;

function Header() {
  return (
    <StHeader className="App-header">
      <div>My Todo List</div>
      <div>React</div>
    </StHeader>
  );
}

export default Header;
