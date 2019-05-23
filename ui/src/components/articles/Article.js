import React from "react";
import { dateFmt } from "../../utils/helpers";
import "./Article.css";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickShowAlert = this.handleClickShowAlert.bind(this);
    this.state = {
      savedStatus: false
    };
  }

  handleClickShowAlert() {
    this.setState({
      savedStatus: true
    });

    setTimeout(() => {
      this.setState({
        savedStatus: false
      });
    }, 2000);
  }

  getTitle(title, url) {
    return (
      <>
        {title.substring(0, title.lastIndexOf("-"))}
        {"-"}
        <a target="_blank" href={url} rel="noopener noreferrer">
          {title.substring(title.lastIndexOf("-") + 1)}
        </a>
      </>
    );
  }
  render() {
    const { data, save } = this.props;
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title h4">
            {this.getTitle(data.title, data.url)}
          </div>
        </div>
        <div className="card-footer">
          <i>{dateFmt(data.created_ts)}</i>
          <img
            width="300"
            src={data.img_url}
            className="img-responsive"
            alt="img here"
          />
          <p>{data.body}</p>
          <button
            onClick={() => {
              save(data);
              this.handleClickShowAlert();
            }}
            className="btn btn-primary btn-sm input-group-btn"
          >
            Save Article
          </button>
          <span className={`alert-success ${this.state.savedStatus ? 'alert-shown' : 'alert-hidden'}`}>
          <strong>Article Saved!</strong> 
        </span>
        </div>
      </div>
    );
  }
}

export default Article;
