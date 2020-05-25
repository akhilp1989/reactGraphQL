import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger';
import {persistStore} from 'redux-persist'
import rootReducer from './root.reducer'
import createSagaMiddlware from 'redux-saga'
import {fetchCollections} from './ShopData/shop.sagas'


const sagaMiddleware=createSagaMiddlware()
const middlewares=[logger,sagaMiddleware]

 export const store=createStore(rootReducer,applyMiddleware(...middlewares));
 sagaMiddleware.run(fetchCollections)
 export const persistor=persistStore(store)

