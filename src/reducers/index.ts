import { combineReducers } from "redux";

import setVisibleCount from "./setVisibleCount";

const rootReducer = combineReducers({
  setVisibleCount,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
