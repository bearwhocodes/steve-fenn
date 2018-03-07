import React, { Component } from 'react';
import { connect } from 'react-redux';

import ArticlesList from '../components/ArticlesList';

class TagPage extends Component {
  render(props) {
    const tag = props.match.params.tag;
    return (
      <div>
        <h1>Articles tagged with: {tag}</h1>
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

export default connect(mapStatetoProps)(TagPage);
