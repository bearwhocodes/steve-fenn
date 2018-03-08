export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export const FETCH_ARTICLE = 'FETCH_ARTICLE';
export const FETCH_ARTICLE_SUCCESS = 'FETCH_ARTICLE_SUCCESS';
export const FETCH_ARTICLE_FAILURE = 'FETCH_ARTICLE_FAILURE';

export const FETCH_TAGGED_ARTICLES = 'FETCH_TAGGED_ARTICLES';
export const FETCH_TAGGED_ARTICLES_SUCCESS = 'FETCH_TAGGED_ARTICLES_SUCCESS';
export const FETCH_TAGGED_ARTICLES_FAILURE = 'FETCH_TAGGED_ARTICLES_FAILURE';

// FETCH_ARTICLES
export const fetchArticles = () => {
  const request = fetch('/endpoints/articles');

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

// FETCH_ARTICLE
export const fetchArticle = id => {
  const request = fetch(`/endpoints/articles/${id}`);

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
export const fetchTaggedArticles = tag => {
  const request = fetch(`/endpoints/tags/${tag}/articles`);

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
