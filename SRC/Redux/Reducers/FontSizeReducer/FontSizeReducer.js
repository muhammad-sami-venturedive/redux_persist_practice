import { INCREASE_FONTSIZE, DECREASE_FONTSIZE } from '../../Action Types/ActionTypes'

const inititalState = {
    FontSize: 12
}

const FontSizeReducer = (state = inititalState, action) => {
    switch (action.type) {
        case INCREASE_FONTSIZE:
            if (state.FontSize < 32) {
                return {
                    ...state,
                    FontSize: state.FontSize + 1
                }
            } else {
                return state
            }
        case DECREASE_FONTSIZE:
            if (state.FontSize > 12) {
                return {
                    ...state,
                    FontSize: state.FontSize - 1
                }
            } else {
                return state
            }
        default:
            return state
    }
}

export default FontSizeReducer