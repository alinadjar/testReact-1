import { DOUBLING, TRIPLE } from "../Actions/types";

const initialState = {
    currentValue: 1
};

export default function (state = initialState, action) {
    switch (action.type) {
        case DOUBLING:
            return {
                ...state,
                currentValue: state.currentValue * 2
            }
        case TRIPLE:
            return {
                ...state,
                currentValue: state.currentValue * 3
            }                
        default:
            return state;
    }
}