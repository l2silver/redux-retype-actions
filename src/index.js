// @flow
export const enableRetyping = function (reducer: Function) {
  return function retypedReducer(state: Object, action: Object){
    if (action.retype) {
      return retypedReducer(
        retypedReducer(state, {
          type: action.type,
          payload: action.action,
        }),
        action.action
      )
    }
    return reducer(state, action)
  }
}

export const retypeAction = function (type: any, action: any) {
  return {
    type,
    action,
    retype: true
  }
}

