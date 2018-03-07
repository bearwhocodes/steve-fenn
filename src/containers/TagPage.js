import { connect } from 'react-redux';

import {
  fetchTaggedArticles,
  fetchTaggedArticlesSuccess,
  fetchTaggedArticlesFailure
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
      dispatch(fetchTaggedArticles()).then(response => {
        !response.error
          ? dispatch(fetchTaggedArticlesSuccess(response.payload.data))
          : dispatch(fetchTaggedArticlesFailure(response.payload.data));
      });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleList);
