import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getArticles } from "../../redux/actions/articleActions";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  // componentDidMount() {
  //   // make api call.
  //   // let articles = this.props.getArticles();
  //   console.warn("called", articles);
  //   this.setState({ articles: articles });
  //   console.log("state here", this.state.articles);
  // }

  buildButton() {
    return (
      <button
        onClick={() => {
          this.props.getArticles();
        }}
      >
        Click to Get articles
      </button>
    );
  }
  render() {
    return <div>{this.buildButton()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getArticles }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
