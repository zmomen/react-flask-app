import React from 'react';
import 'spectre.css'

const Article = (props) => {

    return (
        <div className="column col-6">
            <div className="card">
                <div className="card-header">
                    <div className="card-title h5">{props.title}</div>
                    <div className="card-subtitle text-gray">{props.subtitle}</div>
                </div>
                <div className="card-image">
                    {/* <img src={props.imgPath} className="img-responsive" alt="here" /> */}
                </div>
                <div className="card-body">
                    {props.body}
  </div>
            </div>
        </div>
    )
};

export default Article;