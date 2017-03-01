// @flow
export const enableRetyping = function (reducer: Function) {
  return (state: Object, action: Object) => {
    if (action.retype) {
      return reducer(state, action.action)
    }
    return reducer(state, action)
  }
}

export const retypeAction = function (type: string, action: any) {
  return {
    type,
    action,
    retype: true
  }
}
