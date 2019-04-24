import { ADD_ARTICLE } from '../constants/action-types'
const initialState = {
  currentArticleId: 1,
  articles: [{ id: 1, title: 'Hello', body: 'world' }],
}
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    const newArticleId = state.currentArticleId + 1
    return Object.assign({}, state, {
      articles: state.articles.concat({ ...action.payload, id: newArticleId }),
      currentArticleId: newArticleId,
    })
  }
  return state
}
export default rootReducer
