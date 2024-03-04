import { combineReducers } from "redux";

import setVisibleCount from "./VisibleCount";

const rootReducer = combineReducers({
  setVisibleCount,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
