import constants from './types';

const initialState = {
  web3Provider: null
}

export function providerReducer(state = initialState, action) {
  switch (action, type){

    case constants.SET_PROVIDER;
    return Object.assign({}, state, {
    web3Provider: action.provider
  })

  default:
  return state
  }
}
