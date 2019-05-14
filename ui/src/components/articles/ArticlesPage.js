import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getArticles } from "../../redux/actions/articleActions";
import Article from "./Article";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.props.getArticles();
  }

  renderArticles() {
    if (this.props.articles.length > 0) {
      this.articles = this.props.articles.map((article, key) => (
        <li key={article.id}>{article.title}<Article data={article}/></li>
      ));
      return <ul>{this.articles}</ul>;
    } else return;
  }

  render() {
    return <div>{this.renderArticles()}</div>;
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
