import React, { Component } from 'react';

import ArticleListItem from './ArticleListItem';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchArticles(this.props.tag);
  }

  render() {
    const { items, error, loading } = this.props.articles;

    if (loading) {
      return <LoadingSpinner />;
    } else if (error) {
      return <ErrorMessage error={error} />;
    }

    return (
      <div>
        {items &&
          items.map((article, index) => (
            <ArticleListItem key={article.id} {...article} />
          ))}
      </div>
    );
  }
}

export default ArticleList;
