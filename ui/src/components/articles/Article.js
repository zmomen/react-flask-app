import React from "react";
import { dateFmt } from "../../utils/helpers";
import "./Article.css";

const Article = props => {
  const getTitle = (title, url) => {
    return (
      <>
        {title.substring(0, title.lastIndexOf("-"))}
        {"-"}
        <a target="_blank" href={url} rel="noopener noreferrer">
          {title.substring(title.lastIndexOf("-") + 1)}
        </a>
      </>
    );
  };
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h4">
          {getTitle(props.data.title, props.data.url)}
        </div>
      </div>
      <div className="card-footer">
        <i>{dateFmt(props.data.published)}</i>
        <img
          width="300"
          src={props.data.img}
          className="img-responsive"
          alt="img here"
        />
        <p>{props.data.description}</p>
        <button
          onClick={() => {props.save(props.data);}}
          className="btn btn-primary btn-sm input-group-btn"
        >
          Save Article
        </button>
      </div>
    </div>
  );
};

export default Article;
