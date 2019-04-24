import React, { useState } from 'react'
import { useRedux } from 'react-redux'
import { addArticle } from '../actions'

// A form to add articles, and a list of articles.
export default function Articles() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [articles, { createArticle }] = useRedux(state => state.articles, {
    createArticle: (title, body) => {
      // Lets reset the values in the form
      setTitle('')
      setBody('')
      // And send action.
      return addArticle({ title, body })
    },
  })
  return (
    <div>
      <p>
        Title:
        <br />
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </p>
      <p>
        Body:
        <br />
        <textarea value={body} onChange={e => setBody(e.target.value)} />
      </p>
      <button onClick={() => createArticle(title, body)}>Legg til artikkel</button>

      <h3>Artikler</h3>
      {articles.map(article => (
        <div key={article.id}>
          <h5>
            {article.title} (id: {article.id})
          </h5>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  )
}
