import { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

export const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // const enteredText = todoTextInputRef.current?.value;
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};
