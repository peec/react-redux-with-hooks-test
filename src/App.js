import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { MouseRender } from './components/mouse-render'
import Articles from './components/articles'
import ArticleForm from './components/article-form'
import ArticleFormDispatch from './components/article-form-dispatch'
import ArticleList from './components/article-list'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <h1>1. Simple example (no redux with React.useEffect and React.useState).</h1>
          <MouseRender />
        </div>

        <div>
          <h1>2. Redux example: using separate components with "useSelector", "useDispatch".</h1>
          <ArticleFormDispatch />

          <ArticleList />
        </div>
        <div>
          <h1>3. Redux example: using "useRedux" hook</h1>
          <p>
            <code>useRedux</code> is deprecated in v7.1.0-alpha.3.
          </p>
          <Articles />
        </div>

        <div>
          <h1>4. Redux example: using separate components with "useSelector", "useActions".</h1>
          <p>
            <code>useActions</code> is deprecated in v7.1.0-alpha.4.
          </p>
          <ArticleForm />

          <ArticleList />
        </div>
      </div>
    </Provider>
  )
}

export default App
