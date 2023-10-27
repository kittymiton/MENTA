import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ArticleList } from './components/ArticleList';
import { Contact } from './components/Contact';
import "./index.css";
import { ArticleDetail } from './components/ArticleDetail';
import { Header } from './components/Header';
export const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Header />
          <ArticleList />
        </Route>
        {/* <Route path={"/posts/:id"}>
          <Switch>
            <Header />
            <ArticleDetail />
          </Switch>
        </Route> */}
        {/* renderの中のアロー関数の返却値にRouteの中身を返す */}
        <Route
          path="/posts"
          render={({ match: { url } }) => (
            <Switch>
              <Route path={`${url}/:id`}>
                <Header />
                <ArticleDetail />
              </Route>
            </Switch>
          )}
        />
        <Route path="/contact">
          <Header />
          <Contact />
        </Route>
      </Switch>
    </BrowserRouter >
  )
};
