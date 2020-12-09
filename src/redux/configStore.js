import {combineReducers,createStore} from 'redux';
import {BaiTapGameOTXReducer} from './BaiTapGameOTXReducer'

const rootReducer = combineReducers({
    stateBaiTapGameOTX: BaiTapGameOTXReducer
})

export const store = createStore(rootReducer);