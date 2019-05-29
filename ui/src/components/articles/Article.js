import React from "react";
import { dateFmt } from "../../utils/helpers";
import "./Article.css";

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickShowAlert = this.handleClickShowAlert.bind(this);
    this.state = {
      alertStatus: false
    };
  }

  handleClickShowAlert() {
    this.setState({
      alertStatus: true
    });

    setTimeout(() => {
      this.setState({
        alertStatus: false
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

  renderButton() {
    const { data, save, del, path } = this.props;
    let render;
    switch (path) {
      case "/articles":
        render = (
          <>
            <button
              onClick={() => {
                save(data);
                this.handleClickShowAlert();
              }}
              className="btn btn-primary btn-sm input-group-btn"
            >
              Save Article
            </button>
            <span
              className={`alert-success ${
                this.state.alertStatus ? "alert-shown" : "alert-hidden"
              }`}
            >
              <strong>Saved!</strong>
            </span>
          </>
        );
        break;
      case "/saved":
        render = (
          <>
            <button
              onClick={() => {
                del(data.id);
                this.handleClickShowAlert();
              }}
              className="btn btn-error btn-sm input-group-btn"
            >
              Delete Article
            </button>
            <span
              className={`alert-success ${
                this.state.alertStatus ? "alert-shown" : "alert-hidden"
              }`}
            >
              <strong>Deleted!</strong>
            </span>
          </>
        );
        break;
      default:
    }
    return render;
  }

  render() {
    const { data } = this.props;
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
          {this.renderButton()}
        </div>
      </div>
    );
  }
}

export default Article;
