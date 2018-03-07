import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  FETCH_TAGGED_ARTICLES,
  FETCH_TAGGED_ARTICLES_SUCCESS,
  FETCH_TAGGED_ARTICLES_FAILURE
} from '../actions/articles';

const INITIAL_STATE = {
  articles: {
    items: [],
    error: null,
    loading: false
  },
  selectedArticle: {
    article: null,
    error: null,
    loading: false
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return { ...state, articles: { items: [], error: null, loading: true } };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: { items: action.payload, error: null, loading: false }
      };
    case FETCH_ARTICLES_FAILURE:
      const articlesError = action.payload || {
        message: action.payload.message
      };
      return {
        ...state,
        articles: { items: [], error: articlesError, loading: false }
      };
    case FETCH_ARTICLE:
      return {
        ...state,
        selectedArticle: { ...state.selectedArticle, loading: true }
      };
    case FETCH_ARTICLE_SUCCESS:
      return {
        ...state,
        selectedArticle: {
          article: action.payload,
          error: null,
          loading: false
        }
      };
    case FETCH_ARTICLE_FAILURE:
      const articleError = action.payload || {
        message: action.payload.message
      };
      return {
        ...state,
        selectedArticle: { article: null, error: articleError, loading: false }
      };
    case FETCH_TAGGED_ARTICLES:
      return { ...state, articles: { items: [], error: null, loading: true } };
    case FETCH_TAGGED_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: { items: action.payload, error: null, loading: false }
      };
    case FETCH_TAGGED_ARTICLES_FAILURE:
      const taggedArticlesError = action.payload || {
        message: action.payload.message
      };
      return {
        ...state,
        articles: { items: [], error: taggedArticlesError, loading: false }
      };
    default:
      return state;
  }
};