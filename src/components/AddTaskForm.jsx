import React from 'react';

class AddTaskForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, priority, addTodo } = this.props;
    addTodo(name, description, priority);
  };

  render() {
    const {
      name,
      description,
      priority,
      handleInputChange,
    } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Task Name"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="description"
          value={description}
          placeholder="Task Description"
          onChange={handleInputChange}
        />
        <select
          name="priority"
          value={priority}
          onChange={handleInputChange}
        >
          <option value={1}>Low</option>
          <option value={2}>Medium</option>
          <option value={3}>High</option>
        </select>
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default AddTaskForm;
