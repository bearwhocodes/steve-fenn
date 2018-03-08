import React, { Component } from 'react';
import moment from 'moment';

import RelatedArticles from './RelatedArticles';
import TagLink from './TagLink';
import LoadingSpinner from './LoadingSpinner';
import ErrorMessage from './ErrorMessage';
import NotFoundPage from './NotFoundPage';

class ArticleDetails extends Component {
  componentWillMount() {
    this.props.fetchArticle(this.props.articleId);
  }

  render() {
    const { article, loading, error } = this.props.selectedArticle;

    if (loading) {
      return <LoadingSpinner />;
    } else if (error) {
      return <ErrorMessage error={error} />;
    } else if (!article) {
      return <NotFoundPage />;
    }

    return (
      <div>
        <h1>{article.title}</h1>
        <p>{moment(article.published_at).fromNow()}</p>
        <p>Reading Time: {article.reading_time}</p>
        {article.tags &&
          article.tags.map((tag, index) => <TagLink key={index} tag={tag} />)}
        <p>
          <img src={article.image} alt={article.title} />
        </p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
        {article.related_articles && (
          <RelatedArticles articles={article.related_articles} />
        )}
      </div>
    );
  }
}

export default ArticleDetails;
