import React from 'react'
import { useSelector } from 'react-redux'

// A component to list articles in the store using "useSelector".
export default function ArticleList() {
  const articles = useSelector(state => state.articles, [])
  return (
    <div>
      <h1>Articles</h1>
      {articles.map(article => (
        <div key={article.id}>
          <h2>
            {article.title} (id: {article.id})
          </h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  )
}
