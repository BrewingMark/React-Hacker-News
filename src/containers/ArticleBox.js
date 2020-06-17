import React, {Component} from 'react';
import ArticleList from '../components/ArticleList';
import ArticleSearch from '../components/ArticleSearch'

class ArticleBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      articleIdList: [],
      articleList: []
    };
  }

  componentDidMount(){
    const articleIdUrl = "https://hacker-news.firebaseio.com/v0/topstories.json";
    fetch(articleIdUrl)
    .then(res => res.json())
    .then(articleIdList => {
      this.setState({articleIdList: articleIdList})

      const idOptions = articleIdList.map(id =>
        `https://hacker-news.firebaseio.com/v0/item/${id}.json`
      )

      Promise.all(idOptions.slice(0,25).map(url => fetch(url)
      .then(res => res.json())
      .then(result => {
        return result
      }))
    ).then(allPromiseResult => {
      this.setState({articleList: allPromiseResult})
    })
  })
  .catch(err => console.error)
}

handleSearch(query){
  
}

render(){
  return (
    <div>
      <ArticleSearch/>
      <ArticleList articles={this.state.articleList}/>
    </div>
  )
}

}

export default ArticleBox;
