import React from "react";
import { dateFmt } from "../../utils/helpers";
import "./Article.css";

const Article = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h4">{props.data.title}</div>
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
        <button onClick={() => {props.save(props.data)}}
        className="btn btn-primary btn-sm input-group-btn">
          Save Article
        </button>
      </div>
    </div>
  );
};

export default Article;
