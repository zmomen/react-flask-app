import React from "react";
import { dateFmt } from "../../utils/helpers";

const Article = props => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title h6">{props.data.title}</div>
        <div>{dateFmt(props.data.published)}</div>
      </div>
      <div className="card-footer">
        {props.data.description}
        <div className="card-image">
          <img
            width="300"
            height="300"
            src={props.data.img}
            className="img-responsive"
            alt="img here"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
