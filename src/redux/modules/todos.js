//Action Value
const ADD_TODO = "TODOS/ADD_TODO";
const REMOVE_TODO = "TODOS/REMOVE_TODO";
const EDIT_TODO = "TODOS/EDIT_TODO";
const DETAIL_MATCHING_ID = "TODOS/DETAIL_GET_ID";

// Action Creator
export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const removeTodo = (payload) => {
  return { type: REMOVE_TODO, payload };
};

export const editTodo = (payload) => {
  return { type: EDIT_TODO, payload };
};

export const getId = (payload) => {
  return { type: DETAIL_MATCHING_ID, payload };
};

// initial State
const initialState = {
  todos: [
    { id: 1, title: "Hi", content: "Hey", isDone: false },
    { id: 2, title: "Bye", content: "See you", isDone: true },
  ],
};

// Reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return { ...todo, isDone: !todo.isDone };
          } else {
            return todo;
          }
        }),
      };
    case DETAIL_MATCHING_ID:
      return {
        ...state,
        todo: state.todos.find((todo) => {
          // 배열 요소 순차순회하며 조건에 일치하는 값 반환
          return todo.id === action.payload;
          // todo id를 비교해서 맞는걸 리턴
        }),
      };

    default:
      return state;
  }
};

export default todos;
