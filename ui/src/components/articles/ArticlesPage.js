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

  componentDidMount() {
    // make api call.
    this.setState({ articles: this.props.getArticles() });
  }

  renderArticles() {
    if (this.props.articles == null) {
      return 1;
    } else {
      console.warn("not null", this.props.articles["articles"]["0"]);
      return 2;
    }

    // .map(art => {
    //   console.log("in render", art);
    //   return art.title
    // });
  }

  render() {
    return <div>{this.renderArticles()}</div>;
  }
}

function mapStateToProps(state) {
  console.warn("in page", state);
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
