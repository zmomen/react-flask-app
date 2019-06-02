import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  getArticles,
  saveArticle,
  deleteArticle,
  getSavedArticles
} from "../../redux/actions/articleActions";
import Article from "./Article";
import SearchBar from "../common/SearchBar";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
    this.search = this.search.bind(this);
    this.save = this.save.bind(this);
    this.del = this.del.bind(this);
    this.handleArticleCategory = this.handleArticleCategory.bind(this);
  }

  handleArticleCategory(path) {
    path = path.substring(path.lastIndexOf("/"));
    this.props.getArticles(path);
  }

  componentDidMount() {
    const path = this.props.location.pathname;
    path === "/saved"
      ? this.props.getSavedArticles()
      : this.handleArticleCategory(path);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.articles !== this.props.articles) {
      this.setState({ articles: nextProps.articles });
    }
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this.handleArticleCategory(nextProps.location.pathname);
    }
  }

  search(e) {
    let articles = this.props.articles;
    let searchVal = e.target.value.toLowerCase();
    articles = articles.filter(
      article =>
        article.title.toLowerCase().includes(searchVal) ||
        article.body.toLowerCase().includes(searchVal)
    );
    this.setState({ articles: articles });
  }

  save(data) {
    this.props.saveArticle(data);
  }

  del(id) {
    let articles = this.state.articles;
    articles = articles.filter(article => article.id !== id);
    this.props.deleteArticle(id);
    this.setState({ articles: articles });
  }

  renderArticles() {
    if (this.props.articles.length > 0) {
      const lists = []
        .concat(this.state.articles)
        .sort((a, b) => a.created_ts > b.created_ts)
        .map(article => (
          <li key={article.id}>
            <Article
              data={article}
              save={this.save}
              del={this.del}
              path={this.props.location.pathname}
            />
          </li>
        ));
      return <ul>{lists}</ul>;
    } else return;
  }

  render() {
    return (
      <>
        <h2>Latest Articles</h2>
        <SearchBar search={this.search} />
        <div>{this.renderArticles()}</div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { getArticles, saveArticle, getSavedArticles, deleteArticle },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
