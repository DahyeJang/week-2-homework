import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleStatusTodo } from "../redux/modules/todos";
import { Link, useParams } from "react-router-dom";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  //todo 삭제 핸들러
  const onDeleteTodo = (id) => {
    //console.log(id);
    dispatch(deleteTodo(id));
  };

  //todo 완료 취소 변경 핸들러
  const onToggleStatusTodo = (id) => {
    dispatch(toggleStatusTodo(id));
  };
  console.log(todos);
  const todosDone = todos.filter((todo) => todo.isDone);
  const todosWork = todos.filter((todo) => !todo.isDone);

  //console.log("todosDone:", todosDone);
  //console.log("todosWork:", todosWork);
  return (
    <StListContainer>
      <div>
        <h2>Working..🔥</h2>
        <StListWrapper>
          {todosWork.map((todo) => {
            return (
              <StTodoCard key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <p>상세보기</p>
                </StLink>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <ButtonSet>
                  <TodoButton onClick={() => onDeleteTodo(todo.id)}>
                    삭제하기
                  </TodoButton>

                  <TodoButtonTwo onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                  </TodoButtonTwo>
                </ButtonSet>
              </StTodoCard>
            );
          })}
        </StListWrapper>
      </div>
      <div>
        <h2>Done..! 🎉</h2>
        <StListWrapper>
          {todosDone.map((todo) => {
            return (
              <StTodoCard key={todo.id}>
                <StLink to={`/${todo.id}`} key={todo.id}>
                  <p>상세보기</p>
                </StLink>
                <h3>{todo.title}</h3>
                <p>{todo.body}</p>
                <ButtonSet>
                  <TodoButton onClick={() => onDeleteTodo(todo.id)}>
                    삭제하기
                  </TodoButton>

                  <TodoButtonTwo onClick={() => onToggleStatusTodo(todo.id)}>
                    {todo.isDone ? "취소" : "완료"}
                  </TodoButtonTwo>
                </ButtonSet>
              </StTodoCard>
            );
          })}
        </StListWrapper>
      </div>
    </StListContainer>
  );
};

const StListContainer = styled.div`
  padding: 0 20px;
`;

const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ButtonSet = styled.div`
  display: flex;
  margin-top: 24px;
  gap: 10px;
`;

const StTodoCard = styled.div`
  border: 4px solid teal;
  width: 270px;
  border-radius: 12px;
  padding: 12px 24px 24px;
`;

const TodoButton = styled.button`
  width: 50%;
  height: 40px;
  border: 2px solid red;
  border-radius: 8px;
  background-color: white;
`;

const TodoButtonTwo = styled.button`
  width: 50%;
  height: 40px;
  border: 2px solid green;
  border-radius: 8px;
  background-color: white;
`;

const StLink = styled(Link)`
  text-decoration: none;
`;

export default TodoList;
