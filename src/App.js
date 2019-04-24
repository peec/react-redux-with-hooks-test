import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { MouseRender } from './components/mouse-render'
import Articles from './components/articles'
import ArticleForm from './components/article-form'
import ArticleList from './components/article-list'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>1. Simple example (no redux with React.useEffect and React.useState).</h1>
        <MouseRender />

        <h1>2. Redux example: using "useRedux" hook.</h1>
        <Articles />

        <h1>3. Redux example: using separate components with "useState", "useActions".</h1>

        <ArticleForm />

        <ArticleList />
      </div>
    </Provider>
  )
}

export default App
