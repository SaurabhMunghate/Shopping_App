// reducers.js
const initialState = {
    todos: [], // Add this line
  };
  // reducers.js
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_TODOS':
      return { ...state, todos: action.payload };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    default:
      return state;
  }
};
