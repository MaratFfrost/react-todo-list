import React, { Component } from "react";

class FiltersPanel extends Component {
  handleFilterChange = (e, filterName) => {
    const { checked } = e.target;
    this.props.onFilterChange(filterName, checked);
  };

  render() {
    const { filters } = this.props;

    return (
      <div>
        <label>
          <input
            type="checkbox"
            checked={filters.isNotDone}
            onChange={(e) => this.handleFilterChange(e, "isNotDone")}
          />
          Show only uncompleted tasks
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.highPriority}
            onChange={(e) => this.handleFilterChange(e, "highPriority")}
          />
          Show only high priority tasks
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.lowPriority}
            onChange={(e) => this.handleFilterChange(e, "lowPriority")}
          />
          Show only low priority tasks
        </label>
      </div>
    );
  }
}

export default FiltersPanel;
