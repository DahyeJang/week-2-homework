import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getTodoByID } from "../redux/modules/todos";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams(); //변수에 {}을 넣으면 value값만 가져올 수 있음

  //const detailTodo = todos.filter((todos) => todos.id === id);
  //console.log(detailTodo);

  useEffect(() => {
    // 이 부분이 실행된다.
    dispatch(getTodoByID(id));
  }, [dispatch, id]); //[]안에 이렇게 넣는 이유?

  const todos = useSelector((state) => state.todos.todo);

  //console.log("id:", id);
  //console.log("todos:", todos);
  return (
    <StContainer>
      <StFrame>
        <StTop>
          <span>ID : {id}</span>
          <StButton
            onClick={() => {
              navigate("/");
            }}
          >
            이전으로
          </StButton>
        </StTop>
        <h1>{todos.title}</h1>
        <p>{todos.body}</p>
      </StFrame>
    </StContainer>
  );
};

const StContainer = styled.div`
  width: 500px;
  height: 500px;
  margin: 50px auto;
  border: 2px solid #eee;
`;

const StFrame = styled.div`
  padding: 20px;
`;

const StTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StButton = styled.button`
  border: 1px solid #ddd;
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;

export default Detail;
