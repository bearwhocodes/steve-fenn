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
        if (response.payload.ok) {
          dispatch(fetchTaggedArticlesSuccess(response.payload.json()));
        } else {
          dispatch(fetchTaggedArticlesFailure(response.payload.statusText));
        }
      });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleList);
