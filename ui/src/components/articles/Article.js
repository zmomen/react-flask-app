import React from "react";
import { dateFmt } from "../../utils/helpers";
import "./Article.css";

const Article = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h4">{props.data.title}</div>
        <div>{dateFmt(props.data.published)}</div>
      </div>
      <div className="card-footer">
        <img
          width="300"
          src={props.data.img}
          className="img-responsive"
          alt="img here"
        />
        <p>{props.data.description}</p>
      </div>
    </div>
  );
};

export default Article;
