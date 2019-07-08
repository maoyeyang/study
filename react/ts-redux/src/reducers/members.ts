import { MemberEntity } from '../model'

//state ,初始值
export const membersReducer = (state: MemberEntity[] = [], action) => {
  switch (action.type) {
    case 'FETCH_MEMBER_COMPLETED':
      return action.payload
  }
  return state
}
