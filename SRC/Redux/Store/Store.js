import { createStore } from 'redux'
import RootReducer from '../Reducers/RootReducer/RootReducer'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { Alert } from 'react-native';


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // transforms: [encryptTransform({
    //     secretKey: 'my-secret-key',
    //     onError: (error) => {
    //         console.log(error)
    //         // Alert.alert('Error in encryption')
    //     }
    // })]
}

const enhancedReducer = persistReducer(persistConfig, RootReducer)

export default () => {
    let Store = createStore(enhancedReducer)
    let Persistor = persistStore(Store)

    return { Store, Persistor }

}


// export default Store = createStore(enhancedReducer)