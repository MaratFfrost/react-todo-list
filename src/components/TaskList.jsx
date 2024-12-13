import React, { Component } from "react";
import TaskItem from "./TaskItem";

class TaskList extends Component {
  render() {
    const { todos, toggleDone, delTodo } = this.props;

    const sortedTodos = [
      ...todos.filter((todo) => !todo.is_done),
      ...todos.filter((todo) => todo.is_done)
    ];

    return (
      <ul className="task-list">
        {sortedTodos.map((todo) => (
          <TaskItem key={todo.id} todo={todo} toggleDone={toggleDone} delTodo={delTodo} />
        ))}
      </ul>
    );
  }
}

export default TaskList;
