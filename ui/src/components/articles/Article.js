import React from "react";

const Article = (props) => {
  return (
    <>
      <span>Title: {props.data.title}</span>
      <br />
      <span>subtitle: {props.data.subtitle}</span>
      <br />
      <span>body: {props.data.body}</span>
      <br />
      <span>created at: {props.data.created_ts}</span>
      <br />
    </>
  );
};

export default Article;
