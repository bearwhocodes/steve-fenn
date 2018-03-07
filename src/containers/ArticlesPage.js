import { connect } from 'react-redux';

import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailure
} from '../actions/articles';
import ArticleList from '../components/ArticleList';

const mapStatetoProps = state => {
  return {
    articles: state.articles.items
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles()).then(response => {
        !response.error
          ? dispatch(fetchArticlesSuccess(response.payload.data))
          : dispatch(fetchArticlesFailure(response.payload.data));
      });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleList);
