import { useState } from "react";
import Form from "./form";
import Content from "./content/Content";
import todolist from "../mock/todolist";
import "./index.css";

const Components = () => {
  const [todo, setToDo] = useState(todolist);

  const newTodo = (e) => {
    e.preventDefault();
    const toDoItem = {
      id: todo.length + 1,
      toDo: e.target[0].value,
    };

    if (
      toDo.some(
        (item) => item.toDo.toLowerCase() === e.target[0].value.toLowerCase()
      )
    ) {
      alert("La task è già stata effettata!"); //Avanzato Alert
    } else {
      let todoArray = [...toDo];
      todoArray.push(toDoItem);

      setToDo(todoArray);
    }
  };

  const removeToDo = (id) => {
    let todoArray = [...toDo];
    let newArray = todoArray.filter((rem) => rem.id != id);
    setToDo(newArray);
  };

  return (
    <div className="Components">
      <div className="Components__overlay"></div>
      <Form submit={newTodo} />
      <div className="Components__todo">
        <h1>Things To Do:</h1>
        <div className="ToDoContent">
          {toDo
            .sort((a, b) => {
              let todoFirst = a.toDo.toLowerCase();
              let todoSecond = b.toDo.toLowerCase();
              if (todoFirst < todoSecond) {
                return -1;
              }
              if (todoFirst > todoSecond) {
                return 1;
              }
              return 0;
            })
            .map((toDo) => (
              <Content remove={removeToDo} data={toDo} key={toDo.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Components;
