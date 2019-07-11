import { 
    LAYOUT_SIDEBAR_TOGGLE,
} from './types';

export const toggleSidebar = (active: boolean) => (dispatch: any) => {
    dispatch({
        type: LAYOUT_SIDEBAR_TOGGLE,
        active: active ? false : true,
    });
};