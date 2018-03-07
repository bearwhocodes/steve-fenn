import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ArticlesPage from '../containers/ArticlesPage';
import ArticlePage from '../containers/ArticlePage';
import TagPage from '../containers/TagPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ArticlesPage} exact={true} />
      <Route path="/articles" component={ArticlesPage} exact={true} />
      <Route path="/articles/:id" component={ArticlePage} />
      <Route path="/tags/:tag" component={TagPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default AppRouter;
