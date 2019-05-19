import React from "react";
// import { connect } from "react-redux";

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
            <button
              // onClick={this.props.search}
              className="btn btn-primary btn-sm input-group-btn"
            >
              Search
            </button>
          </div>
        </li>
      </ul>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     articles: state.articles
//   };
// }

export default SearchBar;
// export default connect(mapStateToProps)(SearchBar);
