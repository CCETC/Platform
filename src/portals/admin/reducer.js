import chrome from './components/chrome/reducer'
import drawer from './components/drawer/reducer'
import flash from './components/flash/reducer'
import forgot from './components/forgot/reducer'
import main from './components/main/reducer'
import notifications from './components/notifications/reducer'
import search from './components/search/reducer'
import session from './components/session/reducer'
import signin from './components/signin/reducer'

import collection from 'ui/components/collection/reducer'
import container from 'ui/components/container/reducer'
import infinite from 'ui/components/infinite/reducer'
import tabs from 'ui/components/tabs/reducer'

const Reducer = (state, action) => {

  const reducers = {
    chrome,
    drawer,
    flash,
    forgot,
    main,
    notifications,
    search,
    session,
    signin,
    collection,
    container,
    infinite,
    tabs
  }

  const namespace = action.type.split('/')[0]

  if(reducers[namespace]) {

    return {
      ...state,
      ...reducers[namespace](state, action)
    }

  } else if(state === undefined) {

    return {
      ...chrome(undefined, action),
      ...drawer(undefined, action),
      ...flash(undefined, action),
      ...forgot(undefined, action),
      ...main(undefined, action),
      ...notifications(undefined, action),
      ...search(undefined, action),
      ...session(undefined, action),
      ...signin(undefined, action),
      ...collection(undefined, action),
      ...container(undefined, action),
      ...infinite(undefined, action),
      ...tabs(undefined, action)
    }

  } else {

    return state

  }

}

export default Reducer
