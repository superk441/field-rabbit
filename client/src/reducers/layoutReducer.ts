import { 
    LAYOUT_SIDEBAR_TOGGLE,
} from '../actions/types';

const initialState = {
    sidebar: {
        active: false
    },
    page: ''
};

export default (state = initialState, action: any) => {
    switch(action.type) {
        case LAYOUT_SIDEBAR_TOGGLE:
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