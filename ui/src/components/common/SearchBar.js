import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <ul>
        <li className="tab-item tab-action">
          <div className="input-group input-inline">
            <input
              className="form-input input-sm"
              type="text"
              onChange={this.props.search}
            />
            <button className="btn btn-primary btn-sm input-group-btn">
              Find in page
            </button>
          </div>
        </li>
      </ul>
    );
  }
}

export default SearchBar;
