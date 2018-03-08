import { connect } from 'react-redux';

import {
  fetchTaggedArticles,
  fetchTaggedArticlesSuccess,
  fetchTaggedArticlesFailure
} from '../actions/articles';
import ArticleList from '../components/ArticleList';

const mapStatetoProps = (state, props) => {
  return {
    articles: state.articles.articleList,
    tag: props.match.params.tag
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticles: tag => {
      dispatch(fetchTaggedArticles(tag)).then(response => {
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
