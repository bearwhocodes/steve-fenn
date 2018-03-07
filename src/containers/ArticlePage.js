import React, { Component } from 'react';
import { connect } from 'react-redux';

class ArticlePage extends Component {
  render(props) {
    const id = props.match.params.id;
    return (
      <div>
        <h1>Articles with id: {id}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.articles.find(
      article => article.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(ArticlePage);
