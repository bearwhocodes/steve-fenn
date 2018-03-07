import React, { Component } from 'react';

class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    return <div>ArticleList</div>;
  }
}

export default ArticleList;
