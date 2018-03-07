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
export const fetchArticles = () => ({
  type: FETCH_ARTICLES
});

// FETCH_ARTICLES_SUCCESS
export const fetchArticlesSuccess = () => ({
  type: FETCH_ARTICLES_SUCCESS
});

// FETCH_ARTICLES_FAILURE
export const fetchArticlesFailure = () => ({
  type: FETCH_ARTICLES_FAILURE
});

// FETCH_ARTICLE
export const fetchArticle = () => ({
  type: FETCH_ARTICLE
});

// FETCH_ARTICLE_SUCCESS
export const fetchArticleSuccess = () => ({
  type: FETCH_ARTICLE_SUCCESS
});

// FETCH_ARTICLE_FAILURE
export const fetchArticleFailure = () => ({
  type: FETCH_ARTICLE_FAILURE
});

// FETCH_TAGGED_ARTICLES
export const fetchTaggedArticles = () => ({
  type: FETCH_TAGGED_ARTICLES
});

// FETCH_TAGGED_ARTICLES_SUCCESS
export const fetchTaggedArticlesSuccess = () => ({
  type: FETCH_TAGGED_ARTICLES_SUCCESS
});

// FETCH_TAGGED_ARTICLES_FAILURE
export const fetchTaggedArticlesFailure = () => ({
  type: FETCH_TAGGED_ARTICLES_FAILURE
});
