
import { TodoContext } from '../context/todoContext';
import { TodoContextType, ITodo } from '../@types/todo';
import { FC, FormEvent, useContext, useState } from 'react';

const AddTodo: FC = () => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType;
  const [formData, setFormData] = useState<ITodo | {}>();
  const handleForm = (e: FormEvent<HTMLInputElement>): void => {
    const value = e.currentTarget.value
    setFormData({
      ...formData,
      [e.currentTarget.id]: value,
    });
  };

  const handleSaveTodo = (e: FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    saveTodo(formData);
  };

  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  );
};
export default AddTodo;