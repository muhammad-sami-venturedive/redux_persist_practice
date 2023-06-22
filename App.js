import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import ReduxStore from './SRC/Redux/Store/Store'
import MainNavigation from './SRC/Navigation/StackNavigation/MainNavigation/MainNavigation'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
    const { Store, Persistor } = ReduxStore()
    return (
        <Provider store={Store}>
            <PersistGate persistor={Persistor} loading={null} >
                <MainNavigation />
            </PersistGate>
        </Provider>
    )
}

export default App

const STYLES = StyleSheet.create({

})