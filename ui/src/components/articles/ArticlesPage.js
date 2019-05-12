import React from "react";
import { connect } from "react-redux";
import * as articleActions from "../redux/actions/articleActions";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    // make api call.
    let articles = this.props.getArticles();
    console.warn(articles);
    this.setState({ articles: articles });
    console.log("state here", this.state.articles);
  }

  render() {
    return <div>{this.state.articles}</div>;
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

const mapDispatchToProps = dispatch => {
  console.warn("where ami ?", dispatch)
  return {
    getArticles: () => dispatch(articleActions.getArticles())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
