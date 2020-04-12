import { combineReducers } from "redux";

export const appReducer = combineReducers({});

const rootReducer = (state, action) => {
	return appReducer(state, action);
};

export default rootReducer;
