import React, { useState } from 'react'
import { useActions } from 'react-redux'
import { addArticle } from '../actions'

// A form to add articles. (note useActions is deprecated in v7.1.0-alpha.4).
export default function ArticleForm() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const { createArticle } = useActions(
    {
      createArticle: (title, body) => {
        // Lets reset the values in the form
        setTitle('')
        setBody('')
        // And send action.
        return addArticle({ title, body })
      },
    },
    [],
  )

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
    </div>
  )
}
