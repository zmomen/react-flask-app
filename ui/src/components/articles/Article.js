import React from "react";

const Article = props => {
  return (
    <div class="card">
      <div class="card-header">
        <div class="card-title h5">{props.data.title}</div>
        <div class="card-subtitle text-gray">{props.data.subtitle}</div>
      </div>
      <div class="card-body">{props.data.body}</div>
      <div class="card-footer">
        {props.data.created_ts}
        <div class="card-image">
          {/* <img src="img/osx-el-capitan.jpg" class="img-responsive" alt="img here" /> */}
        </div>
      </div>
    </div>
  );
};

export default Article;
