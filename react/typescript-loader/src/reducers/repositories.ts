import { RepositoryEntity } from '../model'
import { actionTypes } from '../common/constants/actionTypes'

export const repositoriesReducer = (state: RepositoryEntity[] = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_REPOSITORIES_COMPLETED:
      return handleFetchRepositoriesCompleted(state, action.payload)
  }
}

const handleFetchRepositoriesCompleted = (
  state: RepositoryEntity[],
  payload: RepositoryEntity[]
) => {
  return payload
}
