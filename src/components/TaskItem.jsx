import React from "react";

class TaskItem extends React.PureComponent {
  getPriorityLabel = (priority) => {
    switch (priority) {
      case 1:
        return "Не срочно";
      case 2:
        return "Средне";
      case 3:
        return "Важно";
      default:
        return "";
    }
  };

  render() {
    const { todo, toggleDone, delTodo } = this.props;

    let priorityClass = "";
    switch (todo.priority) {
      case 1:
        priorityClass = "priority-low";
        break;
      case 2:
        priorityClass = "priority-medium";
        break;
      case 3:
        priorityClass = "priority-high";
        break;
      default:
        priorityClass = "";
    }

    return (
      <li className="task-item" style={{ opacity: todo.is_done ? 0.5 : 1 }}>
        <input
          type="checkbox"
          checked={todo.is_done}
          onChange={() => toggleDone(todo.id)}
        />
        <button className="delete-button" onClick={() => delTodo(todo.id)}>
          Delete
        </button>
        <span>{todo.name}: {todo.description}</span>
        <span className={`priority ${priorityClass}`}>({this.getPriorityLabel(todo.priority)})</span>
      </li>
    );
  }
}

export default TaskItem;
