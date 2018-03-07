import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlesList from '../components/ArticlesList';

class ArticlesPage extends Component {
  render(props) {
    return (
      <div>
        <h1>Articles</h1>
        <ArticlesList articles={props.articles} />
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStatetoProps)(ArticlesPage);
