import { LAYOUT_TOGGLE } from '../actions/types';

const initialState = {
    sidebar: {
        active: false
    },
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LAYOUT_TOGGLE:
            return {
                ...state,
                sidebar: {
                    active: action.active
                }
            }
        default:
            return state;
    }
}