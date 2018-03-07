import React, { Component } from 'react';

class ArticleDetails extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.articleId);
  }

  render() {
    return <div>ArticleDetails</div>;
  }
}

export default ArticleDetails;
