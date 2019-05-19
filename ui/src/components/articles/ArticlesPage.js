import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getArticles } from "../../redux/actions/articleActions";
import Article from "./Article";
import "./Article.css";
import SearchBar from "../common/SearchBar";

class ArticlesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: []
    };
    this.search = this.search.bind(this);

    this.props.getArticles();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.articles !== this.props.articles) {
      this.setState({ articles: nextProps.articles });
    }
  }

  search(e) {
    let articles = this.props.articles;
    let searchVal = e.target.value.toLowerCase();
    articles = articles.filter(article => article.title.toLowerCase().includes(searchVal));
    this.setState({ articles: articles });
  }

  renderArticles() {
    if (this.props.articles.length > 0) {
      const lists = this.state.articles.map(article => (
        <li key={article.id}>
          <Article data={article} />
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
        {/* {console.warn("state articles?", this.state)} */}
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
  return bindActionCreators({ getArticles }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
