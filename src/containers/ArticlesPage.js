import { connect } from 'react-redux';

import {
  fetchArticles,
  fetchArticlesSuccess,
  fetchArticlesFailure
} from '../actions/articles';
import ArticleList from '../components/ArticleList';

const mapStatetoProps = state => {
  return {
    articles: state.articles.articleList
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
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleList);
