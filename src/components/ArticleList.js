import React, { Component } from 'react';
import Pagination from 'react-js-pagination';

import ArticleListItem from './ArticleListItem';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';

class ArticleList extends Component {
  componentWillMount() {
    this.props.fetchArticles(this.props.tag);
  }

  onPaginationChange = pageNumber => {
    if (this.props.articles.page !== pageNumber) {
      this.props.changePageNumber(pageNumber, this.props.tag);
    }
  };

  render() {
    const { items, error, loading, page, totalArticles } = this.props.articles;

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
        <Pagination
          activePage={page}
          pageRangeDisplayed={3}
          totalItemsCount={totalArticles}
          itemsCountPerPage={10}
          onChange={this.onPaginationChange}
        />
      </div>
    );
  }
}

export default ArticleList;
