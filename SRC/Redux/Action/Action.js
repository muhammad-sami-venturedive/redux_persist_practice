import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
    increaseFontsize: null,
    decreaseFontsize: null,
})

export const CounterTypes = Types

export default Creators