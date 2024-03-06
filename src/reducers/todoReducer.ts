import { ITodo, TodoAction } from "../@types/todo";

export const todoReducer = (state: ITodo[], action: TodoAction): ITodo[] => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, action.payload];

      case 'UPDATE_TODO':
        return state.map((todo) =>
          todo.id === action.payload ? { ...todo, status: true } : todo
        );

      default:
        return state;
    }
};