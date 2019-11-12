import { actionType } from './../actions/actionType'

const initState = {
    articles: []
};

export const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.GET_ARTICLE:
            return { ...state, articles: action.payload };

        case actionType.POST_ARTICLE:
            return { ...state };

        case actionType.PUT_ARTICLE:
            return { ...state };

        case actionType.DELETE_ARTICLE:
            return { ...state };

        default:
            return state;
    }
}