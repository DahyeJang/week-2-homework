# [항해 4주차] 리액트 숙련 - todoList 만들기

## Goal
My Todo List 만들기

[React 입문 주차 개인 과제](https://www.notion.so/React-f8cb108d179d4c06978bc4d8579e1fec) 를 `react-router-dom`, `styled-components`, `redux`를 사용해서 My Todo List 를 다시 만들어봅니다.

## features : 구현 기능

- Create Todo : 투두 만들기 
- Read Todos, Todo : 투두 목록, 상세페이지 읽기
- Update Todo : 투두 업데이트(완료, 취소)
- Delete Todo : 투두 삭제

## Requirement : 요구 사항

### 공통
- todos 데이터는 리덕스를 사용해서 전역으로 상태를 관리합니다.
- todos 모듈은 `Ducks 패턴`으로 구현합니다.

### 메인 페이지
- **디자인과 화면 구성은 자유롭게 구현합니다.**
- **Todo의 상태에 “완료” 그룹과 “진행중" 그룹을 나뉘어서 보이도록 구현**합니다.
- **Todo를 추가하면  제목 `input`과 내용 `input`은 다시 빈 값이 되도록 구현**합니다.
- Todo의 완료상태가 `true`이면,상태 버튼의 라벨을 “취소”,  `false` 이면 라벨을 “완료” 로 보이도록 구현합니다.
- 전체 화면의 **최대 넓이는 `1200px`, 최소 넓이는 `800px`로 제한**하고, **컨텐츠를 화면의 가운데로 배치** 합니다.
#### 추가된 부분

- **input에 값이 있는 상태에서 상세페이지로 이동하는 경우, input의 value가 초기화** 되도록 구현합니다.
        
- `상세보기` 클릭하면 **Todo의 상세 페이지로 이동**합니다.

## 상세 페이지
![](https://velog.velcdn.com/images/posinity/post/4aad518c-1228-4aec-ade6-27b65e56a1a5/image.png)


상세 페이지의 디자인과 화면 구성은 자유롭게 구현하되, 아래 요소들은 보여야 합니다.
- Todo의 ID
- Todo의 제목
- Todo의 내용
- `이전으로` 버튼
  - `이전으로` 버튼을 구현하고, `이전으로` 버튼을 클릭하면 리스트 화면으로 되돌아 갑니다.
### **제한사항**
- map을 사용할 때 **반드시 key**을 넣어야 하며, `map` 의 **index를 사용을 금지**합니다. 이것을 금지하는 이유는 강의에 다루었습니다.
- Todo Id 생성 시 `todos.length` 사용해서 생성하지 않습니다. `todos.length` 을 사용해서 id 생성 시 **발생할 수 있는 문제점에 대해 고민**해보시길 바랍니다.

## notice
todos 모듈의 initialState 는 있어도 되고, 없어도 됩니다. 예시 영상에서는 예시의 편의상 Todo가 initialState로 존재합니다.
```js
const initialState = [
	{
		id: 1, // id는 모두 고유값이어야 합니다.
		title: "리액트 강의보기",
		body: "챕터 1부터 챕터 12까지 학습",
		isDone: false
	},
	{
		id: 2, // id는 모두 고유값이어야 합니다.
		title: "점심 먹기",
		body: "점심 뭐먹지..?",
		isDone: false
	}
]
```

## Hint

- 예시에서 생성한 action creator는 총 4개 입니다.
`addTodo`, `deleteTodo`, `toggleStatusTodo`, `getTodoById`

- 중앙 정렬은 flex를 사용했습니다.
    
- 예시 사이트 : [http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/](http://todolistwithreduxassignment.s3-website.ap-northeast-2.amazonaws.com/)

## 제출방식
Vercel로 배포하여 IP주소를 제출해주세요.
