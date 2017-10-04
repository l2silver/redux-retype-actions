// @flow
import {enableRetyping, retypeAction} from './'

describe('redux-retype-actions', function () {
  it('enables action retyping', function () {
      const reducer = function (state, action){
        switch(action.type){
          case 'MAYBE':
            return 2
          case '1':
            return 1
          case '0':
            return 0
          default:
            return state
        }
      }
      const enabledReducer = enableRetyping(reducer)
      const trueAction = {
        type: '1',
      }
      const falseAction = {
        type: '0'
      }
      const maybeAction = {
        type: '2'
      }
      const renameTrueAction = retypeAction('TRUE', trueAction)
      const renameFalseAction = retypeAction('FALSE', falseAction)
      const renameMaybeAction = retypeAction('MAYBE', maybeAction)
      expect(enabledReducer({}, renameTrueAction)).toBe(1)
      expect(enabledReducer({}, renameTrueAction)).toBe(1)
      expect(enabledReducer({}, renameMaybeAction)).toBe(2)
      expect(renameTrueAction.type).toBe('TRUE')
      expect(renameFalseAction.type).toBe('FALSE')
      expect(renameMaybeAction.type).toBe('MAYBE')
  })
})