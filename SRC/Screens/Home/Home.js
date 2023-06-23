import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import NavigationStrings from '../../Const/NavigationStrings/NavigationStrings'
import { DECREASE_FONTSIZE, INCREASE_FONTSIZE } from '../../Redux/Action Types/ActionTypes'
import { connect } from 'react-redux'

const Home = ({ navigation, size }) => {
    return (
        <View style={STYLES.mainCont} >
            <Text style={STYLES.text(size)} >Home Screen</Text>
            <Text style={STYLES.text(size)} >Current Font Size: {size}</Text>
            <Button title='Goto Settings' onPress={() => navigation.navigate(NavigationStrings.SETTINGS)} />
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        size: state.FontSizeReducer.FontSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({ type: INCREASE_FONTSIZE }),
        decrease: () => dispatch({ type: DECREASE_FONTSIZE }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)


const STYLES = StyleSheet.create({
    mainCont: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'row',
    },
    subCont: {
        justifyContent: 'space-around',
        padding: 10,
        margin: 10
    },
    text: (size) => ({
        fontSize: size ? size : 18
    })
})