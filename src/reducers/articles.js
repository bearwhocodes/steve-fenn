import {
  FETCH_ARTICLES,
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_ON_PAGE,
  FETCH_ARTICLES_ON_PAGE_SUCCESS,
  FETCH_ARTICLES_ON_PAGE_FAILURE,
  FETCH_ARTICLE,
  FETCH_ARTICLE_SUCCESS,
  FETCH_ARTICLE_FAILURE,
  FETCH_TAGGED_ARTICLES,
  FETCH_TAGGED_ARTICLES_SUCCESS,
  FETCH_TAGGED_ARTICLES_FAILURE,
  FETCH_TAGGED_ARTICLES_ON_PAGE,
  FETCH_TAGGED_ARTICLES_ON_PAGE_SUCCESS,
  FETCH_TAGGED_ARTICLES_ON_PAGE_FAILURE
} from '../actions/articles';

const INITIAL_STATE = {
  articleList: {
    items: [],
    error: null,
    loading: true,
    page: 1,
    totalArticles: 0
  },
  selectedArticle: {
    article: null,
    error: null,
    loading: true
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: null,
          loading: true
        }
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articleList: {
          items: action.payload.articles,
          error: null,
          loading: false,
          page: action.payload.page,
          totalArticles: action.payload.total_articles
        }
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: action.payload,
          loading: false
        }
      };
    case FETCH_ARTICLES_ON_PAGE:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: null,
          loading: true
        }
      };
    case FETCH_ARTICLES_ON_PAGE_SUCCESS:
      return {
        ...state,
        articleList: {
          items: action.payload.articles,
          error: null,
          loading: false,
          page: action.payload.page,
          totalArticles: action.payload.total_articles
        }
      };
    case FETCH_ARTICLES_ON_PAGE_FAILURE:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: action.payload,
          loading: false
        }
      };
    case FETCH_ARTICLE:
      return {
        ...state,
        selectedArticle: {
          ...state.selectedArticle,
          loading: true
        }
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
      return {
        ...state,
        selectedArticle: {
          article: null,
          error: action.payload,
          loading: false
        }
      };
    case FETCH_TAGGED_ARTICLES:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: null,
          loading: true
        }
      };
    case FETCH_TAGGED_ARTICLES_SUCCESS:
      return {
        ...state,
        articleList: {
          items: action.payload,
          error: null,
          loading: false,
          page: action.payload.page,
          totalArticles: action.payload.total_articles
        }
      };
    case FETCH_TAGGED_ARTICLES_FAILURE:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: action.payload,
          loading: false
        }
      };
    case FETCH_TAGGED_ARTICLES_ON_PAGE:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: null,
          loading: true
        }
      };
    case FETCH_TAGGED_ARTICLES_ON_PAGE_SUCCESS:
      return {
        ...state,
        articleList: {
          items: action.payload,
          error: null,
          loading: false,
          page: action.payload.page,
          totalArticles: action.payload.total_articles
        }
      };
    case FETCH_TAGGED_ARTICLES_ON_PAGE_FAILURE:
      return {
        ...state,
        articleList: {
          ...state.articleList,
          items: [],
          error: action.payload,
          loading: false
        }
      };
    default:
      return state;
  }
};
