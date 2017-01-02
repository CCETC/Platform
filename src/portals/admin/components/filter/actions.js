import * as actionTypes from './action_types'

export function choose(index) {
  return {
    type: actionTypes.CHOOSE,
    index
  }
}

export function back() {
  return {
    type: actionTypes.BACK
  }
}

export function restart() {
  return {
    type: actionTypes.RESTART
  }
}

export function resetAll() {
  return {
    type: actionTypes.RESET_ALL
  }
}

export function reset(key) {
  return {
    type: actionTypes.RESET,
    key
  }
}

export function update(key, value) {
  return {
    type: actionTypes.UPDATE,
    key,
    value
  }
}
