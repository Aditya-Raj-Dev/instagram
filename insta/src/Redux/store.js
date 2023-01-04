import{applyMiddleware, combineReducers, legacy_createStore} from "redux"
import thunk  from "redux-thunk"
import authreducer from "./Authreducer/auth.reducer"

const Rootreducer=combineReducers({authreducer})

export const store=legacy_createStore(Rootreducer,applyMiddleware(thunk))