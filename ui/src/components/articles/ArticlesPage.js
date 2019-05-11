import React from "react";
import { connect } from "react-redux";
import * as articleActions from "../redux/actions/articleActions";
import PropTypes from "prop-types";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    // make api call.
    // const { loadArticles } = this.props;

    // let articles = [1, 2, 3]; //loadArticles();
    console.log("all the articles");
    // console.log(loadArticles);
    // articles.map(article => {
    //   return (
    //     <div>
    //       <h2>{article.title}</h2>
    //       <p>{article.body}</p>
    //     </div>
    //   );
    // });
    // this.setState({ articles: articles });
    // console.log("state here", this.state.articles);
  }

  render() {
    return <div>{this.state.articles}</div>;
  }
}

ArticlesPage.propTypes = {
  articles: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    articles: state.articles
  };
}

const mapDispatchToProps = {
  // loadArticles: articleActions.loadArticles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
