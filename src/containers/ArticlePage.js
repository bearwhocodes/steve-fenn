import { connect } from 'react-redux';

import {
  fetchArticle,
  fetchArticleSuccess,
  fetchArticleFailure
} from '../actions/articles';
import ArticleDetails from '../components/ArticleDetails';

const mapStatetoProps = (state, props) => {
  return {
    selectedArticle: state.articles.selectedArticle,
    articleId: props.match.params.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: id => {
      dispatch(fetchArticle(id)).then(response => {
        if (response.payload.ok) {
          dispatch(fetchArticleSuccess(response.payload.json()));
        } else {
          dispatch(fetchArticleFailure(response.payload.statusText));
        }
      });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleDetails);
