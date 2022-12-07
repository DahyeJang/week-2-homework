import React, { useState } from "react";
import { addTodo } from "../redux/modules/todos";

import styled from "styled-components";
import { useDispatch } from "react-redux";

//id를 랜덤하게 생성해주는 라이브러리 임포트
import nextId from "react-id-generator";

const StForm = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 12px;
  align-items: center;
  padding: 30px;
  background-color: #eee;
`;

const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 700;
`;

const StInput = styled.input`
  border-radius: 12px;
  border: none;
  width: 240px;
  height: 40px;
`;

const StBtn = styled.button`
  background-color: teal;
  width: 140px;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: white;
  font-weight: 700;
`;

function AddForm() {
  //todo 만드는 명령을 보내줘야 하므로
  const dispatch = useDispatch();

  //기본 todo useState 생성. useState의 역할을 redux가 하고있기 때문에 없어도 됌
  //전역상태관리가 필요 없는 것은 useState로 관리.
  // const [todos, setTodos] = useState({
  //   id: 0,
  //   title: "",
  //   body: "",
  //   isDone: false,
  // });

  //제목과 내용을 담을 useState를 만든다
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //todo 추가하기 핸들러
  const onSubmitHandler = (e) => {
    //e.preventDefault(); //새로고침을 안하게 해주는
    if (title === "" || body === "") return;
    // 아무것도 입력하지 않았을 때 dispatch 하지 않음

    dispatch(
      addTodo({
        id: nextId(), //id랜덤생성 라이브러리 사용
        title,
        body,
        isDone: false,
      })
    );

    setTitle("");
    setBody("");
  };

  return (
    <StForm>
      <StInputGroup>
        제목
        <StInput
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        ></StInput>
        내용
        <StInput
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></StInput>
      </StInputGroup>
      <StBtn onClick={onSubmitHandler}>추가하기</StBtn>
    </StForm>
  );
}

export default AddForm;
