import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import FiltersPanel from "./components/FiltersPanel";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      name: "",
      description: "",
      priority: 1,
      searchTerm: "",
      filters: {
        isNotDone: false,
        highPriority: false,
        lowPriority: false,
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: name === "priority" ? Number(value) : value });
  };

  handleSearchChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleDone = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, is_done: !todo.is_done } : todo
      ),
    }));
  };

  addTodo = (name, description, priority) => {
    if (name.trim()) {
      const newTodo = {
        id: Date.now(),
        name: name,
        is_done: false,
        description: description,
        priority: priority
      };
      this.setState((prevState) => ({
        todos: [...prevState.todos, newTodo],
        name: "",
        description: "",
        priority: 1,
      }));
    }
  };

  handleFilterChange = (filterName, isChecked) => {
    this.setState((prevState) => ({
      filters: { ...prevState.filters, [filterName]: isChecked },
    }));
  };

  getFilteredTodos = () => {
    const { todos, searchTerm, filters } = this.state;
    return todos
      .filter((todo) =>
        todo.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((todo) => {
        if (filters.isNotDone && todo.is_done) return false;
        if (filters.highPriority && todo.priority !== 3) return false;
        if (filters.lowPriority && todo.priority !== 1) return false;
        return true;
      });
  };

  render() {
    const { searchTerm, filters, name, description, priority } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <div>
        <h1>Todo List</h1>
        <FiltersPanel filters={filters} onFilterChange={this.handleFilterChange} />
        <Header searchTerm={searchTerm} handleSearchChange={this.handleSearchChange} />

        {filteredTodos.length === 0 && searchTerm ? (
          <p>Tasks not found</p>
        ) : (
          <TaskList todos={filteredTodos} toggleDone={this.toggleDone} delTodo={this.delTodo} />
        )}

        <AddTaskForm
          name={name}
          description={description}
          priority={priority}
          handleInputChange={this.handleInputChange}
          addTodo={this.addTodo}
        />
      </div>
    );
  }
}

export default App;
