import { connect } from 'react-redux';

import {
  fetchArticle,
  fetchArticleSuccess,
  fetchArticleFailure
} from '../actions/articles';
import ArticleDetails from '../components/ArticleDetails';

const mapStatetoProps = (state, props) => {
  return {
    selectedArticle: state.selectedArticle,
    articleId: props.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: id => {
      dispatch(fetchArticle(id)).then(result => {
        if (result.payload.response && result.payload.response.status !== 200) {
          dispatch(fetchArticleFailure(result.payload.response.data));
        } else {
          dispatch(fetchArticleSuccess(result.payload.data));
        }
      });
    }
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(ArticleDetails);
