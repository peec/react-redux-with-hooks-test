import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addArticle } from '../actions'

// A form to add articles.
export default function ArticleForm() {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // Note: useCallback is used only for performance. So we dont redefine the callback every render.
  const createArticle = useCallback(
    (title, body) => {
      // Lets reset the values in the form
      setTitle('')
      setBody('')
      dispatch(addArticle({ title, body }))
    },
    [dispatch],
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
