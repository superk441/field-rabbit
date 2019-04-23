import { LAYOUT_TOGGLE } from './types';

export const toggleSidebar = (active) => (dispatch) => {
    dispatch({
        type: LAYOUT_TOGGLE,
        active: active ? false : true,
    });
};