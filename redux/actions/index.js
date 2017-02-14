import * as types from '../../constants/actionTypes'

export function addComment(obj) {
  return { type: types.ADD_COMMIT, obj }
}