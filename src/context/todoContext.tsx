import * as React from 'react';
import { ITodo, TodoAction } from '../@types/todo';
import { todoReducer } from '../reducers/todoReducer';

export const TodoContext = React.createContext<{
  todos: ITodo[];
  dispatch: React.Dispatch<TodoAction>;
} | null>(null);

// TodoProvider component with the useReducer hook
const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [todos, dispatch] = React.useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;