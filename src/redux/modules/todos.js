// Action Value
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const TOGGLE_STATUS_TODO = "TOGGLE_STATUS_TODO";
const GET_TODO_BY_ID = "GET_TODO_BY_ID";

// Action Creator
// Todo 추가
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// todo 제거
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

//완료 취소 변경
export const toggleStatusTodo = (payload) => {
  return {
    type: TOGGLE_STATUS_TODO,
    payload,
  };
};

//상세페이지 id 조회
export const getTodoByID = (payload) => {
  return {
    type: GET_TODO_BY_ID,
    payload,
  };
};

// Initial State
const initialState = {
  todos: [
    {
      id: "1", // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: true,
    },
    {
      id: "2", // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
  todo: {},
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    //todo 추가하는 리듀서
    case ADD_TODO:
      return {
        ...state, //지금까지 있었던 데이터 저장
        todos: [...state.todos, action.payload], //데이터에서 todos만 불러오고, 넘어온 데이터 추가해서 todos로 저장
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case TOGGLE_STATUS_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      };

    case GET_TODO_BY_ID:
      //console.log("state", typeof action.payload);
      return {
        ...state,
        todo: state.todos.find((todo) => {
          return todo.id === action.payload;
        }),
      };

    default:
      return state;
  }
};

export default todos;
