import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { DECREASE_FONTSIZE, INCREASE_FONTSIZE } from '../../Redux/Action Types/ActionTypes'
import { connect } from 'react-redux'

const Settings = ({ size, increase, decrease }) => {
    // console.log(size)
    return (
        <View style={STYLES.mainCont}>
            <Text style={STYLES.text(size)} >Settings Screen</Text>
            <Text style={STYLES.text(size)} >Current Font Size: {size}</Text>
            <View style={STYLES.subCont} >
                <Button title='Increase FontSize' onPress={() => increase()} />
                <Button title='Decrease FontSize' onPress={() => decrease()} />
            </View>
        </View>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => dispatch({ type: INCREASE_FONTSIZE }),
        decrease: () => dispatch({ type: DECREASE_FONTSIZE }),
    }
}

const mapStateToProps = (state) => {
    return {
        size: state.FontSizeReducer.FontSize
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)

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