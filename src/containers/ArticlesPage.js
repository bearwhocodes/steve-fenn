import { connect } from 'react-redux';

import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailure,
  fetchArticlesOnPage,
  fetchArticlesOnPageSuccess,
  fetchArticlesOnPageFailure
} from '../actions/articles';
import ArticleList from '../components/ArticleList';

const mapStatetoProps = state => {
  return {
    articles: state.articleList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: () => {
      dispatch(fetchArticles()).then(response => {
        if (response.payload.ok) {
          dispatch(fetchArticlesSuccess(response.payload.json()));
        } else {
          dispatch(fetchArticlesFailure(response.payload.statusText));
        }
      });
    },
    changePageNumber: pageNumber => {
      dispatch(fetchArticlesOnPage(pageNumber)).then(response => {
        if (response.payload.ok) {
          dispatch(fetchArticlesOnPageSuccess(response.payload.json()));
        } else {
          dispatch(fetchArticlesOnPageFailure(response.payload.statusText));
        }
      });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleList);
