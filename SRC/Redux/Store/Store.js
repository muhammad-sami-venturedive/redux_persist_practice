import { createStore } from 'redux'
import RootReducer from '../Reducers/RootReducer/RootReducer'
// import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const enhancedReducer = persistReducer(persistConfig, RootReducer)

export default () => {
    let Store = createStore(enhancedReducer)
    let Persistor = persistStore(Store)

    return { Store, Persistor }

}


// export default Store = createStore(enhancedReducer)