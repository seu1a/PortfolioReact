import { combineReducers } from "redux";

import addVisibleCount from "./addVisibleCount";

const rootReducer = combineReducers({
  addVisibleCount,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
