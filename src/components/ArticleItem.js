import React from 'react';

const ArticleItem = (props) => {

  return (
    <div>
      <span>
        <h3><a href={props.article.url} target="_blank">{props.article.title}</a></h3>
        <p>By: {props.article.by}</p>
      </span>
    </div>
  )

}

export default ArticleItem;
