export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const FETCH_ARTICLES_ON_PAGE = 'FETCH_ARTICLES_ON_PAGE';
export const FETCH_ARTICLES_ON_PAGE_SUCCESS = 'FETCH_ARTICLES_ON_PAGE_SUCCESS';
export const FETCH_ARTICLES_ON_PAGE_FAILURE = 'FETCH_ARTICLES_ON_PAGE_FAILURE';

export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const FETCH_TAGGED_ARTICLES = 'FETCH_TAGGED_ARTICLES';
export const FETCH_TAGGED_ARTICLES_SUCCESS = 'FETCH_TAGGED_ARTICLES_SUCCESS';
export const FETCH_TAGGED_ARTICLES_FAILURE = 'FETCH_TAGGED_ARTICLES_FAILURE';

export const FETCH_TAGGED_ARTICLES_ON_PAGE = 'FETCH_TAGGED_ARTICLES_ON_PAGE';
export const FETCH_TAGGED_ARTICLES_ON_PAGE_SUCCESS =
  'FETCH_TAGGED_ARTICLES_ON_PAGE_SUCCESS';
export const FETCH_TAGGED_ARTICLES_ON_PAGE_FAILURE =
  'FETCH_TAGGED_ARTICLES_ON_PAGE_FAILURE';

// FETCH_ARTICLES
export const fetchArticles = () => {
  const request = fetch(`${process.env.REACT_APP_API_URL}/endpoints/articles`);

  return {
    type: FETCH_ARTICLES,
    payload: request
  };
};

// FETCH_ARTICLES_SUCCESS
export const fetchArticlesSuccess = articles => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload: articles
});

// FETCH_ARTICLES_FAILURE
export const fetchArticlesFailure = error => ({
  type: FETCH_ARTICLES_FAILURE,
  payload: error
});

// FETCH_ARTICLES_ON_PAGE
export const fetchArticlesOnPage = pageNumber => {
  const request = fetch(
    `${process.env.REACT_APP_API_URL}/endpoints/articles?page=${pageNumber}`
  );

  return {
    type: FETCH_ARTICLES_ON_PAGE,
    payload: request
  };
};

// FETCH_ARTICLES_ON_PAGE_SUCCESS
export const fetchArticlesOnPageSuccess = articles => ({
  type: FETCH_ARTICLES_ON_PAGE_SUCCESS,
  payload: articles
});

// FETCH_ARTICLES_ON_PAGE_FAILURE
export const fetchArticlesOnPageFailure = error => ({
  type: FETCH_ARTICLES_ON_PAGE_FAILURE,
  payload: error
});

// FETCH_ARTICLE
export const fetchArticle = id => {
  const request = fetch(
    `${process.env.REACT_APP_API_URL}/endpoints/articles/${id}`
  );

  return {
    type: FETCH_ARTICLE,
    payload: request
  };
};

// FETCH_ARTICLE_SUCCESS
export const fetchArticleSuccess = selectedArticle => ({
  type: FETCH_ARTICLE_SUCCESS,
  payload: selectedArticle
});

// FETCH_ARTICLE_FAILURE
export const fetchArticleFailure = error => ({
  type: FETCH_ARTICLE_FAILURE,
  payload: error
});

// FETCH_TAGGED_ARTICLES
export const fetchTaggedArticles = (tag, pageNumber) => {
  const request = fetch(
    `${process.env.REACT_APP_API_URL}/endpoints/tags/${tag}/articles`
  );

  return {
    type: FETCH_TAGGED_ARTICLES,
    payload: request
  };
};

// FETCH_TAGGED_ARTICLES_SUCCESS
export const fetchTaggedArticlesSuccess = articles => ({
  type: FETCH_TAGGED_ARTICLES_SUCCESS,
  payload: articles
});

// FETCH_TAGGED_ARTICLES_FAILURE
export const fetchTaggedArticlesFailure = error => ({
  type: FETCH_TAGGED_ARTICLES_FAILURE,
  payload: error
});

// FETCH_TAGGED_ARTICLES_ON_PAGE
export const fetchTaggedArticlesOnPage = (tag, pageNumber) => {
  const request = fetch(
    `${
      process.env.REACT_APP_API_URL
    }/endpoints/tags/${tag}/articles&page=${pageNumber}`
  );

  return {
    type: FETCH_TAGGED_ARTICLES_ON_PAGE,
    payload: request
  };
};

// FETCH_TAGGED_ARTICLES_ON_PAGE_SUCCESS
export const fetchTaggedArticlesOnPageSuccess = articles => ({
  type: FETCH_TAGGED_ARTICLES_ON_PAGE_SUCCESS,
  payload: articles
});

// FETCH_TAGGED_ARTICLES_ON_PAGE_FAILURE
export const fetchTaggedArticlesOnPageFailure = error => ({
  type: FETCH_TAGGED_ARTICLES_ON_PAGE_FAILURE,
  payload: error
});
