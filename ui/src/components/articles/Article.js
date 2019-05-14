import React from "react";

const Article = props => {
  return (
    <div className  ="card">
      <div className="card-header">
        <div className="card-title h5">{props.data.title}</div>
        <div className="card-subtitle text-gray">{props.data.subtitle}</div>
      </div>
      <div className="card-body">{props.data.body}</div>
      <div className="card-footer">
        {props.data.created_ts}
        <div className="card-image">
          {/* <img src="img/osx-el-capitan.jpg" class="img-responsive" alt="img here" /> */}
        </div>
      </div>
    </div>
  );
};

export default Article;
