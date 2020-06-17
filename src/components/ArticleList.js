import React from 'react';
import ArticleItem from './ArticleItem'

const ArticleList = (props) => {

  const articleItem = props.articles.map((article) => {
    return <ArticleItem article ={article} key={article.id}/>
  })

  return (
    <div>
      {articleItem}
    </div>
  )

}

export default ArticleList;
