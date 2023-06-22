import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import NavigationStrings from '../../Const/NavigationStrings/NavigationStrings'

const Home = ({ navigation }) => {
    return (
        <View style={STYLES.mainCont} >
            <Text>Home Screen</Text>
            <Button title='Goto Settings' onPress={() => navigation.navigate(NavigationStrings.SETTINGS)} />
        </View>
    )
}

export default Home

const STYLES = StyleSheet.create({
    mainCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
    },
})