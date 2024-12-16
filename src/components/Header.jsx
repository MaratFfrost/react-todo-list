import React from "react";

class Header extends React.PureComponent {
  render() {
    const { searchTerm, handleSearchChange } = this.props;
    return (
      <input
        type="text"
        className="header-input"
        placeholder="Enter todo name for search"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    );
  }
}

export default Header;
