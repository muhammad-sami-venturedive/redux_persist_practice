import { createReducer } from 'reduxsauce'
// import Types from '../../Action Types/Types'
// import { INCREASE_FONTSIZE, DECREASE_FONTSIZE } from '../../Action Types/ActionTypes'
import { CounterTypes } from '../../Action/Action'

export const INITIAL_STATE = {
    FontSize: 12
}

export const IncreaseFontsize = (state = INITIAL_STATE, action) => {
    if (state.FontSize < 32) {
        return {
            ...state,
            FontSize: state.FontSize + 1
        }
    } else {
        return state
    }
}


export const DecreaseFontsize = (state = INITIAL_STATE, action) => {
    if (state.FontSize > 12) {
        return {
            ...state,
            FontSize: state.FontSize - 1
        }
    } else {
        return state
    }
}


export const HANDLER = {
    [CounterTypes.INCREASE_FONTSIZE]: IncreaseFontsize,
    [CounterTypes.DECREASE_FONTSIZE]: DecreaseFontsize,
}

export default createReducer(INITIAL_STATE, HANDLER)
